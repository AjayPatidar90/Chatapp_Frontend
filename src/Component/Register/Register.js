import React, { useState } from 'react'
import axios from 'axios';


function Register() {
  
   const [user,setUser] = useState({
    FullName:"",
    Number:"",
    email:"",
    Password:""

   })
    

   const Register  = () => {
        console.log(user)
        axios.post("http://localhost:3001/addData",{
            FullName:user.FullName,
            Number:user.Number,
            email:user.email,
            Password:user.Password

        }).then((res)=>{
            console.log("register successful")
            alert("added succesful")
        }).catch((err)=>{
            console.log(err,"something is missing")
        })
            
    }
    
     
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900" style={{height:"700px"}}>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Register to Chatapp    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register to your account
              </h1>
              
                   <div>
                      <label for="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your FullName</label>
                      <input type="text" name="FullName"  value={user.FullName} id="FullName" onChange={(e)=>setUser({...user,FullName:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FullName" required=""/>
                      
                   </div>
                   <div>
                   <label for="Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobil Number</label>
                      <input type="" name="Number"  value={user.Number}  id="Number"  onChange={(e)=>setUser({...user,Number:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9098922145" required=""/>
                   </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email"  value={user.email}  id="email" onChange={(e)=>setUser({...user,email:e.target.value})}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="Password" name="Password"   value={user.Password} id="Password" onChange={(e)=>setUser({...user,Password:e.target.value})} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={Register}>Register</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      already register <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">login</a>
                  </p>
              
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register
