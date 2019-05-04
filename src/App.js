import React, { useState } from 'react'
import _ from 'lodash'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import AboutMe from './components/AboutMe'
import ProjectsPage from './components/ProjectsPage'
import ResumePage from './components/ResumePage'

import VRDrive from './components/ProjectPages/VRDrive'

const App = () => {
  const [page, setPage] = useState('About Me')

  const handleSetProject = (project) => {
    setPage('ProjectPages.' + project)
  }

  const Pages = {
    'About Me': <AboutMe />,
    Projects: <ProjectsPage onProjectSelect={handleSetProject} />,
    Resume: <ResumePage />,
    ProjectPages: {
      VRDrive: <VRDrive />
    }
  }

  const styles = {}
  return (
    <div style={styles}>
      <Navbar />
      <Drawer onPageSelect={setPage} onProjectSelect={handleSetProject} />
      {_.get(Pages, page)}
    </div>
  )
}

export default App
