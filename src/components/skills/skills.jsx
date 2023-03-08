import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import ReactjsDark from "../../asserts/reactjs.png";
import ReactjsLight from "../../asserts/React-light.png";
import ReduxDark from "../../asserts/redux.png";
import ReduxLight from "../../asserts/ReduxLight.webp";
import Nodejs from "../../asserts/nodejs.png";
import NodejsLight from "../../asserts/Nodelight.webp";
import Graphql from "../../asserts/graphql.png";
import Mongo from "../../asserts/mongo.png";
import MongoLight from "../../asserts/mongoLight.png.jpg";
import GraphqlLight from "../../asserts/graphqlLightpng.webp";
import Git from "../../asserts/git.png";
import GitLight from "../../asserts/GitLight.webp";
import Mui from "../../asserts/mui.png";
import MuiLight from "../../asserts/MaterialuiLight.webp";
import Bootstrap from "../../asserts/bootstrap.png";
import BootstrapLight from "../../asserts/bootstrapLight.png";
import HTML from "../../asserts/html.png";
import HTMLLight from "../../asserts/htmlLight.png";
import Css from "../../asserts/css.png";
import CssLight from "../../asserts/cssLight.png";
import Jquery from "../../asserts/jquery.png";
import JqueryLight from "../../asserts/jqueryLight.png";
import Sql from "../../asserts/sql.png";
import SqlLight from "../../asserts/sqlLight.png";
import PYthon from "../../asserts/py.png";
import PYthonLight from "../../asserts/pyLight.png";
import JavaScript from "../../asserts/js.png";
import JavaScriptLight from "../../asserts/jsLight.png";
import Skill from "../../asserts/skills.png";
import SkillLight from "../../asserts/skillsLight.png";
const Skills = ({ theme }) => {
  return (
    <motion.div
      id="skills"
      initial={{ y: 65 }}
      whileInView={{ opacity: [0, 1], y: 35 , transition:{ duration: 1}}}
     
    >
      <div className="container">
        <h1 className="sub-title">My Skills</h1>
        <div className="row">
          <div className=" skills-left">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={ReactjsDark} alt="html" className="skill-img" />
              ) : (
                <img src={ReactjsLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">React</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={ReduxDark} alt="html" className="skill-img" />
              ) : (
                <img src={ReduxLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Redux</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Nodejs} alt="html" className="skill-img" />
              ) : (
                <img src={NodejsLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Nodejs</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Mongo} alt="html" className="skill-img" />
              ) : (
                <img src={MongoLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Mongo</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Graphql} alt="html" className="skill-img" />
              ) : (
                <img src={GraphqlLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Graphql</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Git} alt="html" className="skill-img" />
              ) : (
                <img src={GitLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Git</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Mui} alt="html" className="skill-img" />
              ) : (
                <img src={MuiLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Material-Ui</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Bootstrap} alt="html" className="skill-img" />
              ) : (
                <img src={BootstrapLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Bootstrap</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={HTML} alt="html" className="skill-img" />
              ) : (
                <img src={HTMLLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">HTML</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Css} alt="html" className="skill-img" />
              ) : (
                <img src={CssLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Css</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Jquery} alt="html" className="skill-img" />
              ) : (
                <img src={JqueryLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Jquery</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={Sql} alt="html" className="skill-img" />
              ) : (
                <img src={SqlLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">Sql</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={PYthon} alt="html" className="skill-img" />
              ) : (
                <img src={PYthonLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">PYthon</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-card"
            >
              {theme === "dark-mode" ? (
                <img src={JavaScript} alt="html" className="skill-img" />
              ) : (
                <img src={JavaScriptLight} alt="html" className="skill-img" />
              )}
              <div className="skill-level">98%</div>
              <h1 className="skill-name">JavaScript</h1>
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=" skills-right"
          >
            {theme === "dark-mode" ? (
              <img src={Skill} alt="skill" />
            ) : (
              <img src={SkillLight} alt="skill" className="skill-img-light" />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
