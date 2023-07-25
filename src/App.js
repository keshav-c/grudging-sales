import Home from './components/Home';
import Header from './components/Header';
import { items, itemImages } from './items';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home items={items} itemImages={itemImages} />
    </div>
  );
}

export default App;
