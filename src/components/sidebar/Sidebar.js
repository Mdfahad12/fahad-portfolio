import React, { useState } from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/img-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser,faBars,faClose, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
        <Link to="/" className="logo"  onClick={() => setShowNav(false)} >
            <img src={LogoS} alt="logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/"  onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"  onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='skill-link' to="/skill"  onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
           </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact"  onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/md-fahad-a4ab09236/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Mdfahad12">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    
    </div>
  )
}

export default Sidebar
