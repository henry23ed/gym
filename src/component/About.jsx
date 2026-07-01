import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { styles } from "../styles/styles";

function About({ smoothScrollTo }) {
  return (
    <section id="about" style={styles.sectionPadding}>
      {/* 3. ABOUT US SECTION - Two Column Layout */}
      <Container>
        <h2 className="text-center mb-5" style={styles.sectionTitle}>
          About <span style={styles.accentText}>Us</span>
        </h2>

        <Row className="align-items-center g-5">
          <Col md={6}>
            <div>
              <h3 style={styles.subtitle}>Where Champions Are Forged</h3>

              <p style={styles.text}>
                At Lavista Gym and Fitness Hub, we don't just build bodies — we
                build discipline, resilience, and community. Our premium
                facility spans over 20,000 sq ft, featuring cutting-edge
                equipment, a dedicated functional training zone, and elite
                recovery suites.
              </p>

              <p style={styles.text}>
                Led by world-class certified trainers, we offer personalized
                coaching and a motivating atmosphere for all levels — from
                beginners to professional athletes.
              </p>

              <Button
                variant="link"
                style={styles.linkAccent}
                onClick={() => smoothScrollTo("contact")}
              >
                Meet Our Trainers →
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <Carousel
              fade
              controls={false}
              indicators={true}
              interval={3000}
              pause={false}
              className="shadow-lg rounded overflow-hidden"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/unnamed(1).jpg"
                  alt="Gym Interior"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/unnamed(2).jpg"
                  alt="Workout Area"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/unnamed(3).jpg"
                  alt="Fitness Equipment"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/gym4.jpg"
                  alt="Personal Training"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;