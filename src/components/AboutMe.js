import React from 'react'
import _ from 'lodash'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Page from './Page'
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
    textAlign: 'center',
    padding: 128
  }
  return (
    <div style={styles}>
      <Typography variant="h3">Daniel Kharlamov</Typography>
      <Typography variant="h6">
        Software Engineer | Web Engineer | Game Developer | Creator
      </Typography>
      <Paper
        style={{
          maxWidth: 524,
          padding: 8,
          marginTop: 32,
          opacity: 0.75
        }}
      >
        <Typography variant="body2">
          {Content.AboutMe.PersonalDescription}
        </Typography>
      </Paper>
    </div>
  )
}

const BottomSection = ({ onProjectSelect }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32
  }
  return (
    <div style={styles}>
      {_.map(['VRDrive', 'Aircycle', 'TickTockRay'], (project) => {
        return (
          <ProjectCard
            key={project}
            style={{ marginTop: 16 }}
            image={Content.Images[project]}
            imageTitle={Content.Projects[project].Card.Title}
            cardTitle={Content.Projects[project].Card.Title}
            cardDescription={Content.Projects[project].Card.Description}
            onMore={() => onProjectSelect(project)}
          />
        )
      })}
    </div>
  )
}
const AboutMe = ({ onProjectSelect }) => {
  return (
    <Page>
      <TopSection />
      <BottomSection onProjectSelect={onProjectSelect} />
    </Page>
  )
}

export default AboutMe
