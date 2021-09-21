import React from "react";
import Demo from "./Componets/Demo";
import Home from "./Componets/Home";
import NavBar from "./Componets/NavBar";
import './App.css'
import Footer from "./Componets/Footer";
import HomeSkeleton from "./Componets/Skeleton/HomeSkeleton";


const App = () => {

  return (
    <React.Fragment>
      <Demo />
      <NavBar />
      {/* <HomeSkeleton /> */}
      <Home />
      <Footer />


    </React.Fragment>
  );
}

export default App;
