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
  items: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    salePrice: PropTypes.number,
  })).isRequired,
};

export default Home;
