import Link from "next/link"
import { useState } from "react"

export default function Register(){

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [progress, setProgress] = useState(false)
   const [success, setSuccess] = useState(false)

   async function doRegister(e){
      e.preventDefault()
      setProgress(true)
      const body = {username, email, password}
      
      const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/local/register`,{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
      })
      const res = await req.json()

      if(res.jwt){
        setProgress(false)
        setSuccess(true)
        e.target.reset()
      }

      }

   return(
     <div>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
     <title>Register</title>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
      {success && (
        <div className="bg-green-400 text-white mb-5 py-2 px-3 rounded-md shadow-md text-center">
          Your account has been registered
        </div>
      )}
     <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
      Join us Now!
     </div>
     <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
      Enter your credentials to get access account
     </div>
     <div className="mt-10">
     {progress && (<div className="absolute inset-0 z-10 bg-white/50" />)}
      <form onSubmit={doRegister} className="relative">
        <div className="flex flex-col mb-5">
         <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">Username:</label>
         <div className="relative">
           <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <i className="fas fa-user text-blue-500" />
           </div>
           <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your username"  />
         </div>
        </div>
        <div className="flex flex-col mb-5">
         <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
         <div className="relative">
           <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <i className="fas fa-at text-blue-500" />
           </div>
           <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="
           text-sm
           placeholder-gray-500
           pl-10
           pr-4
           rounded-2xl
           border border-gray-400
           w-full
           py-2
           focus:outline-none focus:border-blue-400
         " placeholder="Enter your email" />
         </div>
        </div>
        <div className="flex flex-col mb-6">
         <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
         <div className="relative">
           <div className="
           inline-flex
           items-center
           justify-center
           absolute
           left-0
           top-0
           h-full
           w-10
           text-gray-400
         ">
            <span>
              <i className="fas fa-lock text-blue-500" />
            </span>
           </div>
           <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="
           text-sm
           placeholder-gray-500
           pl-10
           pr-4
           rounded-2xl
           border border-gray-400
           w-full
           py-2
           focus:outline-none focus:border-blue-400
         " placeholder="Enter your password" />
         </div>
        </div>
        <div className="flex w-full">
         <button disabled={progress} type="submit" className="
         flex
         mt-2
         items-center
         justify-center
         focus:outline-none
         text-white text-sm
         sm:text-base
         bg-blue-500
         hover:bg-blue-600
         rounded-2xl
         py-2
         w-full
         transition
         duration-150
         ease-in
        ">
           <span className="mr-2 uppercase">Sign Up</span>
           <span>
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           </span>
         </button>
        </div>
      </form>
      
     </div>
   </div>
   <div className="flex justify-center items-center mt-6">
     <a className="
     inline-flex
     items-center
     text-gray-700
     font-medium
     text-xs text-center
   ">
      <span className="ml-2">You have an account?
      </span></a>
      <Link href='/login'>
      <a className="text-xs ml-2 text-blue-500 font-semibold">Login here</a>
      </Link>
   </div>
  </div>
</div>
   )
}