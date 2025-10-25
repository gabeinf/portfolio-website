import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
import Technical from './pages/Technical';
import Creative from './pages/Creative';
import CaseStudy from './pages/CaseStudy';
import VideoDetail from './pages/VideoDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <MeshGradient />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/technical/:slug" element={<CaseStudy />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/creative/:slug" element={<VideoDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
