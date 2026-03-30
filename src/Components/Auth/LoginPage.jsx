import React, { useEffect, useState } from 'react'

const LoginPage = ({handleLogin}) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handlecredentialLogin=(response)=>{
        console.log("response-Token", response)

    }
    useEffect(()=>{
        const renderGoogleButton = () => {
            if (!window.google) return

            window.google.accounts.id.initialize({
                client_id:"596647480379-086436k3p4sfsb94ag5aklqp4afrn9sm.apps.googleusercontent.com",
                callback:handlecredentialLogin
            })

            window.google.accounts.id.renderButton(
                document.getElementById("googleSignIndiv"),
                { theme: "outline", size: "large", width: "320" }
            )
        }

        if (window.google) {
            renderGoogleButton()
        } else {
            window.addEventListener("load", renderGoogleButton)
        }

        return () => window.removeEventListener("load", renderGoogleButton)
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted")
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 to-blue-700 px-4">
            <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>

            <div className="relative flex w-full max-w-4xl flex-col items-center justify-between gap-8 rounded-2xl bg-blue-900/60 p-8 shadow-2xl backdrop-blur-lg md:flex-row md:p-10">
                <div className="hidden w-1/2 flex-col gap-6 text-white md:flex">
                    <h1 className="text-4xl font-bold">Welcome Back</h1>
                    <p className="text-blue-200">
                        Manage your account and access everything in one place.
                    </p>


                </div>

                <div className="w-full rounded-xl bg-white/10 p-8 text-white backdrop-blur-md md:w-1/2">
                    <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>

                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-lg bg-white/20 px-4 py-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}

                                
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full rounded-lg bg-white/20 px-4 py-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                       

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-500 py-2 font-semibold transition hover:bg-blue-600 disabled:bg-blue-400"
                        >
                            Sign In
                        </button>
                        <div
                            id="googleSignIndiv"
                            className='mt-3 flex justify-center'
                        ></div>
                        
                    </form>




                </div>
            </div>
        </div>
    )
}

export default LoginPage
