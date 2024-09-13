import React, { useState, useEffect } from "react";
import "../styles/resultspage.css";
import Logo from "../images/Inferlogo.svg";
import flag from "../images/flash.svg";
import Arrow from "../images/Arrow-left.svg";
import { useNavigate } from "react-router-dom";

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

    Bak pin is a common condition affecting millions of individuals each year.
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
  const [query, setQuery] = useState();
  const [response, setResponse] = useState("");
  const [showStreamingSection, setShowStreamingSection] = useState(false);
  const [history, setHistory] = useState([]);
  const [chatInput, setChatInput] = useState(true);

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleBackClick = () => {
    navigate("/searchpage"); // Navigate to the search page
  };

  const handleAskClick = () => {
    if (query.trim() !== "") {
      // Set a dummy response (this could be a real API response in the future)
      setResponse(
        "Here is the response to your query.Set a dummy response (this could be a real API response in the future).Show the streaming section only when the user asks a query"
      );
      setShowStreamingSection(true); // Show the streaming section only when the user asks a query
      setChatInput(false);

      // Add query to history
      setHistory([...history, query]);
      setQuery(" "); // Clear the input field
    } else {
      alert("please Enter a Query");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAskClick();
    }
  };

  const messagesEndRef = React.useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, response]);

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
                id="pagination-a"
                href="#Title"
                rel="Title-page"
                onClick={() => handleNavigationClick("Title")}
              >
                Title & Author
              </a>
            </li>
            <li className={activeSection === "Abstract" ? "active" : ""}>
              <a
                id="pagination-a"
                href="#Abstract"
                rel="Abstract-page"
                onClick={() => handleNavigationClick("Abstract")}
              >
                Abstract
              </a>
            </li>
            <li className={activeSection === "Conflict" ? "active" : ""}>
              <a
                id="pagination-a"
                href="#Conflict"
                rel="Conflict-page"
                onClick={() => handleNavigationClick("Conflict")}
              >
                Conflict of Interest
              </a>
            </li>
            <li className={activeSection === "Similar" ? "active" : ""}>
              <a
                id="pagination-a"
                href="#Similar"
                rel="Similar-page"
                onClick={() => handleNavigationClick("Similar")}
              >
                Similar articles
              </a>
            </li>
            <li className={activeSection === "Cited" ? "active" : ""}>
              <a
                id="pagination-a"
                href="#Cited"
                rel="Cited-page"
                onClick={() => handleNavigationClick("Cited")}
              >
                Cited by
              </a>
            </li>
            <li className={activeSection === "Related" ? "active" : ""}>
              <a
                id="pagination-a"
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
          <div className="title">
            <img src={Arrow} alt="Arrow-left-icon" onClick={handleBackClick} />
            <p>{Data.title}</p>{" "}
          </div>
          <div className="meta">
            <p>
              PMID: {Data.pmid} DOI:<a href={Data.doi}>{Data.doi}</a>
            </p>{" "}
            {/* This will get font-weight: 600 and size 16px */}
            <p>Abstract:</p>{" "}
            {/* The word "Abstract" is highlighted with 600 weight */}
            <p style={{ marginBottom: "15px" }}>{Data.abstract}</p>{" "}
            {/* Abstract content remains normal */}
          </div>
        </div>
      </div>

      {showStreamingSection && (
        <div className="streaming-section">
          <div className="history-pagination">
            <h5>History</h5>
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="streaming-content">
            <div ref={messagesEndRef}></div>

            <div className="query-asked">
              <span>
                {history.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}

                {query}
              </span>
            </div>
            <div className="response" style={{ textAlign: "left" }}>
              <span>{response}</span>
            </div>
            <div className="stream-input">
              <img src={flag} alt="flag-logo" className="stream-flag-logo" />
              <input
                type="text"
                placeholder="Ask anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleAskClick}>Ask</button>
            </div>
          </div>
        </div>
      )}
      {chatInput && (
        <div className="chat-input">
          <img src={flag} alt="flag-logo" className="flag-logo" />
          <input
            type="text"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAskClick}>Ask</button>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
