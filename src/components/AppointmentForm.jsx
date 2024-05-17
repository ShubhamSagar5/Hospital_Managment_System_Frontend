import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AppointmentForm = () => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [aadharNumber,setaadharNumber] = useState("")
  const [dob,setDob] = useState("")
  const [gender,setGender] = useState("")
  const [appointment_date,setAppointmentDate] = useState("")
  const [doctor_firstName,setDoctorFirstName] = useState("")
  const [doctor_lastName,setDoctorLastName] = useState("")
  const [department,setDepartment] = useState("")
  const [hasVisited,setHasVistied] = useState("")
  const [address,setAddress] = useState("")


  const deapartmentsArray = [
    "Gynecologist",
    "Oncologist",
    "Endocrinologist",
    "Psychiatrists",
    "Cardiologists",
    "Pediatrician",
    "Dermatologist",
    "Neurologist",
    "Gastroenterology",
    "Nephrologist",

  ]

const [doctors,setDoctors] = useState([])

useEffect(()=>{
  const fetchDoctors = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/user/doctors",{withCredentials:true})
    setDoctors(response.data.doctors)
  }
  fetchDoctors()
},[])

const navigate = useNavigate()

const handleAppointment = async(e) => {
  e.preventDefault()
  try {
    const hasVisitedBool = Boolean(hasVisited)
    const response = await axios.post("http://localhost:4000/api/v1/appointment/send",{
    firstName,
    lastName,
    email,
    phone,
    aadharNumber,
    dob,
    gender,
    appointment_date,
    doctor_firstName,
    doctor_lastName,
    department,
    hasVisited:hasVisitedBool,
    address
    },{
      withCredentials:true,
      headers:{
        "Content-Type":"application/json"
      }
    })
    toast.success(response.data.message)
    navigate("/")
  } catch (error) {
      toast.error(error.response.data.message)
  }

}
  
  return (
    <div className='container form-component appointment-form'>
        <h2>Appointment</h2>
        
        <form onSubmit={handleAppointment}>
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
         
          <input type="date"  value={appointment_date} onChange={(e)=>setAppointmentDate(e.target.value)} placeholder='Appointment Date'/>

         
          </div>
          <div>
            <select value={department} onChange={(e)=> {

            setDepartment(e.target.value)
            setDoctorFirstName("")
            setDoctorLastName("")

            }}>
            <option value="">Select Department</option>
              {
                deapartmentsArray?.map((depart,index)=>{
                  return (
                    <option value={depart} key={index}>{depart}</option>
                  )
                })
              }             
            </select>

            <select value={`${doctor_firstName} ${doctor_lastName}`} onChange={(e)=>{
              const [ firstName,lastName] = e.target.value.split(" ")
              setDoctorFirstName(firstName)
              setDoctorLastName(lastName)
              
            }} disabled={!department}>
            <option value="">Select Doctor</option>
            {
              doctors?.filter((doc)=>doc.doctorDepartment === department).map((doctr,index)=>{
                return (
                  <option value={`${doctr.firstName} ${doctr.lastName}`} key={index}>{doctr.firstName} {doctr.lastName}</option>
                )
              })
            }



            </select>
          </div>
          <textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Address'></textarea>
          <div style={{gap:"10px" ,justifyContent:"flex-end",flexDirection:"row"}}>
        <p style={{marginBottom:0}}>Have You Visited Before? </p>
        <input type="checkbox" checked={hasVisited} onChange={(e)=>setHasVistied(e.target.checked)} style={{flex:"none", width:"25px"}} />
       
    </div>
    
 <div style={{justifyContent:"center", alignItems:"center"}}>
            <button type='submit'>Get Appointment</button>
        </div>
       
        </form>
    </div>
  )
}

export default AppointmentForm