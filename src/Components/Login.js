import React from "react";
import styled from "styled-components";
import { auth, Provider } from "../firebase";

function Login(props) {
    console.log(props)
  const signin = () => {
    auth
      .signInWithPopup(Provider)
      .then((result) => {
          const newUser = {
              name: result.user.displayName,
              photo: result.user.photoURL,
              email: result.user.email,
          }
         props.Setuser(newUser)
         localStorage.setItem('user',JSON.stringify(newUser));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <SlackImage
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="Slack-image"
        />
        <h1>Sign In Slack</h1>
        <SignButton onClick={()=> signin()}>Sign In With Google</SignButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%), 0 1px 2px rgb(0 0 0 / 38%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SlackImage = styled.img`
  height: 100px;
`;

const SignButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  padding: 10px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
