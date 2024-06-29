import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] =useAuth()
  return (
    <div>
        <button className="btn btn-active btn-secondary"
        onClick={() => {
            localStorage.removeItem("user")
            setAuthUser(null)
            toast.success("Logged out successfully")
            
        }}
        >Logout</button>
    </div>
  )
}

export default Logout