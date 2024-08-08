'use client';
import "@/styles/css/navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loggout, saveDarkMode } from "@/libs/LocalStorage";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar(
    { param: { locale } }: { param: { locale: string } }
) {
    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter();
    const pathName = usePathname()
    const t = useTranslations('navbar');

    const toggleDarkMode = () => {
        saveDarkMode(!darkMode);
        setDarkMode(prevMode => !prevMode);
    };

    const toggleLanguage = () => {
        const new_router = locale === 'en' ? pathName.replace('/en', '/vi') : pathName.replace('/vi', '/en')
        router.replace(new_router)
        router.refresh()
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                document.body.style.backgroundColor = "#333";
                document.body.style.color = "#fff";
            } else {
                document.body.style.backgroundColor = "#fff";
                document.body.style.color = "#333";
            }
        }
    }, [darkMode]);

    return (
        <div id={darkMode ? "dark" : ""}>
            <nav className={`header--navbar divide-x-2 ${darkMode ? 'divide-white' : 'divide-black'}`}>
                <div className="header-title">
                    <h1>{t('Welcome')}</h1>
                </div>
                <div className="nav__links">
                    <Link href={'/'} className="navigator">{t('Home')}</Link>
                    <Link href={'/Function 2'} className="navigator">{t('FunctionA')}</Link>
                    <Link href={'/Function 3'} className="navigator">{t('FunctionB')}</Link>
                    <Link href={'/Function 4'} className="navigator">{t('FunctionC')}</Link>
                </div>
                <div className="nav__switch">
                    <button onClick={toggleLanguage} className="dark-mode-button">
                        {locale === 'en' ? 'English' : 'Tiếng Việt'}
                    </button>
                </div>
                <div className="nav__switch">
                    <button onClick={toggleDarkMode} className="dark-mode-button">
                        {darkMode ? t('DarkMode') : t('LightMode')}
                    </button>
                </div>
                <div className="nav__login">
                    <a href={`/${locale}/login`} className="login">{t('Login')}</a>
                    <button onClick={loggout} className="login">{t('Logout')}</button>
                </div>
            </nav>
        </div>
    );
}
