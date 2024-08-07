'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getDarkMode, saveJWTtoLocalStorage } from "../../libs/LocalStorage";
import { Status } from "../../libs/loginStatus";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const reDirectToHome = (path: string) => {
        router.push(path);
    }

    const showToastMessage = (message: string, status: Status) => {
        switch (status) {
            case Status.SUCCESS: {
                toast.success(message);
                break;
            }
            case Status.ERROR: {
                toast.error(message);
                break;
            }
            default: {
                toast.warning(message);
                break;
            }
        }
    }

    const sendLoginRequest = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                saveJWTtoLocalStorage(data.access_token);

                showToastMessage('Đăng nhập thành công', Status.SUCCESS);

                setTimeout(() => {
                    reDirectToHome('/');
                }, 5000);

            } else {
                throw new Error('Login failed');
            }
        } catch (e) {
            showToastMessage('Đăng nhập thất bại', Status.ERROR);
        }
    };

    const darkMode = getDarkMode();
    const t = useTranslations('login');
    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-md">
                <div className="border-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl rounded-md">
                    <div className="mt-5">
                        <img
                            alt="Raven The Shadow"
                            src="https://avatars.githubusercontent.com/u/137809975?s=96&v=4"
                            className="mx-auto h-10 w-auto rounded-full"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                            {t('Header')}
                        </h2>
                    </div>

                    <div className="mt-10 mb-10">
                        <form onSubmit={sendLoginRequest} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 custom-blue">
                                    {t('Email')}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-custom-gray shadow-sm ring-1 ring-inset ring-custom-aqua placeholder:text-custom-gray focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    {t('Password')}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-custom-gray shadow-sm ring-1 ring-inset ring-custom-aqua placeholder:text-custom-gray focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <a href="#" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium leading-6">
                                    {t('Forgot')}
                                </a>
                            </div>

                            <div></div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {t('Button')}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            {t('Not-a-member')}{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                {t('Sign-up')}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}