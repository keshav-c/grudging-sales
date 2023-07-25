import AngryLogo from '../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header-component">
      <img className="angry-logo-img" src={AngryLogo} alt="Grudging Sales" />
      <h1>Grudging Sales</h1>
    </header>
  );
}

export default Header;
