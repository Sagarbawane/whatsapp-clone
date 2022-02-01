import styled from "styled-components";

import React from "react";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Conatiner>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95154.png" />
        <Button onClick={signIn} varient="outlined">
          Sign In With Google
        </Button>
      </LoginContainer>
    </Conatiner>
  );
}

export default Login;

const Conatiner = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
