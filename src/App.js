import Home from './components/Home';
import Header from './components/Header';
import { items } from './items';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
