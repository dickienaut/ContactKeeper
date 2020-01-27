import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({title, icon}) => {
  return (
    <div className='navbar bg-primary'>
      <i className={icon} /> {title}
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/about' >About</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.defaultProps ={
  title: 'Contact Keeper',
  icon: 'fas fa-id-card'
}

export default Navbar;
