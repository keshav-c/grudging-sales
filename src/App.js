import Home from './components/Home';
import { items, itemImages } from './items';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home items={items} itemImages={itemImages} />
    </div>
  );
}

export default App;
