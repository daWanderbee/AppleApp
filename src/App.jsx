import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import ModelSwitcher from './components/three/ModelSwitcher';
import ShowCase from './components/ShowCase';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
      <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
      </main>
  )
}

export default App
