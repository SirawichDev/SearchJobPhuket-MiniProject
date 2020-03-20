import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default () => {
    const [position, setPosition] = useState('')
    const [respon, setRespon] = useState('')
    const [jobs, setJobs] = useState({})
    const [sess,setSess] = useState(0)

  const getJobs = async () => {
      const result = await axios.get(`http://localhost/api/jobs`)
      setJobs(result.data)
  }



  const printJobs = () => {
      console.log('Jobs:', jobs)
      if (jobs && jobs.length)
          return (jobs.map((job, index) =>
              (<li key={index}>
                  Position: {(job)?job.position:'-'}, Responsability : {(job)?job.respon:'-'}, Quantity : {(job)?job.quantity:0}, Salary : {(job)? job.salary:0}
                  if(sess){
                      <p>Hello World</p>
                    /* <button onClick={() => deleteBear(job.id)}> Delete </button>
                  <button onClick={() => getBear(job.id)}>Get</button>
                  <button onClick={() => updateBear(job.id)}>Update</button> */
                  }
                  
              </li>)
          ))
      else {
          return (<h2>No Jobs</h2>)
      }
  }

  useEffect(() => {
      getJobs()
  },[])

  return (
      <div>
          <h2>Jobs</h2>
          <ul>{printJobs()}</ul>
      </div>
  )
}
