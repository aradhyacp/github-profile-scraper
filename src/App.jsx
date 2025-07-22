import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {
  const [userName,setUserName] = useState("aradhyacp")

  return (
    <div className="">
      <Header setUserName={setUserName}/>
      <HeroSection userName={userName}/>
      <Footer/>
    </div>
  )
}

export default App
