import React from "react";
import NavBar from "./components/NavBar";
import Router from "./utils/Router";
import Footer from "./components/Footer";


function App({show}) {
  

  return (
    <div className="w-full scroll-smooth relative">
      <NavBar show={show} />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
