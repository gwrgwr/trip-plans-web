import React from "react";
import AuthPage from "./pages/AuthPage.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ServicesPage} from "./pages/ServicesPage.tsx";
import {UserPage} from "./pages/UserPage.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="my-10 grid grid-cols-7">
                <div className="col-start-2 col-end-7">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="home" element={<HomePage/>}/>
                        <Route path="auth" element={<AuthPage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="user" element={<UserPage/>}/>
                        <Route path="services" element={<ServicesPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;