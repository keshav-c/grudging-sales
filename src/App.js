import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const storeName = 'Grudging Sales';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/api/items')
      .then((response) => setItems(response.data))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Header title={storeName} />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;
