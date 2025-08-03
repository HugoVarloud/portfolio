import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Confidentialite from "./components/Confidentialite/Confidentialite";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="accueil">
                  <Home />
                </div>
                <div id="experience">
                  <Experience />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="contacts">
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/zen-coach-confidentialite"
            element={<Confidentialite />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
