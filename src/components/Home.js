import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import './Home.css';

function Home({ items }) {
  return (
    <div className="home-component">
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

Home.propTypes = {
  items: PropTypes.arrayOf(Thumbnail).isRequired,
};

export default Home;