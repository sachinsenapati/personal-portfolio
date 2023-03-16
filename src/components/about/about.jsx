import "./about.css";
import React from "react";
import Pic from "../../asserts/profile.jpg";

import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
function about() {
  return (
    <motion.div
      id="about"
            initial={{x:-145}}
      whileInView={{x:0,opacity:[0,1],transition:{duration:1} }}
    >
      <div className="container">
        <div className="row">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about-col-1"
          >
            <img src={Pic} alt=""/>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about-col-2"
          >
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm Sachin Kumar Senapati. I am a full-stack developer from
              Odisha, India.
            </p>
            <p>
              {" "}
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee.
              <br /> Have a project you'd like to discuss?
              <br /> Let's chat{" "}
              <a href="#contact">
                {" "}
                <FaTelegramPlane className="i" />
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default about;
