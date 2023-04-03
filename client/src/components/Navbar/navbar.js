import { useLocation,Link } from 'react-router-dom';
//Imagens
import lin_fill from './img/lin_fill.png';
import explore_fill from './img/explore_fill.png';
import skirt_fill from './img/skirt_fill.png';
import lin_border from './img/lin_border.png';
import explore_border from './img/explore_border.png';
import skirt_border from './img/skirt_border.png';

//Partials
import AuthCheck from '../../partials/NavbarPartials/AuthCheck/AuthCheck';

//CSS
import styles from './css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function NavScrollExample() {
  const location = useLocation();
  let lin;
  let explore;
  let skirt;
  if (location.pathname === '/') {
    lin = lin_fill;
  } else {
    lin = lin_border;
  }
  if (location.pathname === '/explore') {
    explore = explore_fill;
  } else {
    explore = explore_border;
  }
  if (location.pathname === '/skirt') {
    skirt = skirt_fill;
  } else {
    skirt = skirt_border;
  }
  return (
    <nav className={`${styles.navcustom} navbar navbar-expand-lg navbar-light bg-light fixed-top`}>
      <div className="container-fluid d-flex">
        <Link className="navbar-brand mt-3" to="/">
          <img src={lin} width="30" height="30" className="d-inline-block align-top" alt="" />
          <h3 className="d-inline">Linnie</h3>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/explore"><img src={explore} width="30" height="30" alt="" /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skirt"><img src={skirt} width="30" height="30" alt="" /></Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
        <AuthCheck/>
      </div>
    </nav>
  );
}

export default NavScrollExample;
