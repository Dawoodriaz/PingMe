import Home from "../pages/home"
import { Route, Routes } from "react-router-dom"
import Chat from "../pages/chat"

function App() {
  
  return (
    <div>
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={< Chat />} />
        </Routes>
      </main>
    </div>
  )
}

export default App