import React, { useState } from "react";
import "./pedia.css";

const plantsData = [
  {
    category: "Gymnosperms",
    plants: [
      { name: "Douglas Fir", id: "douglas-fir", image: "images/Douglas-fir_britannica.jpg", scientificName: "Pseudotsuga menziesii", credit: "Britannica" },
      { name: "Sitka Spruce", id: "sitka-spruce", image: "images/sitka_spruce_wiki.JPG", scientificName: "Picea sitchensis", credit: "Wikipedia" },
      { name: "Western Red Cedar", id: "western-red-cedar", image: "images/my_west_redcedar.JPG", scientificName: "Thuja plicata", credit: "Anna Terry" },
      { name: "Western Hemlock", id: "western-hemlock", image: "images/Western_Hemlock_OR_encyclo.jpg", scientificName: "Tsuga heterophylla", credit: "Oregon Encyclopedia" },
    ],
  },

  {
    category: "Mosses & Liverworts",
    plants: [
      { name: "Cat-tail Moss", id: "cat-tail-moss", image: "images/my_cat_tail_moss.jpg", scientificName: "Rhytidiadelphus triquetrus", credit: "Anna Terry" },
      { name: "Curly Thatch Moss", id: "curly-thatch-moss", image: "images/my_curly_thatch.jpg", scientificName: "Dicranoweisia cirrata", credit: "Anna Terry" },
      { name: "Juniper Haircap Moss", id: "juniper-haircap-moss", image: "images/new_juniper_haircap_moss_inatural.jpg", scientificName: "Polytrichum juniperinum", credit: "dblanco via iNaturalist" },
      { name: "Oregon Beaked Moss", id: "oregon-beaked-moss", image: "images/my_beaked_moss.jpg", scientificName: "Kindbergia oregana", credit: "Anna Terry" },
    ],
  },

  {
    category: "Angiosperms",
    plants: [
      { name: "Sea Thrift", id: "sea-thrift", image: "images/sea_thrift_adam_schnieder.jpg", scientificName: "Armeria maritima", credit: "Adam Schneider" },
      { name: "Rose Spirea", id: "rose-spirea", image: "images/Spiraea_douglasii_wiki.jpg", scientificName: "Spiraea douglasii", credit: "Wikipedia" },
      { name: "Rhododendron macrophyllum", id: "rhododendron-macrophyllum", image: "images/rhodie_wiki.JPG", scientificName: "Rhododendron macrophyllum", credit: "Wikipedia" },
      { name: "Pacific Bleeding Heart", id: "pacific-bleeding-heart", image: "images/bleeding_heart_wiki.jpg", scientificName: "Dicentra formosa", credit: "Wikipedia" },
    ],
  },

  {
    category: "Gymnosperms",
    plants: [
      { name: "Douglas Fir", id: "douglas-fir", image: "images/Douglas-fir_britannica.jpg", scientificName: "Pseudotsuga menziesii", credit: "Britannica" },
      { name: "Sitka Spruce", id: "sitka-spruce", image: "images/sitka_spruce_wiki.JPG", scientificName: "Picea sitchensis", credit: "Wikipedia" },
      { name: "Western Red Cedar", id: "western-red-cedar", image: "images/my_west_redcedar.JPG", scientificName: "Thuja plicata", credit: "Anna Terry" },
      { name: "Western Hemlock", id: "western-hemlock", image: "images/Western_Hemlock_OR_encyclo.jpg", scientificName: "Tsuga heterophylla", credit: "Oregon Encyclopedia" },
    ],
  },
  // Add similar objects for Mosses & Liverworts, Angiosperms, and Ferns
];

const Pedia = () => {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (plant) => {
    setPopupData(plant);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="content">
      <header>
        <h1 className="text-center">The Plant Encyclopedia</h1>
        <nav>
          <menu>
            <li><a href="/">Home</a></li>
            <li><a href="/pedia">Pedia</a></li>
            <li><a href="/saved">Saved</a></li>
            <li><a href="/about">About</a></li>
          </menu>
        </nav>
      </header>
      <hr />

      {plantsData.map((category) => (
        <section className="plant-category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div className="gallery-item" key={plant.id}>
                <p>{plant.name}</p>
                <button onClick={() => openPopup(plant)}>Facts</button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {popupData && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <img src={popupData.image} alt={popupData.name} />
            <h3>{popupData.name}</h3>
            <p><i>{popupData.scientificName}</i></p>
            <p>Photo credit: {popupData.credit}</p>
          </div>
        </div>
      )}

      <footer className="text-center py-3">
        <hr />
        <span className="text-reset">Anna Terry</span>
        <br />
        <a href="https://github.com/24terryanna/startup_spec">GitHub</a>
      </footer>
    </div>
  );
};

export default Pedia;
