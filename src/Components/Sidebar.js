import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { SidebarItem } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar({ room }) {
  const history = useHistory();

  const Sidebarhandle_click = () => {
    const prompName = prompt("Enter Channel Name!");
    if (prompName) {
      db.collection("channel").add({
        name: prompName,
      });
    } else {
      alert("Please Provide Channel-Name!!");
    }
  };

  const gotoChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
      console.log(id);
    }
  };
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>It's Muhemin</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {SidebarItem.map((item, id) => (
          <MainChannelItems key={id}>
            {item.icon}
            {item.text}
          </MainChannelItems>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon
            style={{ cursor: "pointer" }}
            onClick={Sidebarhandle_click}
          />
        </NewChannelContainer>
        <ChannelList>
          {room.map((data) => (
            <Channel onClick={()=> gotoChannel(data.id)} key={data.id}>{data.name}</Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #350d36;
`;

const WorkSpaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: #fff;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItems = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  align-items: center;
  height: 20px;
  padding-left: 19px;
  cursor: pointer;
  margin-top: 5px;
  :hover {
    background: #370d32;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
  display: flex;
`;

const ChannelList = styled.div``;

const Channel = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
  margin-left: 19px;
  cursor: pointer;
  :hover {
    background: #370d32;
  }
`;
