import React, { useEffect, useRef } from 'react'
import Logos from '../../../assets/images/img-3.jpeg'
import './Logo.scss'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {

  const solidLogoRef = useRef();
  useEffect(()=>{
    gsap.registerPlugin(DrawSVGPlugin)

 
    gsap.fromTo(
      solidLogoRef.current,{
        opacity:0,
      },{
        opacity:1,
        delay:4,
        duration:2,
      }
    )
  },[])
  return (
    <div className='logo-container'>

      <img ref={solidLogoRef} className='solid-logo' src={Logos} alt="fahad" />
      
   
    </div>
    
  )
}

export default Logo
