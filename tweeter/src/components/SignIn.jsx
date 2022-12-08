import { Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../redux/action";

const signin_data = {
    username:"",
  email: "",
  password: "",
};

const SignIn = () => {
  const [data, setData] = useState(signin_data);
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=> state.auth_reducer.isAuth)
  console.log(isAuth)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


//   const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let x= dispatch(Login(data.username))
    console.log(x)
    
    // if(isAuth){
    //     navigate("/profile")
    // }

  };

 

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Heading size={"md"}>SignIn: </Heading>
        <br />
        <label htmlFor="">
          <Input
            placeholder="Enter Username "
            onChange={handleInput}
            name={"username"}
            type="text"
          />
        </label>
        <label htmlFor="">
          <Input
            placeholder="Enter Email"
            onChange={handleInput}
            name={"email"}
            type="email"
          />
        </label>
        <label htmlFor="">
          <Input
            placeholder="Enter Password"
            onChange={handleInput}
            name={"password"}
            type="password"
          />
        </label>
        <label htmlFor="">
          <Input id="submit-btn" type="submit" value={"Sign In"} />
        </label>
      </form>
    </div>
  );
};

export default SignIn;
