import { BsGithub } from "react-icons/bs";
import "./styles.css";

export const Navbar: any = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/karolinegr"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <BsGithub className="icon-git" />
              <p className="dsmovie-contact-link">/karolinegr</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
