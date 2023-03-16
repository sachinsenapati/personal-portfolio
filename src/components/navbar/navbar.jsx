import React,{useState} from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [showMenu, setMenu] = useState(false);

  return (
    <nav>
      <h1 className="logo">
        <span>S</span>achin
      </h1>
      <ul className={showMenu ? "Menu" : "showMenu"}>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <AiOutlineClose className="icon" onClick={() => setMenu(!showMenu)} />
      </ul>
      <AiOutlineMenu className="icon" onClick={() => setMenu(!showMenu)} />
    </nav>
  );
}

export default Navbar;
