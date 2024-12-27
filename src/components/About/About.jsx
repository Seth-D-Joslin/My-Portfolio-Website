import AlaskanSelfie from "../../assets/images/AlaskanSelfie.jpg";
import "./about.css";

function About() {
  return (
    <>
      <div id="aboutMe">
        <img src={AlaskanSelfie} id="selfie" alt="Selfie" />
        <h2>Full-Stack Web Developer</h2>
        <p>
          I have recently graduated from the Full-Stack Web Development Bootcamp
          at the University of Denver, where I built a strong foundation in
          JavaScript, TypeScript, and React. With over a decade of experience in
          our family businesses—ranging from owning a lawn service to managing a
          deer processing plant—I've gained valuable problem-solving and
          management skills. Now, I'm excited to pivot into software
          development, leveraging my technical expertise and hands-on
          experience. When I'm not coding, you'll find me indulging in my
          hobbies of gaming and reading.
        </p>
      </div>
    </>
  );
}

export default About;
