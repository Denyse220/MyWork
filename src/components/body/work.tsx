//import React, { useState } from 'react'
export default function Register(){
    // const[firstName, setFirstName]=useState('')
    // setTimeout(()=>{
    //     setFirstName('Denyse')
    // }, 2000)
    //const editName=(value:any)=>

    return(
        <>
        <p>Welcome to our registration form</p>
        <form>
            <input type="text" placeholder="enter name" className="px-2 w-60 py-4 border focus:outline," />
        
            <button className="mt-3 px-2 rounded w-30 text-center bg-red-300">
                       Register
            </button>
        </form>
        </>
    )
}