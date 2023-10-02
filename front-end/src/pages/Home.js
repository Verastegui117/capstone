import React from 'react';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Herbal Remedies</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Discover the Power of Natural Healing</h2>
          <p>Explore our collection of herbal remedies to improve your health and well-being.</p>
        </section>
        <section className="featured-remedies">
          <h2>Featured Remedies</h2>
          {/* Add featured herbal remedies here */}
        </section>
      </main>
    </div>
  );
}

export default Home;
