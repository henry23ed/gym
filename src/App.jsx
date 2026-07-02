import React, { useState } from "react";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import { styles } from "./styles/styles";

// Components
import Navigation from "./component/Navbar";
import Hero from "./component/home";
import About from "./component/About";
import Classes from "./component/Classes";
import Pricing from "./component/price";
import Contact from "./component/contact";
import Footer from "./component/Footer";

const App = () => {
  // --- State for Contact Form ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  // --- Smooth Scroll ---
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="main-wrapper" style={styles.wrapper}>
      <Navigation smoothScrollTo={smoothScrollTo} />

      <Hero smoothScrollTo={smoothScrollTo} />

      <About smoothScrollTo={smoothScrollTo} />

     /* <Classes /> */

      <Pricing />

      <Contact
        formData={formData}
        submitted={submitted}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      <Footer />
    </div>
  );
};

export default App;