import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Art from "./pages/Art";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<main className="main-content home-page"><Home /></main>} />
          <Route path="/about" element={<main className="main-content"><About /></main>} />
          <Route path="/work" element={<main className="main-content"><Work /></main>} />
          <Route path="/art" element={<main className="main-content"><Art /></main>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
