import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import {GrLinkedin} from 'react-icons/gr'

const SocialMedia = () => {
  return (
    <div className="social-media">
            <div className="social-media-info">
              <a
                href="https://www.linkedin.com/in/bilal-mubarak-idris-77b022212/"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedin />
              </a>
              <a
                href="https://github.com/CodeWithBilal"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/BilalMubarakId1"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter />
              </a>
          </div>
          <h3 className="contact"><span className="contact-text">Get in Touch</span> ☞ <a className="mail-to" rel="noreferrer"  href="mailto:bilalmubarakidris@gmail.com" target="_blank">bilalmubarakidris@gmail.com</a></h3>
    </div>
  )
  
}

export default SocialMedia;