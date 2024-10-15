import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <div style={styles.section}>
          <h2><b>Contact</b></h2>
          <p>Email: info@reactjobs.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div style={styles.section}>
          <h2><b>Follow Us</b></h2>
          <ul style={styles.socialLinks}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>© {new Date().getFullYear()} React Jobs. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#483ccc',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  section: {
    margin: '10px',
    minWidth: '200px',
  },
  socialLinks: {
    listStyleType: 'none',
    padding: 0,
  },
  copyright: {
    marginTop: '20px',
    fontSize: '14px',
  },
};

export default Footer;

