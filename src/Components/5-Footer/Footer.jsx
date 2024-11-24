import React, { useState } from "react";
import "./footer.css";
import CvHeader from "../cvHeader/CvHeader";


const Footer = () => {
const [showcv, setshowcv] = useState(false);

  return<>

    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
        <button
              onClick={() => {
                setshowcv(true);
              }}
            >
              Cv
            </button>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
    {showcv && (
          <div className="fixed cv">
          <button
            className="icon-close closeCvIcon"
            onClick={() => {
              setshowcv(false);
            }}
          />
          <div className="cvModel">
            <div className="cv-heading">
              <h1>Ahmed Barakat Hassan Elzayat</h1>
              <h4>Front-End Developer</h4>
            </div>
            <div className="cv-contact">
              <div className="flex">
                <span className="icon-envelope"></span>
                <span>barakata138@gmail.com</span>
              </div>
              <div className="flex">
                <span className="icon-phone"></span>
<span>
  01278389339</span>              </div>
              <div className="flex">
                <span className="icon icon-map-marker"></span>
                <span>Egypt,Monofia,Quesna</span>
              </div>

              <div className="flex">
                <a href="https://www.linkedin.com/in/ ahmed-barakat-613653219">
                  <span className="icon icon-linkedin-square"></span>

                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex">
                <a href="https://github.com/ahmedBarakat310">
                  <span className="icon icon-github"></span>

                  <span>Github</span>
                </a>
              </div>
            </div>
            <CvHeader iconClass='icon-verified' title='Summary'/>
            <div className="cv-summary ">
              <span className="bold">Front-End Developer</span>
              <span className="summary-description"> with experience in web development. Skilled in HTML, CSS, JavaScript, React js and
various frameworks to create user-friendly and interactive web experiences. Proven ability to
troubleshoot and create efficient coding solutions. Applying to work as a front-end developer to
improve user experience and create innovative web designs.</span>
            </div>
            <CvHeader iconClass='icon-verified' title='Education'/>
            <div className="cv-education flex">
              <div className="left ">
                <span className="bold">Faculty Of Science Banha-University</span>
                <p>I graduated from the College of Science, majoring in Computer Science
                </p>
              </div>
              <div className="right ">
                <span>2020-2024</span>
                <p>Banha,Egypt</p>
              </div>
            </div>
            <CvHeader iconClass='icon-verified' title='Skills'/>
           <div className="cv-skills">
           <ul>
              <li>Html</li>
              <li>Css</li>
              <li>BootStrap</li>
              <li>JavaScript</li>
              <li>ES6</li>

              <li>TailwindCss</li>
              <li>React jS</li>
            </ul>
           </div>
           <CvHeader iconClass='icon-verified' title='Language'/>
           <div className="cv-language flex">
            <span>Arabic</span>
            <span>Language</span>
           </div>
           <CvHeader iconClass='icon-verified' title='Projects'/>
            <div className="cv-projects">
              <a href="">
                <span className="bold">PortFolio</span>
                <span className="icon-link"></span>
                <p>This is my PortFolio contains all my  projects</p>
              </a>
             
            </div>
          </div>
          <div className="download-cv">
  <a href="/myCv.pdf" download='ahmedBarakatCv.pdf'>Download CV</a>
</div>
        </div>
      )}
  
  </>
    
  
};

export default Footer;
