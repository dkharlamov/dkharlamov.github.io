import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ProjectCard from './ProjectCard'
import Content from '../Content'

const TopSection = () => {
  const styles = {
    backgroundImage: `url(${Content.Images.Bike})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 128
  }
  return (
    <div style={styles}>
      <Typography variant="h3">Daniel Kharlamov</Typography>
      <Typography variant="h6">
        Software Engineer | Web Engineer | Game Developer | Creator
      </Typography>
      <Paper style={{ maxWidth: 524, padding: 8, marginTop: 32 }}>
        {Content.AboutMe.PersonalDescription}
      </Paper>
    </div>
  )
}

const BottomSection = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 32
  }
  return (
    <div style={styles}>
      <ProjectCard
        image={Content.Images.VRDrive}
        imageTitle={Content.Projects.VRDrive.Card.Title}
        cardTitle={Content.Projects.VRDrive.Card.Title}
        cardDescription={Content.Projects.VRDrive.Card.Description}
        onMore={null}
      />
      <ProjectCard
        image={Content.Images.Aircycle}
        imageTitle={Content.Projects.Aircycle.Card.Title}
        cardTitle={Content.Projects.Aircycle.Card.Title}
        cardDescription={Content.Projects.Aircycle.Card.Description}
        onMore={null}
      />
      <ProjectCard
        image={Content.Images.TickTockRay}
        imageTitle={Content.Projects.TickTockRay.Card.Title}
        cardTitle={Content.Projects.TickTockRay.Card.Title}
        cardDescription={Content.Projects.TickTockRay.Card.Description}
        onMore={null}
      />
    </div>
  )
}
const AboutMe = () => {
  const styles = {
    marginTop: 52,
    marginLeft: 145
  }
  return (
    <div style={styles}>
      <TopSection />
      <BottomSection />
    </div>
  )
}

export default AboutMe
