import React from 'react';
import { ImHtmlFive } from 'react-icons/im'
import { SiTailwindcss } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { GrNode } from 'react-icons/gr'
import { FaJava } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'

const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <div className="heading-section">
                <h1>
                    <span className="skills-text">Ski</span>lls
                </h1>
            </div>
            <div>
                <div className="skills">
                    <span className="icon">
                        <ImHtmlFive />
                    </span>
                    <span className="icon">
                        <FaCss3Alt />
                    </span>
                    <span className="icon">
                        <IoLogoJavascript />
                    </span>
                    <span className="icon">
                        <SiTailwindcss />
                    </span>
                    <span className="icon">
                        <FaReact />
                    </span>
                    <span className="icon">
                        <GrNode />
                    </span>
                    <span className="icon">
                        <FaJava />
                    </span>
                    <span className="icon">
                        <FaGithub  />
                    </span>
                    <span className="icon">
                        <DiGit />
                    </span>
                    <span className="icon">
                        <SiRedux />
                    </span>
                    <span className="icon">
                        <FaBootstrap />
                    </span>
                    <span className="icon">
                        <SiCplusplus />
                    </span>
                    <span className="icon">
                        <FaPython />
                    </span>
                </div>
            </div>
        </div>
    )
}



export default Skills