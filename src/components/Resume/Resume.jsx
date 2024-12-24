import "./resume.css";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `../assets/docs/myResumé.pdf`;
    link.download = "myResumé.pdf";
    link.click();
  };

  return (
    <>
      <div className="resume-container">
        <button onClick={handleDownload} id="downloadButton">
          Download Resumé
        </button>
        <div id="card">
          <h2>Proficiencies</h2>
          <div id="proficiencies">
            <ul class="decor">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HyperText Markup Language</li>
              <li>Cascading Style Sheet</li>
              <li>Responive Design</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
            <ul class="decor">
              <li>React</li>
              <li>MongoDB, Mongoose</li>
              <li>GraphQL, Apollo</li>
              <li>PostgresSQL, Sequelize</li>
              <li>APIs</li>
              <li>Express</li>
              <li>Cypress</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
