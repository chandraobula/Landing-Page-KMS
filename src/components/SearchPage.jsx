import React from "react";
import { Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/landingpage.css";
import "../styles/search.css";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import keywords from "../Data/keywords.json";

import {
  Toolbar,
  Button,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import Logo from "../images/Logo.svg";
import { useState, useEffect } from "react";
import ReactLogo from "../images/ReactLogo.png";
import group1 from "../images/Group (1).svg";
import group2 from "../images/Group (2).svg";
import group3 from "../images/Group (3).svg";

const SearchPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll position and update the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const faqList = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text...lorem ahbasjbc cael lbeylw w bcebbvbsdj abhjsbdh ahsdbchjhdsvlj hsbdlbaj kBHDCHshcj sj vjs JDvvjhadsjsjjjjjjjjjjj aksc adjk aksdckjabsdjk aksbjdcbdsviwebkasjbas asnbkjbasdk",
    },
    {
      question: "Why do we use it?",
      answer: "It is a long established fact...",
    },
    {
      question: "Where can I get some?",
      answer: "There are many variations of passages...",
    },
    {
      question: "Where does it come from?",
      answer: "Contrary to popular belief, Lorem Ipsum...",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <Container>
          <Toolbar disableGutters className="toolbar">
            <div className="logoSection">
              <img src={Logo} alt="Logo" className="logo" />
              <Typography>Infer.</Typography>
            </div>
            <nav className="navLinks" style={{ position: "static" }}>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                style={{ textDecoration: "none", color: "white" }}
                rel="why-infer"
              >
                Home
              </a>

              <a
                href="#why-infer"
                className={activeSection === "why-infer" ? "active" : ""}
                style={{ textDecoration: "none", color: "white" }}
                rel="why-infer"
              >
                Why Infer?
              </a>

              <a
                href="#faq"
                className={activeSection === "faq" ? "active" : ""}
                style={{ textDecoration: "none", color: "white" }}
                rel="why-infer"
              >
                FAQ's
              </a>
            </nav>
            <div className="authButtons">
              <Button
                variant="outlined"
                className="signupButton"
                style={{
                  backgroundColor: "#000",
                  borderColor: "white",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Sign up
              </Button>
              <Button
                variant="outlined"
                className="loginButton"
                style={{
                  borderColor: "white",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Login
              </Button>
            </div>
          </Toolbar>
        </Container>
        <Container
          className="hero-sec"
          style={{ marginTop: 100, maxWidth: 820 }}
        >
          {/* Typography moved outside the transparent container */}
          <div className="heroTitle">
            <Typography variant="h3">Welcome to Infer!</Typography>
          </div>

          {/* Transparent Content */}
          <Container className="heroContent">
            <div className="searchBox" style={{ marginTop: 20 }}>
              <img
                src={ReactLogo}
                alt=""
                style={{
                  position: "absolute",
                  left: "-50px", // Adjust position as needed
                  top: "100px", // Adjust position as needed
                  zIndex: 0, // Make sure it's behind the search bar
                  opacity: 0.5, // Optional: Add opacity for a subtle background effect
                  width: "80px", // Adjust size as needed
                }}
              />
              <img
                src={group1}
                alt=""
                style={{
                  position: "absolute",
                  left: "50px", // Adjust position as needed
                  top: "-30px", // Adjust position as needed
                  zIndex: 0, // Ensure it's behind the search bar
                  opacity: 0.5, // Optional
                  width: "100px", // Adjust size as needed
                }}
              />
              <img
                src={group2}
                alt=""
                style={{
                  position: "absolute",
                  left: "20px", // Adjust position as needed
                  bottom: "-20px", // Adjust position as needed
                  zIndex: 0, // Behind the search bar
                  opacity: 0.5, // Optional
                  width: "90px", // Adjust size as needed
                }}
              />
              <img
                src={group3}
                alt=""
                style={{
                  position: "absolute",
                  right: "-40px", // Adjust position as needed
                  top: "-20px", // Adjust position as needed
                  zIndex: 0, // Ensure it's behind the search bar
                  opacity: 0.5, // Optional
                  width: "80px", // Adjust size as needed
                }}
              />
              <TextField
                variant="outlined"
                required
                placeholder="Type to Search..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px", // Set border-radius here
                    backgroundColor: "white",
                    width: 600,
                    height: 42,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "black" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="contained"
                className="searchButton"
                size="medium"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderRadius: "20px",
                  zIndex: 1, // Ensure it stays above the input
                }}
              >
                Search
              </Button>
            </div>
            <Typography variant="body1" className="heroSubtitle" mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been.lorekwbcbwc jehrbvbebrb jwevchjjj
              <br />
              jwebhjbwejbqewr jwhbejhqbew
            </Typography>
          </Container>
        </Container>
      </section>

      {/* Why Infer Section */}
      <section className="whyInfer" id="why-infer">
        <Typography variant="h2" align="center">
          Why Infer?
        </Typography>
        <Container>
          <Grid container spacing={3} marginTop={2}>
            {["01", "02", "03", "04"].map((item, index) => (
              <Grid item xs={12} md={4} lg={6} key={index}>
                <div className="whyCard">
                  <Typography variant="h5" className="cardNumber">
                    {item}
                  </Typography>
                  <Typography variant="h6">Lorem Ipsum</Typography>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <Typography
          variant="h6"
          align="center"
          style={{ marginTop: 2, fontSize: "44px", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>
        <Container style={{ marginTop: 40 }}>
          {faqList.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={() => handleAccordionChange(index)}
              style={{
                width: "80%",
                margin: "0 auto",
                marginBottom: "20px", // Add marginBottom to increase gap between accordions
              }}
            >
              <AccordionSummary
                expandIcon={
                  expandedIndex === index ? (
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      − {/* Minus icon when expanded */}
                    </Typography>
                  ) : (
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      + {/* Plus icon when collapsed */}
                    </Typography>
                  )
                }
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    border: "1px solid lightgray",
                    marginRight: "10px",
                    backgroundColor: "#f9f9f9",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container className="footerContainer">
          <Typography variant="body2" className="footerText">
            Copyright © 2024,
            <a
              href="https://www.infersol.com"
              target="_blank"
              rel="nore noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              infer Solutions, Inc.
            </a>
            All Rights Reserved.
          </Typography>
          <div className="icons">
            <IconButton
              component={Link}
              href="https://www.facebook.com/infersol"
              target="_blank"
            >
              <Facebook fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              component={Link}
              href="https://x.com/i/flow/login?redirect_after_login=%2FIncInfer"
              target="_blank"
            >
              <Twitter fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.instagram.com/infersol/"
              target="_blank"
            >
              <Instagram fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/company/infer-solutions/"
              target="_blank"
            >
              <LinkedIn fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default SearchPage;
