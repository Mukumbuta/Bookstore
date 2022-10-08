import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        {
            navLinks.map((link) => (
              <li className="nav-links" key={link.id}>
                <NavLink
                  to={link.path}
                  className={(navData) => (navData.isActive ? 'active-link' : 'none')}
                  exact="true"
                >
                  {link.text}
                </NavLink>
              </li>
            ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
