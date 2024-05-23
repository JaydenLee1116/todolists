import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
import Basic from './pages/Basic';

function Layout() {
  return (
    <div>
      <Outlet />
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="basic" element={<Basic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
