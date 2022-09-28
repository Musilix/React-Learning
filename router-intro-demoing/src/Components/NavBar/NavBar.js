import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav id="nav-content">
      <ul>
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/squibby"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            SQUIBBY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
