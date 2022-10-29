import { NavLink } from "react-router-dom";

const NavCollection = () => {
  return (
    <nav className=''>
      <NavLink to='/collection' className='nav-link' activeClassName='active'>
        My Collection
      </NavLink>
      <NavLink to='/likes' className='nav-link' activeClassName='active'>
        Likes
      </NavLink>
    </nav>
  );
};

export default NavCollection;
