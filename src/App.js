import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import UserDashBoard from './Components/UserDashBoard/UserDashBoard';
import ForRent from './Components/ForRent/ForRent';
import EditProfile from './Components/EditProfile/EditProfile';
import Settings from './Components/Settings/Settings';
import SellingDetails from './Components/SellingDetails/SellingDetails';
import Privacy from './Components/Privacy/Privacy';
import MyRequest from './Components/MyRequest/MyRequest';
import ListingPage from './Components/ListingPage/ListingPage';
import FlatDetails from './Components/FlatDetails/FlatDetails';
import PostContainer from './Components/PostContainer/PostContainer';
import Flat from './Components/Flat/Flat';
import Roommates from './Components/Roommates/Roommates';
import RoomMateDetails from './Components/RoomMateDetails/RoomMateDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PostContainer />}></Route>
          <Route path='/flat' element={<Flat />}></Route>
          <Route path='/roommates' element={<Roommates />}></Route>
        </Route>
        <Route path="/room-details/:postId" element={<SellingDetails />} />
        <Route path="/flat-details/:postId" element={<FlatDetails />} />
        <Route path="/roomates-details/:postId" element={<RoomMateDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs-page" element={<BlogsPage />} />
        <Route path="/blogs-details" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userDashBoard" element={<UserDashBoard />} />
        <Route path="/for-rent" element={<ForRent />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/myrequest" element={<MyRequest />} />
        <Route path="/listing" element={<ListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
