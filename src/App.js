import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Feed from "./components/feed/Feed";
import Massages from "./components/massages/Massages"; // Corrected import
import Notification from "./components/notifications/Notification";
import Search from "./components/search/Search";
import Create from "./components/create/Create";
import Reels from "./components/reels/Reels";
import Profile from "./components/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Post from "./components/post/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/massages" element={<Massages />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
