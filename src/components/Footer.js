import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>
        &copy; 2023 Pranav Chahal. 
        <Link to="/me" style={{ marginLeft: '10px' }}>About Me</Link>
      </p>
    </footer>
  );
}

export default Footer;
