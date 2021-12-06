import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
    </nav>
  );
}

export default Header;