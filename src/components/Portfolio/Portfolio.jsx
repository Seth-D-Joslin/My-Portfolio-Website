import "./portfolio.css";

const projects = [
  {
    title: "Study Guide",
    image:
      "https://miro.medium.com/v2/resize:fit:1000/1*hhs1OorueEU9-pI5AdK0lQ.gif",
    link: "https://github.com/Seth-D-Joslin/prework-study-guide",
  },
  {
    title: "J&M Sausage LLC",
    image:
      "https://i.pinimg.com/originals/cf/0a/f4/cf0af4f225a953a09bfe6717d45db58b.gif",
    link: "https://github.com/Seth-D-Joslin/J-M-Sausage",
  },
  {
    title: "README Generator",
    image:
      "https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif",
    link: "https://github.com/Seth-D-Joslin/README-Generator",
  },
  {
    title: "Responsive Vehicle Prompt",
    image:
      "https://i.pinimg.com/originals/d4/3c/11/d43c11d76c7db33af616426597e88833.gif",
    link: "https://github.com/Seth-D-Joslin/Responsive-Vehicle-Prompt",
  },
  {
    title: "Weather Forecast",
    image:
      "https://i.pinimg.com/originals/e7/be/ff/e7befff154e80ea8de54b116b750af98.gif",
    link: "https://github.com/Seth-D-Joslin/Weather-Forecast",
  },
  {
    title: "Company Management",
    image:
      "https://i.pinimg.com/originals/fa/d2/e7/fad2e730bb3a7bb0ecea4e446e283920.gif",
    link: "https://github.com/Seth-D-Joslin/Company-Management-edX",
  },
  {
    title: "Penny Pinchers Alpha",
    image:
      "https://i.pinimg.com/originals/f5/8f/bc/f58fbc9e41295d7d8bd01a42587f0d4e.gif",
    link: "https://github.com/justanda/Project-0",
  },
];

function Portfolio() {
  return (
    <>
      <div className="gitprojects">
        {projects.map((project, index) => (
          <div key={index} id="projectPadding">
            <h3 id="projects">{project.title}</h3>{" "}
            <a href={project.link} target="_blank">
              <img src={project.image} alt="animated pic" id="pImages" />
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
