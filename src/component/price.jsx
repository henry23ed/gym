import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCrown,
  FaMedal,
  FaStar,
} from "react-icons/fa";
import { styles } from "../styles/styles";

function Pricing() {
  return (
    <section id="pricing" style={styles.sectionPadding}>
      <Container>
        <h2 className="text-center mb-2" style={styles.sectionTitle}>
          Unlock Your <span style={styles.accentText}>Potential</span>
        </h2>

        <p className="text-center mb-5" style={styles.text}>
          Choose a membership that matches your fitness journey.
        </p>

        <Row className="g-4">

          {/* Basic Plan */}
          <Col md={4}>
            <Card bg="dark" text="white" className="h-100 shadow-lg" style={styles.card}>
              <Card.Body>
                <Card.Title className="text-center mb-3">
                  <FaMedal className="me-2 text-warning" />
                  Basic Monthly
                </Card.Title>

                <h2 className="text-center" style={styles.price}>
                  $49<span style={{ fontSize: "1rem" }}>/mo</span>
                </h2>

                <hr style={{ borderColor: styles.accent.color }} />

                <ul style={styles.featureList}>
                  <li><FaCheckCircle className="text-success me-2" /> Full Gym Access (Off-Peak)</li>
                  <li><FaCheckCircle className="text-success me-2" /> Locker Room & Towel Service</li>
                  <li><FaCheckCircle className="text-success me-2" /> Mobile App Workouts</li>
                  <li className="text-muted"><FaTimesCircle className="text-danger me-2" /> No Guest Passes</li>
                  <li className="text-muted"><FaTimesCircle className="text-danger me-2" /> No Group Classes</li>
                </ul>

                <Button variant="outline-light" className="w-100 mt-3">
                  Sign Up
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Premium Plan */}
          <Col md={4}>
            <Card
              bg="dark"
              text="white"
              className="h-100 shadow-lg"
              style={{
                ...styles.card,
                borderTop: `4px solid ${styles.accent.color}`,
                transform: "scale(1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: styles.accent.color,
                  color: "#000",
                  padding: "6px 18px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
              >
                <FaStar className="me-2" />
                BEST VALUE
              </div>

              <Card.Body>
                <Card.Title className="text-center mb-3">
                  <FaCrown className="me-2 text-warning" />
                  Premium Hub Access
                </Card.Title>

                <h2 className="text-center" style={styles.price}>
                  $89<span style={{ fontSize: "1rem" }}>/mo</span>
                </h2>

                <hr style={{ borderColor: styles.accent.color }} />

                <ul style={styles.featureList}>
                  <li><FaCheckCircle className="text-success me-2" /> 24/7 Full Gym Access</li>
                  <li><FaCheckCircle className="text-success me-2" /> Unlimited Group Classes</li>
                  <li><FaCheckCircle className="text-success me-2" /> 1 Personal Training Session</li>
                  <li><FaCheckCircle className="text-success me-2" /> Sauna & Recovery Zone</li>
                  <li><FaCheckCircle className="text-success me-2" /> 2 Guest Passes / Month</li>
                </ul>

                <Button style={{ ...styles.accentButton, width: "100%" }}>
                  Get Premium
                </Button>
              </Card.Body>
            </Card>
          </Col>          {/* Elite VIP */}
          <Col md={4}>
            <Card
              bg="dark"
              text="white"
              className="h-100 shadow-lg"
              style={styles.card}
            >
              <Card.Body>
                <Card.Title className="text-center mb-3">
                  <FaCrown className="me-2 text-warning" />
                  Elite VIP
                </Card.Title>

                <h2 className="text-center" style={styles.price}>
                  $149<span style={{ fontSize: "1rem" }}>/mo</span>
                </h2>

                <hr style={{ borderColor: styles.accent.color }} />

                <ul style={styles.featureList}>
                  <li>
                    <FaCheckCircle className="text-success me-2" />
                    All Premium Features
                  </li>

                  <li>
                    <FaCheckCircle className="text-success me-2" />
                    Weekly Personal Trainer
                  </li>

                  <li>
                    <FaCheckCircle className="text-success me-2" />
                    Nutrition Plan & Check-ins
                  </li>

                  <li>
                    <FaCheckCircle className="text-success me-2" />
                    Juice Bar Credits ($30/mo)
                  </li>

                  <li>
                    <FaCheckCircle className="text-success me-2" />
                    Priority Class Booking
                  </li>
                </ul>

                <Button
                  variant="outline-light"
                  className="w-100 mt-3"
                >
                  Become VIP
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;