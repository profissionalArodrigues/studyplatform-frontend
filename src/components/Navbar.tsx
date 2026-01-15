import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          UsersApp
        </Link>

        <ul>
          <li>
            <Link to="homePage">Home</Link>
          </li>
          <li>
            <Link to="userPage">Users</Link>
          </li>
          <li>
            <Link to="">Add</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Navbar;
