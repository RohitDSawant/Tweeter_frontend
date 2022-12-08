import React from 'react'
import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const UserProfile = () => {

const {isAuth} = useContext(AuthContext)

const navigate = useNavigate()
if(!isAuth) navigate("/signin")


  return (
    <div>
        USER PROFILE
    </div>
  )
}

export default UserProfile