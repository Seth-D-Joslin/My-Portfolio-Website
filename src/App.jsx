import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
          <Link to="/" id="decor">
            About
          </Link>
          <Link to="/portfolio" id="decor">
            Portfolio
          </Link>
          <Link to="/contact" id="decor">
            Contact
          </Link>
          <Link to="/resume" id="decor">
            Resume
          </Link>
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
          <a href="mailto:seth.joslin@yahoo.com">
            <img src={email} id="icons" alt="Email" />
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.linkedin.com/in/seth-joslin-225200281/"
            target="_blank"
          >
            <img src={linkedIn} id="icons" alt="LinkedIn" />
          </a>
        </h2>
        <h2>
          {" "}
          <a href="https://github.com/Seth-D-Joslin" target="_blank">
            <img
              src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Github-icon.png"
              id="icons"
              alt="GitHub"
            />
          </a>
        </h2>
      </footer>
    </Router>
  );
}

export default App;
