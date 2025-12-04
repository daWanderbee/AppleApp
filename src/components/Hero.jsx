import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
        <div>
            <h1>Macbook Pro</h1>
            <p>Supercharged for pros.</p>
            <img src="/title.png" alt="Macbook Pro Title" />
        </div>
          <video src="/videos/hero.mp4" autoPlay muted playsInline></video>

          <button>Buy</button>
          <p>From $1233 or $1433/month for 12 months.</p>
    </section>
  )
}

export default Hero
