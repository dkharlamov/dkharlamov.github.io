import React from 'react'
import _ from 'lodash'
import Page from './Page'
import ProjectCard from './ProjectCard'
import Content from '../Content'

const ProjectGrid = ({ onProjectSelect }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
  return (
    <div style={styles}>
      {_.map(Content.ProjectList, (project) => (
        <ProjectCard
          style={{ marginTop: 16 }}
          image={Content.Images[project]}
          imageTitle={Content.Projects[project].Card.Title}
          cardTitle={Content.Projects[project].Card.Title}
          cardDescription={Content.Projects[project].Card.Description}
          onMore={() => onProjectSelect(project)}
        />
      ))}
    </div>
  )
}

const ProjectsPage = ({ onProjectSelect }) => {
  return (
    <Page centered>
      <ProjectGrid onProjectSelect={onProjectSelect} />
    </Page>
  )
}

export default ProjectsPage
