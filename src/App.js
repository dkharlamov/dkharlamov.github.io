import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import AboutMe from './components/AboutMe'

const App = () => {
  const styles = {}

  return (
    <div style={styles}>
      <Navbar />
      <Drawer />
      <AboutMe />
    </div>
  )
}

export default App
