import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box className="navbar">
        <Box width={"20%"}>
          <Link to={"/"}>
            <Img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f426.svg" />
          </Link>
        </Box>
        <Box>
          <Link to={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
          <Link to={"/signin"}>
            <Button>Sign In</Button>
          </Link>
          <Link to={"/profile"}>
            <Button>User Profile</Button>
          </Link>
          <Link to={"/timeline"}>
            <Button>User Timeline</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
