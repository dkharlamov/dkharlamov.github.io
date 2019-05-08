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
    justifyContent: 'space-evenly',
    marginBottom: 32
  }
  return (
    <div style={styles}>
      {_.map(Content.ProjectList, (project) => (
        <ProjectCard
          style={{ marginTop: 16 }}
          image={Content.Images[project.name]}
          imageTitle={Content.Projects[project.name].Card.Title}
          cardTitle={Content.Projects[project.name].Card.Title}
          cardDescription={Content.Projects[project.name].Card.Description}
          onMore={() => onProjectSelect(project.name)}
        />
      ))}
    </div>
  )
}

const ProjectsPage = ({ onProjectSelect }) => {
  return (
    <Page marginOverride={186} centered>
      <ProjectGrid onProjectSelect={onProjectSelect} />
    </Page>
  )
}

export default ProjectsPage
