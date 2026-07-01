import Container from "react-bootstrap/Container";
import { styles } from "../styles/styles";

function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <Container className="text-center py-3">
        <small>
          © {new Date().getFullYear()} Lavista Gym and Fitness Hub — Ignite Your Inner Fire. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}

export default Footer;