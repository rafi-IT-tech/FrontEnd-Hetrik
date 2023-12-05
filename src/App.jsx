import {Routes, Route,Navigate } from "react-router-dom";

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import Homepage from "./pages/home page/Home";
import About from "./pages/about page/About";
import Service from "./pages/service page/services";
import Article1 from "./pages/article page/article1";
import Article2 from "./pages/article page/article2";
import Article3 from "./pages/article page/article3";
import Article4 from "./pages/article page/article4";
import Article5 from "./pages/article page/article5";
import Article6 from "./pages/article page/article6";

import Article from "./pages/article page/Article";
import Login from "./pages/login page/Login";
import Signup from "./pages/register page/Register";
import "./App.css";
import DashboardPage from "./pages/dashboard/Dashboard";
import CalculatorPage from "./pages/service page/Calculator";
import Paymentmain from "./pages/payment/PaymentPage";

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
        <Route path="/Calculate" element={<PrivateRoute element={<CalculatorPage />} />} />
        <Route path="/Paymentmain" element={<PrivateRoute element={<Paymentmain />} />} />

        <Route path="/Service" element={<PrivateRoute element={<Service />} />} />
        {/* <Route path="/About" element={<PrivateRoute element={<About />} />} /> */}
        {/* <Route path="/About" element={<PrivateRoute element={<Article />} />} /> */}
        <Route path="/About" element={<About />} />

        <Route path="/Article1" element={<Article1 />}  />
        <Route path="/Article2" element={<Article2 />} />
        <Route path="/Article3" element={<Article3 />}  />
        <Route path="/Article4" element={<Article4 />} />
        <Route path="/Article5" element={<Article5 />}  />
        <Route path="/Article6" element={<Article6 />} />
        <Route path="/Article" element={<Article />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
      </Routes>
        </div>
    )
}

export default App
