import React from "react";
import "../styles/about.css";

function About() {
  // Images
  const topImages = [
    { src: "images/oswest_sunset_evevergreens.jpg", alt: "Image 1" },
    { src: "images/bandon_brush.jpg", alt: "Image 2" },
    { src: "images/oswest_waterfall.jpg", alt: "Image 3" },
  ];

  const bottomImages = [
    { src: "images/chahalem_ridge.jpg", alt: "Image 4" },
    { src: "images/pink_flowers.jpg", alt: "Image 5" },
    { src: "images/oswest_wildflowers.jpg", alt: "Image 6" },
  ];

  return (
    <div>
      <header>
        <h1 className="text-center">Meet the Plants of the PNW!</h1>
        <nav>
          <menu>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pedia">Pedia</Link></li>
            <li><Link to="/saved">Saved</Link></li>
            <li><Link to="/about">About</Link></li>
          </menu>
        </nav>
      </header>

      <main className="container">
        {/* Top Image Gallery */}
        <div className="row">
          {topImages.map((image, index) => (
            <div key={index} className="col-md-4">
              <img src={image.src} alt={image.alt} className="custom-image" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="row text-row">
          <div className="col-md-12">
            <p>
              Pacific Northwest (PNW) Plant Pedia is a space for all those interested in learning more about the primary producers of the
              intricate and complex ecosystem throughout our lush area of the planet!
            </p>
            <p>
              This site is designed to combine the sophistication of an encyclopedia, visual appeal of a photo gallery, and niche botany facts.
              What could get better than that?! So, whether you're born and raised in the PNW or from the other side of the world, welcome!
              Explore our pages of popular PNW plants and don't forget to save your favorites along the way.
            </p>
            <div>
              <div>Your fellow tree huggers,</div>
              <div>PNW Plant Pedia</div>
            </div>
          </div>
        </div>

        {/* Bottom Image Gallery */}
        <div className="row">
          {bottomImages.map((image, index) => (
            <div key={index} className="col-md-4">
              <img src={image.src} alt={image.alt} className="custom-image" />
            </div>
          ))}
          <div className="col-12">
            <p><i>Photos by Anna Terry</i></p>
          </div>
        </div>
      </main>

      <footer className="text-center py-3">
        <hr />
        <span className="text-reset">Anna Terry</span>
        <br />
        <a href="https://github.com/24terryanna/startup_spec">GitHub</a>
      </footer>
    </div>
  );
}

export default About;
