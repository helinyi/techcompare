import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail.jsx";
import Navbar from "./components/Home/Navbar/Navbar.jsx";
import Register from "./components/Home/Popup/Register.jsx";
import Login from "./components/Home/Popup/Login.jsx";

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const [loginPopup, setLoginPopup] = React.useState(false);
    const [registerPopup, setRegisterPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };
    const handleLoginPopup = () => {
        setLoginPopup(!loginPopup);
    };
    const handleRegisterPopup = () => {
        setRegisterPopup(!registerPopup);
    };

    return (
        <BrowserRouter>
            <Navbar handleOrderPopup={handleOrderPopup} handleLoginPopup={handleLoginPopup}/>
            <Register registerPopup={registerPopup} handleRegisterPopup={handleRegisterPopup}></Register>
            <Login loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} handleRegisterPopup={handleRegisterPopup}/>
            <Routes>
                <Route path="/" element={<Home orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>} />
                <Route path="/ProductsDetail" element={<ProductsDetail/>} />
                {/* 其他路由 */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
