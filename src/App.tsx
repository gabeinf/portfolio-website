import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
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
            <Route path="/technical/:slug" element={<CaseStudy />} />
            <Route path="/creative/:slug" element={<VideoDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
