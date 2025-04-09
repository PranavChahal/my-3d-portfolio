// src/components/TopPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function TopPage() {
  return (
    <header>
      <h1>Art Gallery - Pranav Chahal</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/me">About Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default TopPage;
