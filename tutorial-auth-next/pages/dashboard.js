import React from 'react'
import nookies from 'nookies'
import Router from 'next/router'

export async function getServerSideProps(ctx){
	const cookies = nookies.get(ctx)
	
	if(!cookies.token){
		return {
			redirect : {
				destination : '/login'
			}
		}
	}

	return {
		props : {}
	}
}


const dashboard = () => {

    function logout(){
        nookies.destroy(null, 'token')
        Router.replace('/login')
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <h3>Dashboard</h3>
            <button onClick={logout} className='bg-red-500 py-2 px-3 text-white text-md rounded-lg'>Logout</button>
        </div>
    )
}

export default dashboard
