import "./work.css"
import React from 'react'
import{CiShare1} from "react-icons/ci"
import Netflix from '../../asserts/netflix.webp'
import Chatapp from "../../asserts/chat.webp";
import Todo from "../../asserts/todo.webp";
import { motion } from "framer-motion";
function work() {
  return (
    <motion.div
      id="work"
      initial={{ y: -15 }}
      whileInView={{ opacity: [0, 1], y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h1 className="sub-title">My Works</h1>
        <div className="work-list">
          <div className="work">
            <img src={Netflix} alt="" />
            <div className="layer">
              <h3>Netflix app</h3>
              <p>
                This is an netflix clone bulit using react js. and TMDB API for
                fetching the data
                <br />
                <a href="#1">
                  <CiShare1 />
                </a>
              </p>
            </div>
          </div>
          <div className="work">
            <img src={Chatapp} alt="" />
            <div className="layer">
              <h3>Chat App</h3>
              <p>
                This app connects you to the talented people around the world.
                <br />
                <a href="#2">
                  <CiShare1 />
                </a>
              </p>
            </div>
          </div>
          <div className="work">
            <img src={Todo} alt="" />
            <div className="layer">
              <h3>Todo List</h3>
              <p>
                This application allow to user to store the works that they want
                to do the day.
                <br />
                <a href="#3">
                  <CiShare1 />
                </a>
              </p>
            </div>
          </div>
          {/* <div className="work">
            <img src={Netflix} alt="" />
            <div className="layer">
              <h3>Netflix app</h3>
              <p>
                This is an netflix clone bulit using react js. and TMDB API for
                fetching the data
                <br />
                <a href="#1">
                  <CiShare1 />
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default work
