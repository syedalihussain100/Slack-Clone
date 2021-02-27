import React,{useState} from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({senMessages}) {
  const [input,setInput] = useState("");
  const Send = (e) =>{
   e.preventDefault();
    if(!input) return;
   senMessages(input)
   setInput("")
  }
  return (
    <Container>
      <InputContainer>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message here..." />
          <SendButton type="submit" onClick={Send}>
            <SendMe/>
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
  }

  input {
    flex: 1;
    border: none;
    font-size: 13px;
  }

  input:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background-color: green;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const SendMe = styled(SendIcon)`
  color: #fff;
`;
