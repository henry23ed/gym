import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import {
  FaClock,
  FaDumbbell,
  FaFire,
  FaHandRock,
  FaSpa,
  FaHeart,
} from "react-icons/fa";
import { styles } from "../styles/styles";

function Classes() {
  return (
    <section
      id="classes"
      style={{ ...styles.sectionPadding, backgroundColor: "#111" }}
    >
      <Container>
        <h2 className="text-center mb-4" style={styles.sectionTitle}>
          <FaClock
            className="me-2"
            style={{ color: styles.accent.color }}
          />
          Class <span style={styles.accentText}>Schedule</span>
        </h2>

        <p className="text-center mb-5" style={styles.text}>
          Push your limits with our dynamic classes designed for every fitness
          level.
        </p>

        <Table
          responsive
          bordered
          hover
          variant="dark"
          className="align-middle text-center shadow-lg rounded overflow-hidden"
          style={styles.table}
        >
          <thead>
            <tr
              style={{
                borderBottom: `2px solid ${styles.accent.color}`,
              }}
            >
              <th>Class Type</th>
              <th>Monday</th>
              <th>Wednesday</th>
              <th>Friday</th>
              <th>Weekend</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="fw-semibold text-warning">
                <FaDumbbell className="me-2" />
                Strength Training
              </td>
              <td>7:00 AM</td>
              <td>7:00 AM</td>
              <td>5:30 PM</td>
              <td>9:00 AM (Sat)</td>
            </tr>

            <tr>
              <td className="fw-semibold text-warning">
                <FaFire className="me-2" />
                HIIT
              </td>
              <td>6:00 PM</td>
              <td>6:00 PM</td>
              <td>6:00 AM</td>
              <td>10:00 AM (Sun)</td>
            </tr>

            <tr>
              <td className="fw-semibold text-warning">
                <FaHandRock className="me-2" />
                Boxing
              </td>
              <td>5:30 PM</td>
              <td>—</td>
              <td>5:30 PM</td>
              <td>11:00 AM (Sat)</td>
            </tr>

            <tr>
              <td className="fw-semibold text-warning">
                <FaSpa className="me-2" />
                Yoga & Mobility
              </td>
              <td>8:00 AM</td>
              <td>8:00 AM</td>
              <td>8:00 AM</td>
              <td>8:30 AM (Sun)</td>
            </tr>

            <tr>
              <td className="fw-semibold text-warning">
                <FaHeart className="me-2" />
                Cardio Burn
              </td>
              <td>12:00 PM</td>
              <td>12:00 PM</td>
              <td>12:00 PM</td>
              <td>9:30 AM (Sat)</td>
            </tr>
          </tbody>
        </Table>

        <p
          className="text-center mt-4"
          style={{
            color: "#bdbdbd",
            fontStyle: "italic",
          }}
        >
          Schedule is updated monthly. Beginners and experienced athletes are
          welcome.
        </p>
      </Container>
    </section>
  );
}

export default Classes;