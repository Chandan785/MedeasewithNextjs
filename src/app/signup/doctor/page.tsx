import React from 'react'
import SignupFormDemo from "@/components/doctorsignupform" 
function page() {
  return (
    
   <div className="flex flex-col items-center justify-center min-h-screen  ">
    <div>
      <h1 className="text-4xl font-bold mb-4"> </h1>
    
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Form</h2>
        </div>
        <SignupFormDemo />
    </div>
       
    </div>
  )
}

export default page
