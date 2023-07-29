import axios from 'axios';
import { useEffect, useState } from 'react';
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
    <div className="App">
      <Header title={storeName} />
      <Home items={items} />
    </div>
  );
}

export default App;
