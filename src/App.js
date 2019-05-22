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
    // 'L-System Viewer': <LSystemViewer />,
    ProjectPages: {
      VRDrive: <ProjectDetails project={'VRDrive'} />,
      Aircycle: <ProjectDetails project={'Aircycle'} />,
      TickTockRay: <ProjectDetails project={'TickTockRay'} />,
      EPortfolio: <ProjectDetails project={'EPortfolio'} />,
      ClamPark: <ProjectDetails project={'ClamPark'} />,
      GameJam: <ProjectDetails project={'GameJam'} />,
      Lift: <ProjectDetails project={'Lift'} />,
      RoboticArm: <ProjectDetails project={'RoboticArm'} />,
      DX11: <ProjectDetails project={'DX11'} />,
      Capstone: <ProjectDetails project={'Capstone'} />
    }
  }
  console.log(page, Pages[page])

  const styles = {}
  const hasProject = page.includes('ProjectPages')
  return (
    <MuiThemeProvider theme={Theme}>
      <div style={styles}>
        <Navbar />
        <Drawer
          key={page}
          currentPage={hasProject ? 'Projects' : page}
          currentProject={hasProject ? page.substr(13, page.length) : ''}
          onPageSelect={setPage}
          onProjectSelect={handleSetProject}
        />
        {_.get(Pages, page)}
      </div>
    </MuiThemeProvider>
  )
}

export default App
