import React from 'react'
import JobList from './JobList'
import records from '../data/data.json'


const Job = () => {
  const gridStyle= {
    display:'grid',
    gridTemplateColumns:'33.3% 33.3% 33.3%',
    gap:'1rem',
    justifyContent:'center',
    alignItems:'center'
    

  }
  
  return (
    <div style={gridStyle}>
      {
      records.map((record)=>(<JobList key={record.id} record={record}/>))  
      }
    </div>
  )
}

export default Job
