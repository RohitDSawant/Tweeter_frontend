import axios from "axios"

const Signup = (data)=>(dispatch)=>{

    dispatch({type:"SIGNUP_REQUEST"})
   return axios.post("https://tweeter-backend.onrender.com/user", data)
    .then((res)=>{
        return dispatch({type:"SIGNUP_SUCCESS"})
    })
    .catch((err)=>{
       return dispatch({type:"SIGNUP_FAILURE"})
    })
}



const Login = (data)=>(dispatch)=>{

    dispatch({type:"LOGIN_REQUEST"})
    return axios.get(`https://tweeter-backend.onrender.com/user?username=${data}`)
    .then((res)=>{
        dispatch({type:"LOGIN_SUCCESS"})
        return (res.data)

        
    })
    .catch((err)=>{
        return dispatch({type:"LOGIN_FAILURE"})
    })


}






export  {Signup, Login}