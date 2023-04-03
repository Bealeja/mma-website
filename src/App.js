import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Ads from "./components/Ads";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { forwardRef, useRef } from "react";

library.add(fab);

const AboutWithRef = forwardRef((props, ref) => <About {...props} ref={ref} />);
const MainWithRef = forwardRef((props, ref) => <Main {...props} ref={ref} />);

function App() {
  const AboutRef = useRef(null);
  const MainRef = useRef(null);
  const SocialRef = useRef(null);

  const MainSearch = () => {
    MainRef.current?.scrollIntoView();
  };
  const AboutSearch = () => {
    AboutRef.current?.scrollIntoView();
  };
  const SocialSearch = () => {
    SocialRef.current?.scrollIntoView();
  };

  return (
    <Router>
      <div className="App">
        <Navbar Aboutus={AboutSearch} Main={MainSearch} Social={SocialSearch} />
        <MainWithRef ref={MainRef} />
        <AboutWithRef ref={AboutRef} />
        <Social ref={SocialRef} />
        <Ads />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
