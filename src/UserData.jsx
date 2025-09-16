import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [data,setData]=useState([])

    const fetchdata=async()=>
    {
      
        const result=await axios.get('http://localhost:3000/User')
        console.log(result.data)
        setData(result.data);

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
                


            </tr>
        </thead>
        <tbody className='text-center'>
            {data.map((val,index)=>{
               return(
                <tr key={val.id || index }>
                    <td>{val.id}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>{val.remember}</td>
                    
                
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
