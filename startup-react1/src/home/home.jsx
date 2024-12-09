import React, { useState, useEffect} from 'react';
import "./home.css";

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = 'api_key_here' //REPLACE WITH WEATHER API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);
  
    return (
      <div className="content">
        <header>
          <h1>PNW Plant Pedia</h1>
          <nav>
            <menu>
              <li><a href="/home">Home</a></li>
              <li><a href="/pedia">Pedia</a></li>
              <li><a href="/saved">Saved</a></li>
              <li><a href="/about">About</a></li>
            </menu>
          </nav>
          <hr />
        </header>
  
        <main>
          <div className="image-scrollbar">
            <img src="images/wooded_path_idiot_creek.jpg" alt="Wilson River Trail" width="400" />
            <img src="images/PXL_20240317_005123194.jpg" alt="Closeup mossy bark" />
            <img src="images/PXL_20240721_040649120.NIGHT.jpg" alt="Ferns" />
            <img src="images/beacon_rock_foresty.jpg" alt="Beacon Rock from Hamilton Mtn" />
            <img src="images/IMG_20230903_143907130~2.jpg" alt="Coastal fern tree" />
            <img src="images/PXL_20240317_000250477.jpg" alt="Coastal Mtn Range Evergreens" />
            <img src="images/PXL_20240317_000903080.jpg" alt="Columbia Gorge from Hamilton Mtn" />
            <img src="images/IMG_20220212_125112778.jpg" alt="Mossy Closeup on Wilson River" />
            <img src="images/PXL_20240319_205830869.jpg" alt="PNW Succulents" />
            <img src="images/PXL_20240723_223025890.jpg" alt="Suspension Bridge waterfall" />
          </div>
          <p><i>Photos by Anna Terry</i></p>
  
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <form method="get" action="/saved" className="mt-5">
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="email" className="form-control" placeholder="your@email.com" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">🔒</span>
                    <input type="password" className="form-control" placeholder="password" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
  
        <footer>
          <hr />
          <span className="text-reset">Anna Terry</span>
          <br />
          <a href="https://github.com/24terryanna/startup_spec">GitHub</a>
        </footer>
      </div>
    );
  };
  
  export default Home;