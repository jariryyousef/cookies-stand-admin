import { useAuth } from '../contexts/auth'


export default function Header() {
    const { user, logout } = useAuth();

    return (


        <nav className="flex flex-wrap items-center justify-between p-6 py-5 text-3xl bg-green-400 bg-teal-500">
            <div className="flex items-center flex-shrink-0 mr-6">

                <span className="text-xl font-semibold tracking-tight">Cookies Stand Admin</span>
            </div>

            <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">

                </div>
                <div>
                    <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0" onClick={logout}>SIGN OUT</button>
                    
                    <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
                        {user.username}
                    </button>

                </div>
            </div>
        </nav>


    )

}