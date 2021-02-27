import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from 'firebase';

function Chat({User}) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [message,setMessage] = useState([]);
  const getChannel = () => {
    db.collection("channel")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };
  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  // get Messages in firebase

  const getMessages = () => {
    db.collection("channel")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc)=> doc.data());
      setMessage(messages); 
      });
  };

  const senMessage = (text) =>{
if(channelId){
  let payload = {
    text: text,
    User: User.name,
    timestamp: firebase.firestore.Timestamp.now(),
    photo: User.photo,
  }
  console.log(payload);
  db.collection("channel").doc(channelId).collection("messages").add(payload)
}
  }


  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>#{ channel && channel.name}</ChannelName>
          <ChannelInfo>
            Company-Wide Announcements and Work Based Matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
      {
        message.length > 0 && message.map((data,index)=>(
          <ChatMessages 
          key={index}
          text={data.text}
          name={data.User}
          userImage={data.photo}
          timestamp={data.timestamp}
          />
        ))
      }
      </MessageContainer>
      <ChatInput senMessages={senMessage}/>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto 60px;
  min-height: 0;
`;
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;
const MessageContainer = styled.div`
display: flex;
flex-direction: column;
overflow: scroll;
`;
const Channel = styled.div``;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  color: #606060;
`;
const ChannelName = styled.div`
  font-weight: 700;
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Info = styled(InfoIcon)`
  margin-left: 10px;
`;
