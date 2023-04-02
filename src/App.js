import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Ads from "./components/Ads";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Social />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
