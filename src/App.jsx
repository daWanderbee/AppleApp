import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import ModelSwitcher from './components/three/ModelSwitcher';
import ShowCase from './components/ShowCase';
import Performance from './components/Performance';
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
      <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
        <Performance/>
        <Features />
        <Highlights/>
        <Footer/>
      </main>
  )
}

export default App
