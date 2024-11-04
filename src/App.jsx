import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import linkedIn from "./assets/images/linkedIn.ico";
import email from "./assets/images/email.png";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <header>
        <h1 id="myName">Seth D Joslin</h1>
        <nav id="navBar">
          <a href="/" id="decor">
            About
          </a>
          <a href="/portfolio" id="decor">
            Portfolio
          </a>
          <a href="/contact" id="decor">
            Contact
          </a>
          <a href="/resume" id="decor">
            Resume
          </a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <footer>
        <h2>
          {" "}
          <a href="mailto:seth.joslin@yahoo.com" class="decor">
            <img src={email} id="icons" alt="Email" />
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.linkedin.com/in/seth-joslin-225200281/"
            class="decor"
          >
            <img src={linkedIn} id="icons" alt="LinkedIn"></img>
          </a>
        </h2>
        <h2>
          {" "}
          <a href="https://github.com/Seth-D-Joslin" class="decor">
            <img
              src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Github-icon.png"
              id="icons"
              alt="GitHub"
            ></img>
          </a>
        </h2>
      </footer>
    </Router>
  );
}

export default App;
