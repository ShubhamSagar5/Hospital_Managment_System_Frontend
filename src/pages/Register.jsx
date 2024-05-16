import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  
  const {isAuthenticated,setIsAuthenticated} = useContext(Context)
  
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [aadharNumber,setaadharNumber] = useState("")
  const [dob,setDob] = useState("")
  const [gender,setGender] = useState("")
  const [password,setPassword] = useState("")



  const navigate = useNavigate() 

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/register/patient",{
        firstName,lastName,email,phone,aadharNumber,dob,gender,password,role:"Patient"
      },
      {withCredentials:true,headers:{"Content-Type":"application/json"}})
      toast.success(response.data.message)
      setIsAuthenticated(true)
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  if(isAuthenticated){
    return navigate("/")
  }

  return (
    <div className='container form-component register-form'>
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim dicta impedit eum sunt culpa.</p>
        <form onSubmit={handleRegister}>
          <div>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value) } placeholder='First Name' />
          <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name'/>
          </div>
          <div>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
          <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' />
        
          </div>
          <div>
          <input type="number" value={aadharNumber} onChange={(e)=>setaadharNumber(e.target.value)} placeholder='AadharCard Number' />
          <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} placeholder='Date Of Birth' />
         
          </div>
          <div>    
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />

         
          </div>
          <div style={{gap:"10px" ,justifyContent:"flex-end",flexDirection:"row"}}>
        <p style={{marginBottom:0}}>Already Registered ? </p>
        <Link to={"/login"} style={{textDecoration:"none",alignItems:"center"}}>Login Now</Link>
    </div>
    
 <div style={{justifyContent:"center", alignItems:"center"}}>
            <button type='submit'>Register</button>
        </div>
       
        </form>
    </div>
  )
}

export default Register