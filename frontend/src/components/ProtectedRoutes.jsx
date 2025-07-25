import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoutes = ({children}) => {
    const user = useSelector((state)=>state.user);
    if (!user) {
      return <Navigate to="/login" />;
    }
  return children
}

export default ProtectedRoutes