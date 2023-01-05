import './NavBar.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const NavBar = () => {
  return (
    <header>
      <div className="container">
        <h2>Trackages</h2>
        <ul className="nav-links">
          <li className="nav-link-item">
            <a href="https://www.instagram.com/azmye_/" target={'_blank'}>
              <FaInstagram size={22} />
            </a>
          </li>
          <li className="nav-link-item">
            <a href="https://github.com/Azmye" target={'_blank'}>
              <FaGithub size={22} />
            </a>
          </li>
          <li className="nav-link-item">
            <a href="https://www.linkedin.com/in/muhammad-azmi-08487b23a/" target={'_blank'}>
              <FaLinkedin size={22} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
