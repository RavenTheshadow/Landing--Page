const Login = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 
                        rounded-md">
            <div className="border-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl rounded-md">
                <div className="mt-5">
                    <img
                        alt="Raven The Shadow"
                        src="https://avatars.githubusercontent.com/u/137809975?s=96&v=4"
                        className="mx-auto h-10 w-auto rounded-full"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 mb-10">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 custom-blue">
                                Email address:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5
             text-custom-gray shadow-sm ring-1 ring-inset ring-custom-aqua
             placeholder:text-custom-gray focus:ring-2 focus:ring-inset
             focus:ring-custom-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password:
                            </label>
                            {/*  */}
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5
             text-custom-gray shadow-sm ring-1 ring-inset ring-custom-aqua
             placeholder:text-custom-gray focus:ring-2 focus:ring-inset
             focus:ring-custom-green sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <a href="#" className=" text-indigo-600 hover:text-indigo-500 text-sm font-medium leading-6">
                                Forgot password?
                            </a>
                        </div>

                        <div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;