import "./contact.css";
import React from "react";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function skills() {
  return (
    <motion.div
      id="contact"
      initial={{ y: -10 }}
      whileInView={{ opacity: [0, 1], y: 0 }}
      transition={{ duration: 1}}
    >
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <AiOutlineMail className="i" />
              sachinsenapati05@gmail.com
            </p>
            <p>
              <BsFillTelephoneFill className="i" />
              9337823454
            </p>
            <p>
              <GoLocation className="i" />
              Brahmapur, Ganjam, Odisha
            </p>
          </div>
          <div className="contact-right">
            <form onSubmit="">
              <input type="text" placeholder="Your Name" name="name" required />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
              <textarea
                rows="6"
                type="text"
                placeholder="Your Message"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <a href="#header" className="Scroll__up">
        Scroll Up {"--->"}
      </a>
    </motion.div>
  );
}

export default skills;
