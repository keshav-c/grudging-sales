import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { items } from './items';

const storeName = 'Grudging Sales';

function App() {
  useEffect(() => {
    axios.get('/api/items');
  }, []);

  return (
    <div className="App">
      <Header title={storeName} />
      <Home items={items} />
    </div>
  );
}

export default App;
