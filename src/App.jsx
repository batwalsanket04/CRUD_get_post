import { useState } from 'react'
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import UserData from './UserData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/userdata' element={<UserData/>}/>


      </Routes>
    </Router>
      
    </>
  )
}

export default App
