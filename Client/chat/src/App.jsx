import Home from '../pages/home';
import { Route, Routes } from 'react-router-dom';
import Chat from '../pages/chat';
import Login from '../components/authentication/login'
import TestComponent from '../components/TestComponent';


function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/test" element={<TestComponent />}></Route> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
