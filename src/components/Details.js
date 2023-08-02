import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import ItemType from '../types/item';
import { itemImages } from '../items';
import './Details.css';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
      <div className="details-component-sidebar">
        {items.map(({ itemId, imageId, title }) => (
          <Thumbnail
            key={itemId}
            image={itemImages[imageId]}
            title={title}
            itemId={itemId}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
