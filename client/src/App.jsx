import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Gamelist from "./components/game-list/GameList";

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Gamelist />} />
      </Routes>
    </div>
  );
}

export default App;
