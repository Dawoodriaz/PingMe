import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from '../Context/ChatProvider.js';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChatProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ChatProvider>
)

