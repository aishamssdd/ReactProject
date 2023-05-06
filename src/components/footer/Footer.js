import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import vk from "./../../img/icons/vk.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 copyright </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
