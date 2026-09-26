import React from 'react';
import { Download } from 'lucide-react';
import './index.css';

function App() {
  const gdriveLink = "https://drive.google.com/drive/folders/1ooBTGacQnjGl7XdbxSHDoR5CnjjX5H4S?usp=sharing";

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/logo.png" alt="StreamNight Logo" className="nav-logo" />
          <span>StreamNight</span>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-badge">V.0.0.1 BETA</div>
        <h1 className="hero-title">
          Streaming, <span>Redefined.</span>
        </h1>
        <p className="hero-subtitle">
          The ultimate desktop client for movies and shows. Lightning fast, completely ad-free, 
          and designed with a pristine solid aesthetic.
        </p>

        <a href={gdriveLink} target="_blank" rel="noreferrer" className="download-btn">
          <Download size={20} strokeWidth={2.5} />
          Download for Windows
        </a>

        <div className="features-grid">
          <div className="feature-card">
            <img src="/feature-speed.jpg" alt="Performance" className="feature-image" />
            <div className="feature-content">
              <div className="feature-title">Native Performance</div>
              <div className="feature-desc">Built for extreme speed. Enjoy seamless scrolling, instant loading, and smooth playback without heavy browser overhead.</div>
            </div>
          </div>
          <div className="feature-card">
            <img src="/feature-design.jpg" alt="Design" className="feature-image" />
            <div className="feature-content">
              <div className="feature-title">Premium Aesthetics</div>
              <div className="feature-desc">A carefully crafted dark interface featuring high-contrast solid colors, sharp borders, and gorgeous highly-detailed assets.</div>
            </div>
          </div>
          <div className="feature-card">
            <img src="/feature-download.jpg" alt="Downloads" className="feature-image" />
            <div className="feature-content">
              <div className="feature-title">Offline Downloads</div>
              <div className="feature-desc">Download your favorite content with a single click and watch it anytime, anywhere without an internet connection.</div>
            </div>
          </div>
        </div>
      </main>

      <section className="roadmap-section">
        <h2 className="section-title">The Roadmap</h2>
        <div className="timeline">
          
          <div className="timeline-item completed">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="roadmap-status">Completed</span>
              <h3>Desktop Version</h3>
              <p>Windows, Linux, macOS client optimized for large displays and native performance.</p>
            </div>
          </div>

          <div className="timeline-item next">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="roadmap-status">Next Up</span>
              <h3>Mobile App</h3>
              <p>iOS and Android companion app. Sync your watch history and download on the go.</p>
            </div>
          </div>

          <div className="timeline-item planned">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="roadmap-status">Planned</span>
              <h3>Smart TV</h3>
              <p>Native apps for Apple TV, Android TV, Tizen, and WebOS for the ultimate living room experience.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
