import Logo from "../images/Logo.svg";
import Search from "../images/Search.svg";
import React, { useState, useEffect, useCallback } from "react";
import "../styles/advsearch.css";

const AdvSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("bestMatch");
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState([
    "low back pain",
    "back pain treatment",
    "chronic back pain",
    "back pain exercise",
    "therapy",
    "back pain physiotherapy",
    "lower back pain",
  ]);
  const articlesPerPage = 5;

  // Wrap handleSearch in useCallback to avoid re-creation on every render
  const handleSearch = useCallback(async () => {
    try {
      const response = await fetch(
        `https://13.232.28.221:80/articles?query=${searchQuery}&page=${currentPage}&limit=${articlesPerPage}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.total);
      setFilters(data.similarKeywords); // Assuming your API returns similar keywords as well
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  }, [searchQuery, currentPage]); // Add searchQuery and currentPage as dependencies

  // useEffect to trigger the search when searchQuery or currentPage changes
  useEffect(() => {
    handleSearch();
  }, [handleSearch]); // Add handleSearch as a dependency

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-page-container">
      {/* Header Section */}
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

      {/* Search Section */}
      <div className="search-section">
        <div className="search-bar">
          <img src={Search} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="bestMatch">Best match</option>
            <option value="latest">Latest</option>
            <option value="relevance">Relevance</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Similar Results */}
      <div className="results-container">
        <div className="similar-results">
          <h3>Similar results</h3>
          <div className="tags">
            {filters.map((filter, index) => (
              <span
                key={index}
                label={filter}
                style={{ margin: "5px" }}
                onClick={() => setSearchQuery(filter)}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="search-results">
          <div className="result-info">
            <span>{totalResults} results</span>
          </div>

          {/* Sample Results */}
          {articles.map((article, index) => (
            <div className="result-card" key={index}>
              <h4>{article.title}</h4>
              <p>{article.authors.join(", ")}</p>
              <p>{article.summary}</p>
              <div className="card-actions">
                <input type="checkbox" />
                <button className="cite-btn">Cite</button>
                <button className="bookmark-btn">Bookmark</button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(totalResults / articlesPerPage) },
              (_, index) => (
                <button
                  key={index}
                  className={`page-number ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvSearch;
