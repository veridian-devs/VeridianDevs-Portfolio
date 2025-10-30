import './styles/app.scss';
import bgVideo from './assets/bg.mp4';
import About from './pages/About';
import Works from './pages/Works';
import Comparision from './pages/Comparision';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Team from './pages/Team';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="70"
            zoomAndPan="magnify"
            viewBox="0 0 350 350"
            height="70"
            preserveAspectRatio="xMidYMid meet"
            version="1.2"
        >
            <defs>
            <clipPath id="03b3bdc84e">
                <path d="M 112.5 117.855469 L 262.5 117.855469 L 262.5 234.105469 L 112.5 234.105469 Z M 112.5 117.855469 " />
            </clipPath>
            </defs>
            <g id="5bc1b15809">
            <g clipRule="nonzero" clipPath="url(#03b3bdc84e)">
                <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 205.777344 117.867188 L 133.964844 117.867188 L 145.195312 140.894531 L 112.5 140.820312 L 158.03125 234.082031 L 204.269531 140.832031 L 233.804688 140.699219 L 189.460938 231.183594 L 205.773438 231.183594 C 237.078125 231.183594 262.503906 205.914062 262.503906 174.613281 C 262.507812 143.3125 237.078125 117.867188 205.777344 117.867188 Z M 158.054688 223.460938 L 120.042969 145.558594 L 144.347656 145.625 L 170.445312 198.480469 Z M 158.054688 223.460938 "
                />
            </g>
            </g>
        </svg>
    );
};

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main>
      <header>
        <nav>
          <div><Logo /><h1>Veridian Devs</h1></div>
          <ul>
            <li>Services</li>
            <li>Benefits</li>
            <li>Comparison</li>
          </ul>
          <button className='cta-nav-btn'>Chat Now</button>
            <IoMenu height={50} width={50} color='white'
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </nav>
        <ul className={`${isMenuOpen ? 'active' : ''}`}>
            {/* Add onClick to links to close menu on selection */}
            <li onClick={closeMenu}>Services</li>
            <li onClick={closeMenu}>Benefits</li>
            <li onClick={closeMenu}>Comparison</li>
          </ul>
      </header>
      <section className="section-hero">
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="video-overlay">
          <h1>We don't just <span>launch sites,</span><br /> We <span>launch legacies.</span></h1>
          <p>A website is an expense. A market-leading digital platform is an investment. We only build the latter.</p>
          <button className='cta-hero-btn'>Chat Now</button>
        </div>
      </section>
      <About />
      <Works />
      <Comparision />
      <Services />
      <Team />
      <Footer />
    </main>
  )
}
