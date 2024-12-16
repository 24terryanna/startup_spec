import React from 'react';
import './saved.css';

function Saved() {
  return (
    <div>
      <header>
        <h1 className="text-center">Your Saved Plants</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pedia">Pedia</a></li>
            <li><a href="/saved">Saved</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <section>
          <ul>
            {/* Dynamic content for saved plants can be rendered here */}
            {/* Example:
            savedPlants.map((plant) => (
              <li key={plant.id}>
                <a href={`/pedia/${plant.id}`}>{plant.name}</a>
              </li>
            )) */}
          </ul>
        </section>
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

export default Saved;
