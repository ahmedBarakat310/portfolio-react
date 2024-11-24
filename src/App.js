import React, { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";

export default function App() {
  
  const [scrolUp, setscrolUp] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 300){
        setscrolUp(true)
      }else{
        setscrolUp(false)
      }

    })
  })
  return (
    <div className="container">
      <Header  />
    
      <Hero />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />
      <a href="#" className="scrollBtn" style={scrolUp? {opacity:1} :{opacity:0}}>
        <button className="icon-angle-up scroll2Top"></button>
    </a>
    </div>
  );
}
