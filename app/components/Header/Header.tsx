import { Link } from "react-router";

import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/classes">Classes</Link>
    </header>
  );
}

export default Header;
