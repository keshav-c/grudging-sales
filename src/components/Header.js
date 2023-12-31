import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AngryLogo from '../images/logo.svg';
import './Header.css';

function Header({ title }) {
  return (
    <header className="header-component">
      <Link to="/">
        <img className="angry-logo-img" src={AngryLogo} alt="Grudging Sales" />
        <h1>{title}</h1>
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
