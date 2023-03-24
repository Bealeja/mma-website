import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/Main/About";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
