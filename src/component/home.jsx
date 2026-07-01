import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaFire } from "react-icons/fa";
import { styles } from "../styles/styles";

function Hero({ smoothScrollTo }) {
  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.heroOverlay}>
        <Container className="h-100 d-flex align-items-center justify-content-center text-center">
          <div>
            <h1 style={styles.heroTitle}>
              Transform Your Body,{" "}
              <span style={styles.accentText}>
                Elevate Your Life.
              </span>
            </h1>

            <Button
              variant="outline-light"
              size="lg"
              style={styles.ctaButton}
              onClick={() => smoothScrollTo("pricing")}
            >
              <FaFire className="me-2" />
              Join Now
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;