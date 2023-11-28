import {Routes, Route,Navigate } from "react-router-dom";

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import Homepage from "./pages/home page/Home";
import About from "./pages/about page/About";
import Service from "./pages/service page/services";
import Article from "./pages/article page/Article";
import Login from "./pages/login page/Login";
import Signup from "./pages/register page/Register";
import DashboardPage from "./pages/dashboard/DashboardPage";

const PrivateRoute = ({ element }) => {
    // Check if the user is authenticated (you can use your own logic here)
    const isAuthenticated = localStorage.getItem('token') !== null;
  
    return isAuthenticated ? element : <Navigate to="/Login" />;
  };

const App = () => {
    return (
        <div>
            {/* <Routes>
                <Route path="/" Component={Homepage}/>
                <Route path="/About Us" Component={About}/>
                <Route path="/Service" Component={Service}/>
                <Route path="/Article" Component={Article}/>
                <Route path="/Login" Component={Login}/>
                <Route path="/SignUp" Component={Signup}/>
                <Route path="/Dashboard" Component={DashboardPage}/>

            </Routes> */}

        <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/About" element={<PrivateRoute element={<About />} />} />
        <Route path="/Service" element={<PrivateRoute element={<Service />} />} />
        <Route path="/Article" element={<PrivateRoute element={<Article />} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
      </Routes>
        </div>
    )
}

export default App