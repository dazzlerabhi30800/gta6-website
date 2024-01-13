import logo from "/images/logo.png";
export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} alt="GTA 6" />
      <ul className="links">
        <li className="link">
          <a href="#about">About</a>
        </li>
        <li className="link">
          <a href="#post">Post</a>
        </li>
        <li className="link">
          <a href="#story">Story</a>
        </li>
        <li className="link">
          <a href="#new">What's New</a>
        </li>
      </ul>
    </nav>
  );
}
