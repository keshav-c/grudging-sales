import AngryLogo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <img className="angry-logo-img" src={AngryLogo} alt="Grudging Sales" />
      <h1>Grudging Sales</h1>
    </header>
  );
}

export default Header;
