import React, { useState } from 'react'
import _ from 'lodash'

import { MuiThemeProvider } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import AboutMe from './components/AboutMe'
import ProjectsPage from './components/ProjectsPage'
import ResumePage from './components/ResumePage'

import ProjectDetails from './components/ProjectDetails'
import Theme from './Theme'

const App = () => {
  const [page, setPage] = useState('About Me')

  const handleSetProject = (project) => {
    setPage('ProjectPages.' + project)
  }

  const Pages = {
    'About Me': <AboutMe onProjectSelect={handleSetProject} />,
    Projects: <ProjectsPage onProjectSelect={handleSetProject} />,
    Resume: <ResumePage />,
    ProjectPages: {
      VRDrive: <ProjectDetails project={'VRDrive'} />,
      Aircycle: <ProjectDetails project={'Aircycle'} />,
      TickTockRay: <ProjectDetails project={'TickTockRay'} />,
      EPortfolio: <ProjectDetails project={'EPortfolio'} />,
      ClamPark: <ProjectDetails project={'ClamPark'} />,
      GameJam: <ProjectDetails project={'GameJam'} />,
    }
  }

  const styles = {}
  return (
    <MuiThemeProvider theme={Theme}>
      <div style={styles}>
        <Navbar />
        <Drawer onPageSelect={setPage} onProjectSelect={handleSetProject} />
        {_.get(Pages, page)}
      </div>
    </MuiThemeProvider>
  )
}

export default App
