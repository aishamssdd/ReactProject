import "./style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Art</strong> gallery
            </NavLink>

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to="/" className="nav-list__link">
                  Home
                </NavLink>
              </li>

              <li className="nav-list__item">
                <NavLink to="/about" className="nav-list__link">
                  About
                </NavLink>
              </li>

              <li className="nav-list__item">
                <NavLink to="/arts" className="nav-list__link">
                  Arts
                </NavLink>
              </li>

              <li className="nav-list__item">
                <NavLink to="/contacts" className="nav-list__link">
                  Contacts
                </NavLink>
              </li>

              <li className="nav-list__item">
                <NavLink to="/museum" className="nav-list__link">
                  Museum
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
