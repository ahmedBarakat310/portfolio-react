import "./hero.css";
import Lottie from 'lottie-react'
import {motion} from 'framer-motion'
import devAnimation from '../../animation/dev.json'
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img initial={{transform:'scale(0)'}} animate={{transform:'scale(1.1)'}} transition={{damping:6,type:'spring',stiffness:100}} src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="title">
          Software designer, Gym Trainer.
        </motion.h1>
        <p className="sub-title">
          I’m Ahmed Barakat, a software Developer and Gym Trainer based in Quisna City. I Can make Responsive website and very fast with Clean Code
        </p>

        <div className="all-icons flex">
          <div className="icon icon-facebook-square"><a href="https://www.facebook.com/people/Ahmed-Barakat/100022290304648/?mibextid=ZbWKwL"></a></div>
          <div className="icon icon-instagram"><a href="https://www.instagram.com/ahmedbarakat828/profilecard/?igsh=M2l3eTI3aWllaml2"></a></div>
          <div className="icon icon-github"><a href="https://github.com/ahmedBarakat310"></a></div>
          <div className="icon icon-linkedin-square"><a href="https://www.linkedin.com/in/ ahmed-barakat-613653219"></a></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie animationData={devAnimation} height={333}/>
      </div>
    </section>
  );
};

export default Hero;
