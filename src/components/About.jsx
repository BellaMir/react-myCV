import React from 'react'
import "./About.css"

export default function About({hero}) {
  return (
    <div className='about'>
    <h2>About Me</h2>
    <div className="card-about">
       {hero.aboutMe.map((item) => {
         return (
           <div key={JSON.stringify(item)}>
             <p className="name">{item.info}</p>
             
           </div>
         );
       })}
     </div>
   </div>
  )
}

