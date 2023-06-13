import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div>
      <main role="main">
        <header className="header" role="banner" id="top">
          <div className="header__text-box row">
            <div className="header__text">
              <h1 className="heading-primary">
                <span>Lakindu Rathmanagolla</span>
              </h1>
              <p>
                <span className="role">Front-End Developer</span>
              </p>
              <Link to="/contact" className="btn btn--pink">Get in touch</Link>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}
