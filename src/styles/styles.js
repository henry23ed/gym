export const styles = {
  // --- Custom Styles (inline JS object for clarity, mix with Bootstrap utility classes) ---

  wrapper: {
  backgroundColor: "#0b0b0b",
  color: "#f0f0f0",
  fontFamily: "'Poppins', 'Segoe UI', sans-serif",
  width: "100%",
  overflowX: "hidden",
},
navbar: {
    backgroundColor: '#000000dd',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #2c2c2c'
  },
  brand: {
  fontWeight: 800,
  letterSpacing: "0.5px",
  fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
  whiteSpace: "normal",
  overflowWrap: "break-word",
  maxWidth: "75%",
},
heroSection: {
    height: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 8vw, 4.5rem)',
    fontWeight: 800,
    marginBottom: '1.5rem',
    textTransform: 'uppercase'
  },
  accent: {
    color: '#E84C3D'  // energetic crimson / vibrant orange-red
  },
  accentText: {
    color: '#E84C3D'
  },
  ctaButton: {
    borderColor: '#E84C3D',
    color: '#E84C3D',
    padding: '12px 32px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'all 0.3s',
    backgroundColor: 'transparent'
  },
  sectionPadding: {
    padding: '80px 0'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.5px'
  },
  subtitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    fontWeight: 600
  },
  text: {
    color: '#cccccc',
    lineHeight: 1.7
  },
  imagePlaceholder: {
    backgroundColor: '#2a2a2a',
    borderRadius: '16px',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E84C3D',
    backgroundImage: 'linear-gradient(45deg, #3a3a3a 25%, #2a2a2a 25%)',
    backgroundSize: '20px 20px'
  },
  placeholderInner: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#aaa'
  },
  table: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    overflow: 'hidden',
    borderColor: '#E84C3D'
  },
  card: {
    backgroundColor: '#151515',
    borderRadius: '20px',
    transition: 'transform 0.2s ease',
    border: '1px solid #2c2c2c'
  },
  price: {
    fontSize: '2.8rem',
    fontWeight: 800,
    margin: '15px 0'
  },
  featureList: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: 2,
    fontSize: '0.9rem'
  },
  accentButton: {
    backgroundColor: '#E84C3D',
    border: 'none',
    padding: '10px 20px',
    fontWeight: 'bold',
    color: '#fff'
  },
  formControl: {
    backgroundColor: '#222',
    border: '1px solid #444',
    color: '#fff'
  },
  contactDetails: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    lineHeight: 1.9
  },
  mapPlaceholder: {
    backgroundColor: '#1e1e1e',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '12px',
    marginBottom: '15px',
    border: '1px dashed #E84C3D'
  },
  footer: {
    backgroundColor: '#030303',
    borderTop: '1px solid #E84C3D',
    color: '#aaa'
  },
  successMsg: {
    backgroundColor: '#1e4d2e',
    color: '#b2ffb0',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  linkAccent: {
    color: '#E84C3D',
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: 0
  }
// Add hover effects dynamically via component or keep in external, but inline styles cover base.
// To ensure button hover and card hover we include a <style> tag in index.html or use className.
// For brevity, we leave hover states to be handled by global css (but inline works). For production, additional <style jsx> could be added.
// --- end

};