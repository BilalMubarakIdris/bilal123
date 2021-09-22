import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import {GrLinkedin} from 'react-icons/gr'

const Footer = () => {
  return (
    <div className="footer">
            <div className="footer-info">
              <a
                href="https://www.linkedin.com/in/bilal-mubarak-idris-77b022212/"
                className="nav-item cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedin />
              </a>
              <a
                href="https://github.com/CodeWithBilal"
                className="nav-item cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/BilalMubarakId1"
                className="nav-item cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter />
              </a>
          </div>
          <div className="footer-end">
          <p>
            Designed & Developed with ❤️ by{""}
          <span className="footer-text">Bilal </span>
          - 2021
          </p>
        </div>
    </div>
  )
  
}

export default Footer;