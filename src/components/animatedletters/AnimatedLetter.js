import React from 'react'
import './AnimatedLetter.scss'

const AnimatedLetter = ({letterClass,strArray,idx}) => {
    console.log(strArray)
  return (
    <span>
      {
        strArray.map((char,i)=>{
            return(
            <span key={char+i} className={`${letterClass} _${i+idx}`}>
               {char}
                
                </span>)
        })
      }
    </span>
  )
}

export default AnimatedLetter
