import "./Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="quick-links">
        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          [ Resume ]
        </a>
        <a
          href="https://www.linkedin.com/in/owenritchie2004/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          [ LinkedIn ]
        </a>
        <a href="mailto:owenritchie04@gmail.com" className="footer-link">
          [ Email ]
        </a>
      </div>
    </div>
  );
}

export default Footer;
