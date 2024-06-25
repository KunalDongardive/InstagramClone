import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
// import Post from "./components/post/Post";
// import Feed from "./components/feed/Feed";
// import Massages from "./components/massages/Massages";
// import Notification from "./components/notifications/Notification";
// import Search from "./components/search/Search";
// import Create from "./components/create/Create";
// import Reels from "./components/reels/Reels";
// import Profile from "./components/profile/Profile";
// import SignIn from "./pages/signIn/SignIn";
// import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        {/* <Route path="/post" Component={Post} />
        <Route path="/feed" Component={Feed} />
        <Route path="/create" Component={Create} />
        <Route path="/massages" Component={Massages} />
        <Route path="/notification" Component={Notification} />
        <Route path="/reels" Component={Reels} />
        <Route path="/search" Component={Search} />
        <Route path="/profile" Component={Profile} /> */}
      </Routes>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
