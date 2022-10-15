import React from 'react'

export default function Form() {
  return (
   <section>
    <div className='register'>
       <div className='col-1'>
        <h2>REGISTRATION FORM</h2>
        <span>register yourself here</span>
        <form id='form' className='flex flex-col'>
           <input type="text" placeholder='Fisrt Name' /> 
           <input type="text" placeholder='Last Name' /> 
           <input type="text" placeholder='Email Address' /> 
           <input type="text" placeholder='Gender' /> 
           <input type="text" placeholder='City'/>
           <input type="text" placeholder='Country' /> 
           <button className='btn'>Sign In</button>
        </form>
       </div>
     
    </div>
   </section>
  )
}

