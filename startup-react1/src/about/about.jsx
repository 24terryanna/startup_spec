import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import ImageGallery from "../components/ImageGallery";
import "../styles/about.css";

function About() {
  return (
    <div>
      <Header />
      <main className="container">
        <ImageGallery
          images={[
            { src: "images/oswest_sunset_evevergreens.jpg", alt: "Image 1" },
            { src: "images/bandon_brush.jpg", alt: "Image 2" },
            { src: "images/oswest_waterfall.jpg", alt: "Image 3" },
          ]}
        />
        <AboutContent />
        <ImageGallery
          images={[
            { src: "images/chahalem_ridge.jpg", alt: "Image 4" },
            { src: "images/pink_flowers.jpg", alt: "Image 5" },
            { src: "images/oswest_wildflowers.jpg", alt: "Image 6" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default About;
