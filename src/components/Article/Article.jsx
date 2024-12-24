import linkedIn from "../../assets/images/linkedIn.ico";
import email from "../../assets/images/email.png";
import "./article.css";

function Article() {
  return (
    <>
      <article>
        <div id="email">
          {" "}
          <a href="mailto:seth.joslin@yahoo.com">
            <img src={email} id="icons" alt="Email" />
          </a>
        </div>
        <div id="gitHub">
          {" "}
          <a href="https://github.com/Seth-D-Joslin" target="_blank">
            <img
              src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Github-icon.png"
              id="icons"
              alt="GitHub"
            />
          </a>
        </div>
        <div id="linkedIn">
          {" "}
          <a
            href="https://www.linkedin.com/in/seth-joslin-225200281/"
            target="_blank"
          >
            <img src={linkedIn} id="icons" alt="LinkedIn" />
          </a>
        </div>
      </article>
    </>
  );
}

export default Article;
