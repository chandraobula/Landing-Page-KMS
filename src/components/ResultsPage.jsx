import React, { useState, useEffect, useRef } from "react";
import "../styles/resultspage.css";
import Logo from "../images/Inferlogo.svg";
import flag from "../images/flash.svg";
import Arrow from "../images/Arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ResultsPage = () => {
  const Data = {
    title: "Back Pain: Differential Diagnosis and Management",
    pmid: "36400559",
    doi: "10.1016/j.ncl.2022.07.002",
    abstract: `Back pain is a common condition affecting millions of individuals each year...`, // Abstract truncated for readability
    conflicts: "None declared",
    similarArticles: ["Article 1", "Article 2"],
    citedBy: ["Study 1", "Study 2"],
    relatedInformation: "More details about related studies can be found here.",
  };

  const [activeSection, setActiveSection] = useState("Title");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [showStreamingSection, setShowStreamingSection] = useState(false);
  const [history, setHistory] = useState([]);
  const [chatInput, setChatInput] = useState(true);

  const { pmid } = useParams();
  const [loading, setLoading] = useState(false);
  const endOfMessagesRef = useRef(null);
  const [chatHistory, setChatHistory] = useState(() => {
    const storedHistory = sessionStorage.getItem("chatHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/searchpage");
  };

  const handleAskClick = () => {
    if (!query) {
      alert("Please enter a query");
      return;
    }
    setHistory([...history, query]);
    setShowStreamingSection(true);
    setChatInput(false);
    setLoading(true);

    const newChatEntry = { query, response: "" };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newChatEntry]);

    const bodyData = JSON.stringify({
      question: query,
      pmid: 29493979,
    });

    fetch("http://13.127.207.184:80/generateanswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    }).then((response) => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const readStream = () => {
        reader.read().then(({ done, value }) => {
          if (done) {
            setLoading(false);
            sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory));
            return;
          }

          const chunk = decoder.decode(value, { stream: true });
          const jsonChunk = JSON.parse(chunk);
          const answer = jsonChunk.answer;

          setResponse(answer);
          setChatHistory((prevChatHistory) => {
            const updatedChatHistory = [...prevChatHistory];
            updatedChatHistory[updatedChatHistory.length - 1].response +=
              answer;
            return updatedChatHistory;
          });

          if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
          }

          readStream();
        });
      };

      readStream();
    });
  };
  console.log(chatHistory);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAskClick();
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("chatHistory");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, history, response]);
  const messagesEndRef = React.useRef(null);

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
              <a href="#Title" onClick={() => handleNavigationClick("Title")}>
                Title & Author
              </a>
            </li>
            <li className={activeSection === "Abstract" ? "active" : ""}>
              <a
                href="#Abstract"
                onClick={() => handleNavigationClick("Abstract")}
              >
                Abstract
              </a>
            </li>
            <li className={activeSection === "Conflict" ? "active" : ""}>
              <a
                href="#Conflict"
                onClick={() => handleNavigationClick("Conflict")}
              >
                Conflict of Interest
              </a>
            </li>
            <li className={activeSection === "Similar" ? "active" : ""}>
              <a
                href="#Similar"
                onClick={() => handleNavigationClick("Similar")}
              >
                Similar Articles
              </a>
            </li>
            <li className={activeSection === "Cited" ? "active" : ""}>
              <a href="#Cited" onClick={() => handleNavigationClick("Cited")}>
                Cited by
              </a>
            </li>
            <li className={activeSection === "Related" ? "active" : ""}>
              <a
                href="#Related"
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
            <p>{Data.title}</p>
          </div>
          <div className="meta">
            <p>
              PMID: {Data.pmid} DOI: <a href={Data.doi}>{Data.doi}</a>
            </p>
            <p>Abstract:</p>
            <p style={{ marginBottom: "15px" }}>{Data.abstract}</p>
          </div>
        </div>
      </div>

      {showStreamingSection && (
        <div className="streaming-section">
          <div className="history-pagination">
            <h5>History</h5>
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item.slice(0, 20)}...</li>
              ))}
            </ul>
          </div>
          <div className="streaming-content">
            <div ref={messagesEndRef}></div>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <div className="query-asked">
                  <span>{chat.query}</span>
                </div>
                <div className="response" style={{ textAlign: "left" }}>
                  {/* <span>{chat.response}</span> */}
                  <ReactMarkdown>{chat.response}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
            <div className="stream-input">
              <img src={flag} alt="flag-logo" className="stream-flag-logo" />
              <input
                type="text"
                placeholder="Ask anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleAskClick}>
                {loading ? <CircularProgress size={24} color="white" /> : "Ask"}
              </button>
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
