import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Confidentialite from "./components/Confidentialite/Confidentialite";
import AppLoadingOverlay from "./components/Loader/AppLoadingOverlay";
import RouteLoader from "./components/Loader/RouteLoader";

function App() {
  return (
    <>
      {/* Nouveau loader circulaire pour le chargement initial */}
      <AppLoadingOverlay brandName="Code by Hugo" />

      {/* Mini-loader pour les transitions de route */}
      <RouteLoader />

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
