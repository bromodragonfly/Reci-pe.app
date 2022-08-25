import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="cyan accent-4">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo">
          Recipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down ">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
