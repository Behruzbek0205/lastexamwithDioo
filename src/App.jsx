import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Banner from "./pages/banner/Banner";
import Apple from "./pages/apple/Apple";
import Information from "./pages/imforation/Information";
import Gadjets from "./pages/gadjets/Gadjets";
import Apply from "./pages/apply/Apply";
import Location from "./pages/location/Location";
import Final from "./pages/final/Final";
import About from "./pages/about/About";
import Form from "./pages/form/Form";
import Liked from "./pages/liked/Liked";
import Step from "./pages/step/Step";
import Update from "./pages/update/Update";
import AdminLog from "./pages/adminLog/AdminLog";
import Admin from "./pages/adminLogin/Admin";
import AdminPage from "./pages/adminPage/AdminPage";

const App = () => {
  const [ulanish, setUlanish] = useState(false);

  if (!ulanish) {
    return <Form onLogin={() => setUlanish(true)} />;
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/gadjets" element={<Gadjets />} />
        <Route path="/information/:id" element={<Information />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/location" element={<Location />} />
        <Route path="/final" element={<Final />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/step" element={<Step />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/adminLog" element={<AdminLog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminPage" element={<AdminPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
