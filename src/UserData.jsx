import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const UserData = () => {
    const [data,setData]=useState([])

    const fetchdata=async()=>
    {
      
        const result=await axios.get(`http://localhost:3000/User`)
        console.log(result.data)
        setData(result.data);

    }

    const handleDelete=async(id)=>{
 
    try {
      const result= await axios.delete(`http://localhost:3000/User/${id}`)
      console.log(result.data)
      setData(prevdata=>prevdata.filter(val=>val.id!==id))
    } catch (error) {
    console.log(" Delete Error",error)
      
    }
      }

    useEffect(()=>
    {
      fetchdata();

    },[])

  return (
    <div>
        <table className='table table-striped table-bordered table-hover shadow-sm mt-5'>
        <thead className='table-primary text-center'>
            <tr>
                 <th>Id</th>
                <th>userEmail</th>
                <th>userPassword</th>  
                <th>action</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            {data.map((val,index)=>{
               return(
                <tr key={val.id || index }>
                    <td>{val.id}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                   
                    <td>
                    
              <NavLink to={`/edituser/${val.id}`}
                className="btn btn-warning btn-sm me-2"
               
              >
                Edit
              </NavLink>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(val.id)}
              >
                Delete
              </button>
                    </td>
                    
                </tr>
             

               )
            })

            }
            
        </tbody>
      </table>
      
    </div>
  )
}

export default UserData
