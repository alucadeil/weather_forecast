import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-center p-3 gap-5 shadow-md">
          <li>
            <Link to={'in/minsk'}>Minsk</Link>
          </li>
          <li>
            <Link to={'in/moscow'}>Moscow</Link>
          </li>
          <li>
            <Link to={'in/bratislava'}>Bratislava</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
