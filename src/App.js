import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function App() {
  const [scrollBtnClass, setScrollBtnClass] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setScrollBtnClass(true);
      } else {
        setScrollBtnClass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
            <About />
            <Works />
            <Skills />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        <div className={`scroll-up-btn ${scrollBtnClass ? "show" : ""}`}>
          <ExpandLessIcon onClick={handleScrollToTop} />
        </div>
      </div>
    </Router>
  );
}

export default App;
