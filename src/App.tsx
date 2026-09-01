import { BrowserRouter, Routes, Route } from "react-router-dom";


// components

import Header from "./components/header";
import Footer from "./components/footer";


// pages
import RegisterPage from "./pages/register_user";
import UserData from "./pages/UserData";
import HomePage from "./pages/homepage";

export function App() {

  return (
    <BrowserRouter>

        <Header/>

          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
               <Route path="/user" element={<UserData />} />
            </Routes>
          </div>

        <Footer/>

        
    </BrowserRouter>
  );
}