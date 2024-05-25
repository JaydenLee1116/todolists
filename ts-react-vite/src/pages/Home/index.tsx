import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link to="/basic">Basic</Link>
      <Link to="/json-server">Json Server</Link>
    </div>
  );
}

export default Home;
