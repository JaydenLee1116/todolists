import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
import Basic from './pages/Basic';
import JsonServer from './pages/JsonServer';

function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
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
          <Route path="json-server" element={<JsonServer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
