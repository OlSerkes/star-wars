import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <ul className='menu-list'>
          <li>
            <NavLink to='/people'>People</NavLink>
          </li>
          <li>
            <NavLink to='/planets'>Planets</NavLink>
          </li>
          <li>
            <NavLink to='/starships'>Starships</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
