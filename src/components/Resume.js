import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import pdf from "../assets/Resume/Resume -Karishma Sharma.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export const Resume = () => {

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <section className="resume" id="resume">
      <div>
        <Container fluid className="resume-section">

          <div className="row">
            <div className="col-12">
              <div className="resume-bx wow ">
                <h2>Know more about me ! ✨</h2>
                <p style={{ textAlign: "justify" }}>
                  Hi Everyone, I am <span className="font-color">Karishma Sharma </span>
                  from <span className="font-color"> Dausa,Rajasthan.</span>
                  <br /> I am a final year student pursuing Bachleor's of Engineering in Information Technology
                  at MBM University , Jodhpur.
                  <br />
                  I love to make websites and explore more and more of technology .
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li className="about-activity">
                    Public Speaking
                  </li>
                  <li className="about-activity">
                    Painting
                  </li>
                  <li className="about-activity">
                    Travelling
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <Particle />

          <Row className="resume-btn" style={{ justifyContent: "center", marginTop: "50px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>


        </Container>
      </div>

    </section>
  )
}