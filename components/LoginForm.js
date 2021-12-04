import React from "react";
import { useAuth } from '../contexts/auth'
import Footer from "./Footer";
// import Header from "./Header";

export default function LoginForm() {
    const { login } = useAuth();

    let handlesubmit = (e) => {
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;
        login(username, password)
    }
    return (
    
        <>
        {/* <Header
        
        
        /> */}

            <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg ">
                <form
                    onSubmit={handlesubmit}

                >
                    <div className="flex flex-col items-center justify-center">
                        <label for="username" >User name</label>
                        <input type="text" name="username" id="username" className="flex-grow w-10/12 bg-gray-200 rounded-sm" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <label for="password" >Password</label>
                        <input type="password" name="password" id="password" className="flex-grow w-10/12 mt-2 bg-gray-200 rounded-sm" />
                    </div>
                    <br />
                    <div className="flex-grow w-10/12 mx-auto my-1 font-semibold bg-green-500 rounded ">
                        <button className="h-12 text-xl" type="submit">SIGN IN </button>
                    </div>



                </form>


            </div>

            {/* <Footer /> */}
        </>



    )
}