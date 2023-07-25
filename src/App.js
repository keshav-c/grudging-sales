import './App.css';
import Header from './components/Header';
import Thumbnail from './components/Thumbnail';
import { items, itemImages } from './items';

function App() {
  return (
    <div className="App">
      <Header />
      {items.map(({ itemId, imageId, title }) => (
        <Thumbnail
          key={itemId}
          image={itemImages[imageId]}
          title={title}
        />
      ))}
    </div>
  );
}

export default App;
