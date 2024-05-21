import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
import { Context } from '../main'


const Home = () => {
  
  const {isAuthenticated,user} = useContext(Context)
  console.log(user?.firstName)
  return (
    <div>
      <Hero title={isAuthenticated ? `Welcome ${user?.firstName},ZeeCare Medical Institute | Your Trusted Healthcare Provider` : "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"} imageUrl={"/hero.png"}/>
      <Biography imageUrl={'/about.png'} />
      <Departments/>
      <MessageForm/>
    </div>
  )
}

export default Home