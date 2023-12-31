import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import Reward from './components/Reward';
import NotFound from './components/NotFound';

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
        <Route path="/details" element={<Details items={items} />}>
          <Route path=":id" element={<DetailItem />} />
          <Route index element={<div>None Selected</div>} />
        </Route>
        <Route path="/rewards/:tier" element={<Reward />} />
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
