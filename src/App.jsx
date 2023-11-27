import {Routes, Route} from "react-router-dom";

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import Homepage from "./pages/home page/Home";
import About from "./pages/about page/About";
import Service from "./pages/service page/services";
import Article from "./pages/article page/Article";
import Login from "./pages/login page/Login";
import Signup from "./pages/register page/Register";
import DashboardPage from "./pages/dashboard/DashboardPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Homepage}/>
                <Route path="/About Us" Component={About}/>
                <Route path="/Service" Component={Service}/>
                <Route path="/Article" Component={Article}/>
                <Route path="/Login" Component={Login}/>
                <Route path="/SignUp" Component={Signup}/>
                <Route path="/Dashboard" Component={DashboardPage}/>

            </Routes>
        </div>
    )
}

export default App