import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaChevronUp } from "react-icons/fa6";
import logo from "/images/logo.png";
export default function Footer() {
  return (
    <footer>
      <a href="#home">
        <img src={logo} alt="GTA6" />
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#post">Post</a>
        </li>
        <li>
          <a href="#story">Story</a>
        </li>
      </ul>
      <div className="social--wrapper">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaTwitch />
      </div>
      <ul className="careers--wrapper">
        <li>Contact</li>
        <li>
          Careers{" "}
          <span>
            <FaArrowUpRightFromSquare />
          </span>
        </li>
        <li>
          Subscribe{" "}
          <span>
            <FaArrowUpRightFromSquare />
          </span>
        </li>
      </ul>
      <ul className="cookies--wrapper">
        <li>Corporate</li>
        <li>Privacy</li>
        <li>Cookie Settings</li>
        <li>Cookie Policy</li>
        <li>Legal</li>
      </ul>
      <small className="copyright">
        &copy; 2024 RockstarGames Incorporated. This website is for only
        educational purpose only and doesn't have any relation with official
        rockstar games.
      </small>
      <button onClick={() => window.scrollTo(0,0)} className="scroll--btn">
        <FaChevronUp />
      </button>
    </footer>
  );
}
