import React from 'react';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';



function ChatMessages({text,name,userImage,timestamp}) {
    return (
        <Container>
      <UserAvator>
        <Avatar alt="avator-logo" src={userImage}/>
      </UserAvator> 
      <MessageContent>
          <Name>
        {name}
        <span>
         {new Date(timestamp.toDate()).toUTCString()}
        </span>
          </Name>
          <Text>
         {text}
          </Text>
      </MessageContent>        
        </Container>
    )
}

export default ChatMessages


const Container = styled.div`
padding: 8px 20px;
display: flex;
align-items: center;
`

const UserAvator = styled.div`
margin-right: 10px;
`

const MessageContent = styled.div`
display: flex;
flex-direction: column;
`

const Name = styled.span`
font-weight: 900;
font-size: 15px;
line-height:1.4;

span{
    font-weight: 400;
    color: rgba(97,96,97);
    margin-left: 8px;
    font-size: 13px;
}
`

const Text = styled.span``