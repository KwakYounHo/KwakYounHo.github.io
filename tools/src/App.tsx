import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./screens/Main/Main";
import Home from "./screens/Home/Home";
import PostBoard from "./screens/Post/PostBoard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/board" element={<PostBoard />} />
      </Routes>
    </>
  );
}

export default App;
