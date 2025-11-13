import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MeshGradient from './components/MeshGradient';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import VideoDetail from './pages/VideoDetail';
import './App.css';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(MeshGradient, {}), _jsx(Header, {}), _jsx("main", { className: "main-content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/technical/:slug", element: _jsx(CaseStudy, {}) }), _jsx(Route, { path: "/creative/:slug", element: _jsx(VideoDetail, {}) })] }) })] }) }));
}
export default App;
