import { Link } from "react-router";

import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/club">Computer Club</Link>
    </header>
  );
}

export default Header;
