const projects = [
  {
    title: "test",
    description: "test",
    image: "test",
    link: "test",
  },
  {
    title: "test2",
    description: "test2",
    image: "test2",
    link: "test2",
  },
];

function Portfolio() {
  return (
    <>
      <h1 id="page">Portfolio</h1>
      {projects.map((project, index) => (
        <p key={index}>{project.title}</p>
      ))}
    </>
  );
}

export default Portfolio;
