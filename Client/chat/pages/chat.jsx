import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/chat');
      console.log(response.data);
      setChats(response.data); // Assuming your chat data is in response.data
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}> {chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;
