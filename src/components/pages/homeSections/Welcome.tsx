"use client";
import scss from "./Welcome.module.scss";
import { Snowfall } from "react-snowfall";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <Snowfall style={{ position: "fixed", zIndex: "99" }} />

      <div className={scss.content}>
        <h1>HEY, I'M ARSLANBEKOV SHABDAN</h1>
        <h2>
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </h2>
        <button>ABOUT ME</button>
      </div>
    </section>
  );
};

export default Welcome;
