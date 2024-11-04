function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `https://youtu.be/dQw4w9WgXcQ`;
    // link.href = `../assets/images/legend.JPG`;
    // link.download = "legend.JPG";
    link.click();
  };

  return (
    <>
      <h1 id="page">Resume</h1>
      <h2>Proficiencies</h2>
      <p>
        <ul class="decor">
          <li>HyperText Markup Language</li>
          <li>Cascading Style Sheet</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responive design</li>
          <li>React</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgresSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>TypeScript</li>
        </ul>
        <button onClick={handleDownload} id="bigUglyButton">
          DOWNLOAD RESUME!
        </button>
      </p>
    </>
  );
}

export default Resume;
