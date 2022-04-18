import React from 'react'
import "./Expecience.css"

export default function Experience({experience}) {
  return (
    <div className='experience'>
     <div className="experience-card">
       {experience.map((item) => {
         return (
           <div key={JSON.stringify(item)}>
             <p className="name">📕 {item.name}</p>
             <p className="name"> {item.date}</p>
             <p className="name"> {item.where}</p>
             <p className="name"> {item.description}</p>
           </div>
         );
       })}
     </div>
   </div>
  )
}

