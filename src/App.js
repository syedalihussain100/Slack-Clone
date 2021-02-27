import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import db from "./firebase";
import {auth,Provider} from './firebase';

function App() {
  const [room, setRoom] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const get_data = () => {
    db.collection("channel").onSnapshot((snapshot) => {
      setRoom(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };
  useEffect(() => {
    get_data();
  }, []);

  const signOut = () =>{
  auth.signOut().then(()=>{
    localStorage.removeItem('user')
   setUser(null)
  })
  }

  return (
    <div>
      <Router>
        {!user ? (
          <Login Setuser={setUser}/>
        ) : (
          <Container>
            <Header signOut={signOut} User={user}/>
            <Main>
              <Sidebar room={room} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat User={user}/>
                </Route>
                <Route path="/">
                  Select OR Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;
