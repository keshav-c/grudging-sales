import PropTypes from 'prop-types';
import Header from './Header';
import Thumbnail from './Thumbnail';
import './Home.css';

function Home({ items, itemImages }) {
  return (
    <div className="home-component">
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

Home.propTypes = {
  items: PropTypes.arrayOf(Thumbnail).isRequired,
  itemImages: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Home;
