import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaPaperPlane,
  FaClock,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { styles } from "../styles/styles";

function Contact({ formData, submitted, handleInputChange, handleSubmit }) {
  return (
    <section
      id="contact"
      style={{ ...styles.sectionPadding, backgroundColor: "#0a0a0a" }}
    >
      <Container>
        <Row className="g-5">
          {/* Left Column */}
          <Col lg={6}>
            <h3 style={styles.sectionTitle}>
              Get In <span style={styles.accentText}>Touch</span>
            </h3>

            <div style={styles.contactDetails}>
              <p>
                <FaMapMarkerAlt
                  className="me-2"
                  style={{ color: styles.accent.color }}
                />
                123 Fitness Avenue, Downtown Metropolis
              </p>

              <p>
                <FaPhoneAlt
                  className="me-2"
                  style={{ color: styles.accent.color }}
                />
                +1 (800) 555-7788
              </p>

              <p>
                <FaEnvelope
                  className="me-2"
                  style={{ color: styles.accent.color }}
                />
                hello@lavistagym.com
              </p>
            </div>

            <hr style={{ borderColor: "#333" }} />

            <h4 style={styles.subtitle}>Send us a quick message</h4>

            {submitted && (
              <div style={styles.successMsg}>
                <FaCheckCircle
                  className="me-2"
                  style={{ color: "#28a745" }}
                />
                Message received! We'll contact you soon.
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={styles.formControl}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={styles.formControl}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={styles.formControl}
                />
              </Form.Group>

              <Button type="submit" style={styles.accentButton}>
                <FaPaperPlane className="me-2" />
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <Card
              bg="dark"
              text="white"
              className="h-100"
              style={styles.card}
            >
              <Card.Header
                as="h5"
                style={{
                  backgroundColor: "#1f1f1f",
                  borderBottom: `2px solid ${styles.accent.color}`,
                }}
              >
                <FaMapMarkerAlt className="me-2" />
                Visit Us
              </Card.Header>

              <Card.Body>
                <div style={styles.mapPlaceholder}>
                  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4294859721194!2d6.97847779701466!3d4.867483441899256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d15c263c7bfb%3A0x15200da859375c4!2sLavista%20gym%20and%20fitness%20hub!5e0!3m2!1sen!2sng!4v1782849284418!5m2!1sen!2sng"
  width="100%"
  height="320"
  style={{
    border: 0,
    borderRadius: "15px",
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Lavista Gym Location"
/>

                  <h5>Google Maps Location</h5>

                  <p className="text-muted">
                    Replace this placeholder with your embedded Google Map.
                  </p>

                  <div
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "15px",
                      color: "#ccc",
                    }}
                  >
                    123 Fitness Avenue
                    <br />
                    Open 24/7 for Premium Members
                  </div>
                </div>

                <hr />

                <h6 style={styles.accentText}>
                  <FaClock className="me-2" />
                  Club Operating Hours
                </h6>

                <p>
                  Mon – Fri: 4:30 AM – 11:00 PM
                  <br />
                  Sat – Sun: 6:00 AM – 9:00 PM
                  <br />
                  Premium Members enjoy 24/7 keycard access.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;