import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Signup} from "../redux/action";

const signup_data = {
  avatar: "",
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [data, setData] = useState(signup_data);
  const [random_img,setRandom_Img] = useState("")

  const dispatch= useDispatch()

  const handleInput = (e) => {

    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    setRandom_Img(`https://i.pravatar.cc/${Math.floor(Math.random()*1000)}`)
    console.log(random_img)
   
    setData(data.avatar= random_img)
    console.log(data);

    dispatch(Signup(data))
    navigate("/signin")
  };    


  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Heading size={"md"}>SignUp: </Heading>
        <br />
        <label htmlFor="">
          <Input
            placeholder="Enter Username"
            onChange={handleInput}
            name={"username"}
            type="text"
          />
        </label>
        <Box display={"flex"} gap="2%">
          <label htmlFor="">
            <Input
              placeholder="First Name"
              onChange={handleInput}
              name={"first_name"}
              type="text"
            />
          </label>
          <label htmlFor="">
            <Input
              placeholder="Last Name"
              onChange={handleInput}
              name={"last_name"}
              type="text"
            />
          </label>
        </Box>
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
          <Input id="submit-btn" type="submit" value={"Signup"} />
        </label>
      </form>
    </div>
  );
};

export default SignUp;
