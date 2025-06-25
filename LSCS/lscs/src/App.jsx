import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './landingpage'
import Navbar from './navbar'
import BlogPage from './blogPage'
import BlogPost from './blogPost'
import './App.css'

function App() {

  return (<>
  <div className="fixed z-20">
    <Navbar />
  </div>
 
    <LandingPage />

    <BlogPage />
    
  </>);
}

export default App
;