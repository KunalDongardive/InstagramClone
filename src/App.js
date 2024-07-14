import { Route, Routes } from "react-router-dom";
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
// import Post from "./components/post/Post";
import { UserContext } from "./components/userContext/UserContext";
import React, { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={user ? <HomePage /> : <SignUp />} />
        <Route path="/search" element={user ? <Search /> : <SignIn />} />
        <Route path="/massages" element={user ? <Massages /> : <SignIn />} />
        <Route path="/feed" element={user ? <Feed /> : <SignIn />} />
        <Route path="/reels" element={user ? <Reels /> : <SignIn />} />
        <Route
          path="/notification"
          element={user ? <Notification /> : <SignIn />}
        />
        <Route path="/create" element={user ? <Create /> : <SignIn />} />
        <Route path="/profile" element={user ? <Profile /> : <SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
