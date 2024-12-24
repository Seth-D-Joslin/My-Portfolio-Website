import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
// import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
          <Article />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
