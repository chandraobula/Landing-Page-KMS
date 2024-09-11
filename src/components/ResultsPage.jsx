import React, { useState } from "react";
import "../styles/resultspage.css";
import Logo from "../images/Inferlogo.svg";
import flag from "../images/flash.svg";
//import Data from "../components/Data.json";

const ResultsPage = () => {
  const Data = {
    title: "Back Pain: Differential Diagnosis and Management",
    pmid: "36400559",
    doi: "10.1016/j.ncl.2022.07.002",
    abstract: `Back pain is a common condition affecting millions of individuals each year.
    A biopsychosocial approach to back pain provides the best clinical framework. A detailed history and physical
    examination with a thorough workup are required to exclude emergent or nonoperative etiologies of back pain. The treatment of
    back pain first uses conventional therapies including lifestyle modifications, nonsteroidal anti-inflammatory drugs,
    physical therapy, and cognitive behavioral therapy. If these options have been exhausted and pain persists for greater than
    6 weeks, imaging and a specialist referral may be indicated.
    Back pain is a common condition affecting millions of individuals each year.
    A biopsychosocial approach to back pain provides the best clinical framework. A detailed history and physical
    examination with a thorough workup are required to exclude emergent or nonoperative etiologies of back pain. The treatment of
    back pain first uses conventional therapies including lifestyle modifications, nonsteroidal anti-inflammatory drugs,
    physical therapy, and cognitive behavioral therapy. If these options have been exhausted and pain persists for greater than
    6 weeks, imaging and a specialist referral may be indicated.
    Back pain is a common condition affecting millions of individuals each year.
    A biopsychosocial approach to back pain provides the best clinical framework. A detailed history and physical
    examination with a thorough workup are required to exclude emergent or nonoperative etiologies of back pain. The treatment of
    back pain first uses conventional therapies including lifestyle modifications, nonsteroidal anti-inflammatory drugs,
    physical therapy, and cognitive behavioral therapy. If these options have been exhausted and pain persists for greater than
    6 weeks, imaging and a specialist referral may be indicated.
    Back pain is a common condition affecting millions of individuals each year.
    A biopsychosocial approach to back pain provides the best clinical framework. A detailed history and physical
    examination with a thorough workup are required to exclude emergent or nonoperative etiologies of back pain. The treatment of
    back pain first uses conventional therapies including lifestyle modifications, nonsteroidal anti-inflammatory drugs,
    physical therapy, and cognitive behavioral therapy. If these options have been exhausted and pain persists for greater than
    6 weeks, imaging and a specialist referral may be indicated.`,
    conflicts: "None declared",
    similarArticles: ["Article 1", "Article 2"],
    citedBy: ["Study 1", "Study 2"],
    relatedInformation: "More details about related studies can be found here.",
  };
  const [activeSection, setActiveSection] = useState("Title");

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Infer Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#why-infer">Why Infer?</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signup">Sign up</button>
          <button className="login">Login</button>
        </div>
      </header>
      <div className="content">
        <div className="pagination">
          <h5>Page navigation</h5>
          <ul>
            <li className={activeSection === "Title" ? "active" : ""}>
              <a
                href="#Title"
                rel="Title-page"
                onClick={() => handleNavigationClick("Title")}
              >
                Title & Author
              </a>
            </li>
            <li className={activeSection === "Abstract" ? "active" : ""}>
              <a
                href="#Abstract"
                rel="Abstract-page"
                onClick={() => handleNavigationClick("Abstract")}
              >
                Abstract
              </a>
            </li>
            <li className={activeSection === "Conflict" ? "active" : ""}>
              <a
                href="#Conflict"
                rel="Conflict-page"
                onClick={() => handleNavigationClick("Conflict")}
              >
                Conflict of Interest
              </a>
            </li>
            <li className={activeSection === "Similar" ? "active" : ""}>
              <a
                href="#Similar"
                rel="Similar-page"
                onClick={() => handleNavigationClick("Similar")}
              >
                Similar articles
              </a>
            </li>
            <li className={activeSection === "Cited" ? "active" : ""}>
              <a
                href="#Cited"
                rel="Cited-page"
                onClick={() => handleNavigationClick("Cited")}
              >
                Cited by
              </a>
            </li>
            <li className={activeSection === "Related" ? "active" : ""}>
              <a
                href="#Related"
                rel="Related-page"
                onClick={() => handleNavigationClick("Related")}
              >
                Related Information
              </a>
            </li>
          </ul>
        </div>
        <div className="article-content">
          <h2>{Data.title}</h2>
          <div className="meta">
            <span>PMID: {Data.pmid}</span>
            <span>DOI: {Data.doi}</span>
            <span>Abstract:{Data.abstract}</span>
          </div>
        </div>
      </div>
      <div className="streaming-section">
        <div className="history-pagination">
          <h5>History</h5>
          <ul>
            <li>Title & Author</li>
            <li>Abstract</li>
          </ul>
        </div>
        <div className="streaming-content">
          <span>{Data.abstract}</span>
          <div className="chat-input">
            <img src={flag} alt="flag-logo" className="flag-logo" />
            <input type="text" placeholder="Ask anything..." />
            <button>Ask</button>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <img src={flag} alt="flag-logo" className="flag-logo" />
        <input type="text" placeholder="Ask anything..." />
        <button>Ask</button>
      </div>
    </div>
  );
};

export default ResultsPage;
