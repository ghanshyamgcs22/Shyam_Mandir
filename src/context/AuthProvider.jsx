import React, { createContext, useContext } from 'react'

export const AuthContext=createContext()

export default function AuthProvider({children})
{
  const initialAuthUser=localStorage.getItem("user")
  const [authUser, setAuthUser]=React.useState(
    initialAuthUser?JSON.parse(initialAuthUser):null
  )

  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext) //khud ka hook