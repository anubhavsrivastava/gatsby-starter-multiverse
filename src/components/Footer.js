import React from 'react';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>More about me</h2>
            <p>
              Part time Open source contributor. Full time Web Developer. Loves
              to travel and shit.
            </p>
          </section>
          <section>
            <h2>Follow me on ...</h2>
            <ul className="icons">
              <li>
                <a href="/#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="/#" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="/#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="/#" className="icon fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="/#" className="icon fa-dribbble">
                  <span className="label">Dribbble</span>
                </a>
              </li>
              <li>
                <a href="/#" className="icon fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="field half">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="primary" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
          </section>
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
