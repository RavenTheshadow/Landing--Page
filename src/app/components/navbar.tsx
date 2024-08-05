'use client';
import "@/app/styles/css/navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

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
            <nav className={`header--navbar flex justify-between p-3 divide-x-2
                     ${darkMode ? 'divide-white' : 'divide-black'}`}>
                <div className="nav__element header-title">
                    <h1>Welcome to my Landing Page</h1>
                </div>
                <div className="nav__element flex nav__links">
                    <Link href={'/'} className="navigator">Home</Link>
                    <Link href={'/Function 2'} className="navigator">Function A</Link >
                    <Link href={'/Function 3'} className="navigator">Function B</Link>
                    <Link href={'/Function 4'} className="navigator">Function C</Link>
                </div>

                <div className="nav__element nav__switch">
                    <button onClick={toggleDarkMode} className="dark-mode-button">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>

                <div className="nav__element flex nav__login justify-between">
                    <a href={'/login'} className="login">Login</a>
                    <a href={'/logout'} className="login">Logout</a>
                </div>
            </nav>
        </div>
    );
}
