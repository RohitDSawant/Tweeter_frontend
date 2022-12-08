import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const ProtectedRoute = ({children}) => {

    const {isAuth} = useContext(AuthContext)
    const nav= useNavigate()
    if(!isAuth){
        nav("/signin")
    }
    else{
        return children
    }
   
 
}

export default ProtectedRoute