import React from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeMessage>{message.message}</TypeMessage>
      <Timestamp>
        {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
      </Timestamp>
    </Container>
  );
}

export default Message;
const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.span`
  colr: gray;
  padding: 10px;
  font-size: 9px;
  postition: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
