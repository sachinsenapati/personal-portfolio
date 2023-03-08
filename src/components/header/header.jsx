import "./header.css";
import React from "react";
import ReactjsLight from "../../asserts/React-light.png";
import MuiLight from "../../asserts/MaterialuiLight.webp";
import NodejsLight from "../../asserts/node.png";
import { motion } from "framer-motion";

import Navbar from "../navbar/navbar";
import CV from "../../asserts/Sachin Kumar Senapati_Resume.pdf";
import Circle from "../../asserts/circle.png";
import Profile from "../../asserts/pic1.png";
import { Typewriter } from "react-simple-typewriter";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
function Header({ theme, toogleTheme }) {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
      <div id="header">
        <Navbar theme={theme} toogleTheme={toogleTheme} />

        {theme === "dark-mode" ? (
          <BsFillSunFill className="i light" onClick={() => toogleTheme()} />
        ) : (
          <BsFillMoonFill className="i light" onClick={() => toogleTheme()} />
        )}
        <div className="container">
          <div className="header__socials">
            <a href="https://www.linkedin.com/feed/">
              <TiSocialLinkedinCircular className="i" />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram className="i" />
            </a>
            <a href="https://github.com/">
              <BsGithub className="i" />
            </a>
          </div>
          <div className="row">
            <div className="header-left">
              <div className="header-text">
                <h1>
                  Hello,
                  <br /> I'm{" "}
                  <span>
                    <Typewriter
                      words={["Sachin"]}
                      loop={10000000000}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
                  </span>
                </h1>
                <p>Full Stack Developer</p>
                <a href={CV} className="btn">
                  Download CV
                </a>
              </div>
            </div>
            <div className="header-right">
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
              >
                {[MuiLight, ReactjsLight, NodejsLight].map((circle, index) => (
                  <div key={`circle-${index}`}>
                    <img src={circle} alt="profile_bg" />
                  </div>
                ))}
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
              >
                <img src={Profile} alt="profile_bg"  />
                <motion.img
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  src={Circle}
                  alt="profile_circle"
                  className="overlay_circle"
                />
              </motion.div>
            </div>
          </div>
          <a href="#contact" className="Scroll__down">
            Scroll Down {"--->"}
          </a>
        </div>
      </div>
  );
}
export default Header;
