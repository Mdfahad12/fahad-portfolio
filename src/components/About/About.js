import { faCss3, faGitAlt, faJsSquare, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from "../animatedletters/AnimatedLetter"
import './About.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
            <div className='container1 About-page'>
                <div className='text-zone'>
                    <h1><AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} /></h1>

                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that i am a fresher and student , a sports fanatic, and tech-obsessed!!!
                    </p>
                </div>
                <div className='stage-cube-content'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />

                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color="#28A4D9" />

                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />

                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />

                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4" />

                        </div>
                    </div>

                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About
