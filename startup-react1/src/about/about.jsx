import React from "react";
import "./about.css";

export function About(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch('/api/quote')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.data.quote);
        setQuoteAuthor(data.data.author);
      })
      .catch((error) => {
        console.error('Error fetching the quote:', error);
        setQuote('Error loading quote.');
        setQuoteAuthor('');
    });
  }, []);


// const About = () => {
  return (
    <div className="about-content">
      <header>
        <h1 className="text-center">Meet the Plants of the PNW!</h1>
        <nav>
          <menu>
            <li><a href="/home">Home</a></li>
            <li><a href="/pedia">Pedia</a></li>
            <li><a href="/saved">Saved</a></li>
            <li><a href="/about">About</a></li>
          </menu>
        </nav>
      </header>

      <div className="container">
        {/* Top row of images */}
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/oswest_sunset_evevergreens.jpg"
              alt="Image 1"
              className="custom-image"
            />
          </div>
          <div className="col-md-4">
            <img src="images/bandon_brush.jpg" alt="Image 2" className="custom-image" />
          </div>
          <div className="col-md-4">
            <img src="images/oswest_waterfall.jpg" alt="Image 3" className="custom-image" />
          </div>
        </div>

        {/* Text section */}
        <div className="row text-row">
          <div className="col-md-12">
            <p>
              Pacific Northwest (PNW) Plant Pedia is a space for all those interested in learning more about the primary
              producers of the intricate and complex ecosystem throughout our lush area of the planet!
            </p>

            <p>
              This site is designed to combine the sophistication of an encyclopedia, visual appeal of a photo gallery, and
              niche botany facts. What could get better than that?! So, whether you're born and raised in the PNW or from the
              other side of the world, welcome! Explore our pages of popular PNW plants and don't forget to save your
              favorites along the way.
            </p>

            <div>
              <div>Your fellow tree huggers,</div>
              <div>PNW Plant Pedia</div>
            </div>
          
          {/*quote box */}
          <div className='quote-box bg-light text-dark'>
            <p className='quote'>{quote}</p>
            <p className='author'>{quoteAuthor}</p>
          </div>
          </div>
        </div>

        {/* Bottom row of images */}
        <div className="row">
          <div className="col-md-4">
            <img src="images/chahalem_ridge.jpg" alt="Image 5" className="custom-image" />
          </div>
          <div className="col-md-4">
            <img src="images/pink_flowers.jpg" alt="Image 4" className="custom-image" />
          </div>
          <div className="col-md-4">
            <img src="images/oswest_wildflowers.jpg" alt="Image 6" className="custom-image" />
          </div>
          <div>
            <p><i>Photos by Anna Terry</i></p>
          </div>
        </div>
        
      </div>

      <footer className="text-center py-3">
        <hr />
        <span className="text-reset">Anna Terry</span>
        <br />
        <a href="https://github.com/24terryanna/startup_spec">GitHub</a>
      </footer>
    </div>
    );
};

export default About;
