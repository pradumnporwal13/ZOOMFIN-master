import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import FormSubmission from '../components/FormSubmission';
import FDInfo from '../components/FDInfo';

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        
        <Route path="/FormSubmission/*" element={<FormSubmission />} />
        <Route path="/FDInfo" element={<FDInfo />} />

    </Routes>
  );
}

export default Router;
