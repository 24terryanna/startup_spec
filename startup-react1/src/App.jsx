import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './saved/saved';
import Home from './home/home';
import Pedia from './pedia/pedia';
import About from './about/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedia" element={<Pedia />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
