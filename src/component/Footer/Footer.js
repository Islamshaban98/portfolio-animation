import React from "react";
import "./style.css";
export const Footer = () => {
  return (
    <>
      <section>
        <div className="marquee-row">
          <div>
            <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span>
          </div>
          <div>
            <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span>
          </div>
        </div>
        <div className="social-link">
          <ul>
            <li>
              <a href="mailto:hello@xavinogueres.work?Subject=Web%20inquiry">
                Send me an email
              </a>
            </li>
            <li>
              <a href="mailto:hello@xavinogueres.work?Subject=Web%20inquiry">
                Behance
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/xavinogueres">Dribble</a>
            </li>
            <li>
              <a href="https://www.instagram.com/xavinogueres/">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com/xavinogueres/">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/xavinogueres/">Linkedin</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCtNMQeeg_DRFn0aDWSERwig">
                Youtube
              </a>
            </li>
          </ul>
          <p>Don't be shy...</p>
          <h4>© Xavi Nogueres 2021</h4>
        </div>
      </section>
    </>
  );
};
