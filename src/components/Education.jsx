import React from 'react'
import "./Education.css"

export default function Education({education}) {
  return (
    <div className='education'>
     <div className="education-card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

