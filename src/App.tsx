import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Tv from './pages/Tv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
