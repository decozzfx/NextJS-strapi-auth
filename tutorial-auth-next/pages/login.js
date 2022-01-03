import Link from 'next/link'
import React, { useState } from 'react'

export default function login(){
	const [field, setField] = useState({})
	const [progress, setProgress] = useState(false)
	const [success, setSuccess] = useState(false)

	function setValue(e){
		const target = e.target
		const name = target.name		
		const value = target.value

		setField({
			...field,
			[name] : value
		})
	}

	async function doLogin(e){
		e.preventDefault()
		setProgress(true)

		const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/local`,{
			method : "POST",
			headers: {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(field)
		})
			const res = await req.json()
			console.info(res)

		if(res.jwt){
			console.info('ok')
			setSuccess(true)
			setProgress(false)
		}
	}

	 return (
		<div>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
		<title>Login Page</title>
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
			{success && (
			<div className='w-full mb-2 bg-green-500 text-sm text-center text-white font-semibold rounded-lg py-2 px-3'>
				Login is Success
			</div>
			)}
				<div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
					Welcome Back
				</div>
				<div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
					Enter your credentials to access your account
				</div>
			<div className="mt-10">
			{progress && (<div className='absolute inset-0 z-10 bg-white/50'/>)}			
				<form onSubmit={doLogin}>
					<div className="flex flex-col mb-5">
						<label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
							<div className="relative">
								<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
									<i className="fas fa-at text-blue-500" />
								</div>
								<input id="email" type="email" name="identifier" onChange={setValue} className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border  border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
							</div>
					</div>
					<div className="flex flex-col mb-6">
						<label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
						<div className="relative">
							<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<span>
									<i className="fas fa-lock text-blue-500" />
								</span>
							</div>
							<input id="password" type="password" name="password" onChange={setValue} className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
						</div>
					</div>
					<div className="flex w-full">
						<button type="submit" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
						<span className="mr-2 uppercase">Sign In</span>
							<span>
								<svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
									<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</span>
						</button>
					</div>
					<div className="py-1 mt-5 flex w-full text-center justify-center items-center border-2 rounded-xl shadow-md">
						<a href="" className="text-gray-600 text-sm ">Login with Github</a>
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
				<span className="ml-2">You don't have an account?
				</span></a>
				<Link href='/register'>
				<a className="text-xs ml-2 text-blue-500 font-semibold">Register now</a>
				</Link>
			</div>
		</div>
		</div>

	 )
}
