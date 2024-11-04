import AlaskanSelfie from "../assets/images/AlaskanSelfie.jpg";

function About() {
  return (
    <>
      <h1 id="page">About</h1>
      <p>
        <img src={AlaskanSelfie} id="selfie" alt="Selfie" />
        'WIP' Currently attending Full-Stack Web Development Bootcamp with
        University of Denver. For more than a decade I've been working in our
        family businesses going from owning a lawn service to owning a deer
        processing plant. I figured it was about time for something new. I plan
        to become a dedicated developer as soon as I complete the current course
        I'm enrolled in with edX. When I'm not coding I'm indulging in my
        current hobbies of gaming & reading.
      </p>
    </>
  );
}

export default About;
