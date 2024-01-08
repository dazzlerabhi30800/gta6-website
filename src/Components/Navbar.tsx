export default function Navbar() {
  return (
    <nav>
      <img
        className="logo"
        src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
        alt="GTA 6"
      />
      <ul className="links">
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
        <li className="link">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
