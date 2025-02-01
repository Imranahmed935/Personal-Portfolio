import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#def1f6a2] to-[#ecf6f9a2]">
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
