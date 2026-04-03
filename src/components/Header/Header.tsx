import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          VIN Decoder
        </NavLink>
        <nav className="header__nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
            }
          >
            Decoder
          </NavLink>
          <NavLink
            to="/variables"
            className={({ isActive }) =>
              `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
            }
          >
            Variables
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
