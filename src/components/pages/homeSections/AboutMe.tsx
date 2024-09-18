import scss from "./AboutMe.module.scss";
import { FiUser } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section id="about" className={scss.AboutMe}>
      <div className="container">
        <div className={scss.text}>
          <h1>ABOUT ME</h1>
          <div className={scss.bor}></div>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className={scss.content}>
          <div className={scss.about}>
            <div className={scss.user}>
              <span>
                <FiUser />
              </span>
              <p>
                About Fully committed to the philosophy of life-long learning,
                I’m a full stack developer with a deep passion for JavaScript,
                React and all things web development. The unique combination of
                creativity, logic, technology and never running out of new
                things to discover, drives my excitement and passion for web
                development. When I’m not at my computer I like to spend my time
                reading, keeping fit and playing guitar.
              </p>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
