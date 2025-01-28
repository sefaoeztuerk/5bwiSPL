import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import PeopleContainer from './components/PeopleContainer';
import SupabasePage from './supabase/SupabasePage';

function App() {
  return (
    <Router>
      <div className="bg-green-900 min-h-screen">
        <Header />
        { }
        <div className="p-4 flex justify-center space-x-4">
          <Link to="/supabase">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Supabase</button>
          </Link>
          <Link to="/card-website">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Card Website</button>
          </Link>
        </div>
        <Routes>
          <Route path="/supabase" element={<SupabasePage />} />
          <Route path="/card-website" element={<PeopleContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;