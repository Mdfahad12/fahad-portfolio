import React, { useEffect, useState } from "react";
import './Home.scss'
import { Link } from "react-router-dom";
import Logo from './Logo/Logo'
import LogoTitle from '../../assets/images/img-4.png'
import AnimatedLetter from "../animatedletters/AnimatedLetter";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'h', 'a', 'd'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])
    return (
        <>
            <div className="conatiner home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15} />

                        <br />
                        <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Frontend Developer/javascript</h2>
                    <Link to="/contact" className="flat-button">Contact Me</Link>
            
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Home;