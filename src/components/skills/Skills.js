import React, { useState, useEffect } from 'react'
import './Skill.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../animatedletters/AnimatedLetter';
import { Link } from 'react-router-dom';
import fahad from '../../assets/fahad-resume.pdf'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    console.log(letterClass)
    
    return (
        <>
            <div className='container2 skill-page'>
                <div className='text-zone'>
                    <h1><AnimatedLetters
                        letterclassName={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        idx={45} /></h1>

                    <p>Experience in front-end development including technologies like <span>HTML5</span>,<span>CSS3</span>,<span>JAVASCRIPT</span>,<span>REACT</span>,<span>SAAS</span>,<span>GIT</span>,etc.
                    </p>
                    <p>
                        I'm not a designer but i have a good sense in making responsive,mobile-first web design.
                        i put special effort into optimizing my code and providing the best user experience.I would love to give you any kind of support also after the project's completion.
                        I guarantee a commitment during work on your project.
                    </p>
                    <p>
                        Visit my  <a href="https://www.linkedin.com/in/md-fahad-a4ab09236/">Link</a> profile for more details. Also you can checkout my cv.
                    </p>
                    <Link to={fahad} target="_blank" download className="flat-button">Download CV</Link>
                </div>
                <div className="scene">
                    <div className="sphere">
                        <div className="hemisphere">
                            <div className="face">Html</div>
                            <div className="face">CSS</div>
                            <div className="face">Javascript</div>
                            <div className="face">React</div>
                            <div className="face">Git</div>
                            <div className="face">Bootstrap</div>
                            <div className="face">Html</div>
                            <div className="face">CSS</div>
                            <div className="face">Javascript</div>
                            <div className="face">React</div>

                        </div>
                        <div className="hemisphere">
                            <div className="face">Html</div>
                            <div className="face">CSS</div>
                            <div className="face">Javascript</div>
                            <div className="face">React</div>
                            <div className="face">Git</div>
                            <div className="face">Bootstrap</div>
                            <div className="face">Html</div>
                            <div className="face">CSS</div>
                            <div className="face">Javascript</div>
                            <div className="face">React</div>
                        </div>
                    </div>
                </div>

            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills
