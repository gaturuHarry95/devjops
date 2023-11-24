import React from 'react'


const JobList = ({record}) => {
  return (
    <div className='container'>
    <div className='data'style={{background:'#FFFFFF', marginTop:"10px"}}>
     
      <p><span>{record.postedAt}</span> . <span>{record.contract}</span></p>
      <h2>{record.position}</h2>
      <p>{record.company}</p>
      <p>{record.location}</p>
    </div>
    </div>
  )
}

export default JobList
