import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Test Component</h2>
      <button onClick={() => navigate('/chats')}>Navigate to Chats</button>
    </div>
  )
}

export default TestComponent