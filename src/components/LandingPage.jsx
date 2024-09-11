import React from "react";
import { Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/landingpage.css";
import { TextField, InputAdornment } from "@mui/material";
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
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const LandingPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
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
      <section className="hero">
        <Container>
          <Toolbar disableGutters className="toolbar">
            <div className="logoSection">
              <img src={Logo} alt="Logo" className="logo" />
              <Typography>Infer.</Typography>
            </div>
            <nav className="navLinks">
              <a
                href="#text-buton"
                rel="why-infer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Why Infer?
              </a>

              <a
                href="#text-buton"
                rel="why-infer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Advanced Search
              </a>

              <a
                href="#text-buton"
                rel="why-infer"
                style={{ textDecoration: "none", color: "white" }}
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
                variant="text"
                className="advancedSearchButton"
                size="small"
                style={{
                  position: "absolute",
                  right: "100px", // Adjust for spacing between icon and button
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1, // Ensure it stays above the input
                }}
              >
                Advanced Search
              </Button>
              <Button
                variant="contained"
                className="searchButton"
                size="medium"
                style={{
                  position: "absolute",
                  right: "5px",
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
      <section className="whyInfer">
        <Typography variant="h2" align="center">
          Why Infer?
        </Typography>
        <Container>
          <Grid container spacing={1} marginTop={2}>
            {["01", "02", "03", "04"].map((item, index) => (
              <Grid item xs={12} md={4} lg={6} key={index}>
                <div className="whyCard" style={{ width: 390, height: 250 }}>
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
      <section className="faq">
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

export default LandingPage;
