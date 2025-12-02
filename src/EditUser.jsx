import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [data,setdata]=useState({email:"",password:""});

    const data1=useParams();
    const nav=useNavigate();
    console.log(data1)
    const id=data1.id;


    const fetchData=async()=>{
     try {
        const result=await axios.get(`http://localhost:3000/User/${id}`)
        console.log(result);
        console.log(result.data)
        setdata(result.data)
     } catch (error) {
        console.log("Error:",error)
     }
    }


    const handleChnage=(e)=>{
     const {name,value}=e.target;
     setdata({...data,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        alert("user updated successfully")
try {
    await axios.put(`http://localhost:3000/User/${id}`,data)
    nav("/userdata")
    
} catch (error) {
    console.log("update Error:",error)
}
    }

    useEffect(()=>{
    fetchData();
    },[])
    

  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="card-title text-center mb-4">Update User</h3>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
               value={data.email}
                onChange={(e)=>handleChnage(e)}

              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
               onChange={(e)=>handleChnage(e)}
              
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              name="remember"
              checked={data.remember}
           
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            save changes
          </button>

          <div className="mt-3 text-center">
            <NavLink to="#">Forgot Password?</NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default EditUser
