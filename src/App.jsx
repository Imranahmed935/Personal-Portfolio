import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
