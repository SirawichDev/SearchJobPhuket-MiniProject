import React, { useState } from 'react'
import Showjobs from './Showjobs'

const Managejob = props => {
    const [position, setPosition] = useState('')
    const [respon, setRespon] = useState('')
    const [job, setJob] = useState('')
     const [quantity, setQuantity] = useState(0)
       // const getBear = async (id) => {
  //     const result = await axios.get(`http://localhost/api/bears/${id}`)
  //     console.log('bear id: ', result.data)
  //     setBear(result.data)
  // }

  // const addBear = async (name, weight) => {
  //     const result = await axios.post(`http://localhost/api/bears/`,{
  //         name,
  //         weight
  //     })
  //     console.log(result.data)
  //     getBears()
  // }

  // const deleteBear = async (id) => {
  //     const result = await axios.delete(`http://localhost/api/bears/${id}`)
  //     console.log(result.data)
  //     getBears()
  // }

  // const updateBear = async (id) => {
  //     const result = await axios.put(`http://localhost/api/bears/${id}`,{
  //         name,
  //         weight
  //     })
  //     console.log('bear id update: ', result.data)
  //     getBears()
  // }
    return (
        <div>
        selected job: {job.position} {job.responsability}
        <h2>Add job</h2>
        Position:<input type="text" onChange={(e)=>setPosition(e.target.value)} /> <br/>
        Responsability:<input type="number" onChange={(e)=>setRespon(e.target.value)} /> <br/>
        Quantity<input type="number" onChange={(e) => setQuantity(e.target.value)} /> 
         {/* <button onClick={ () => addJob(name, weight)}>Add new job</button>  */}
        </div>
    )
}
export default Managejob
