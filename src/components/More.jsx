import React from 'react'
import "./More.css"

export default function More({languages, habilities}) {
  return (
    <div className='more'>
    <h2>Lenguages</h2>
    <div className="more-card">
       {languages.map((item) => {
         return (
           <div key={JSON.stringify(item)}>
             <p className="name">📕 {item.languages}</p>
             <p className="name"> {item.wrlevel}</p>
           </div>
         );
       })}
       </div>
       <h2>Habilidades</h2>
       <div className="more-card">  
       {habilities.map((item) => {
         return (
           <div key={JSON.stringify(item)}>
             <p className="name"> 🥇{item}</p>
           </div>
         );
       })}
     </div>
   </div>
  )
}

