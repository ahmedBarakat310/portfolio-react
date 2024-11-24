import React from 'react'
import './CvHeader.css'


const CvHeader = ({iconClass,title}) => {
  return (
    <div className="cv-header ">
        <div className='cv-parts'>
            <span className={`${iconClass} icon`}></span>
            <span className='title'>{title}</span>
        </div>
        <div className='black-border'/>
    </div>
  )
}

export default CvHeader