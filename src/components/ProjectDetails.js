import React from 'react'
import _ from 'lodash'
import Page from './Page'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Content from '../Content'
import Button from '@material-ui/core/Button'

const Section = ({ title, content }) => {
  const styles = { marginBottom: 16 }
  return (
    <div style={styles}>
      <Typography variant="h6">{title}</Typography>
      <Divider />
      <p>{content}</p>
    </div>
  )
}

const SubSection = ({ content }) => {
  const styles = { marginBottom: 16 }
  return <div style={styles}>{content}</div>
}

const Panel = ({ project, side }) => {
  const styles = { width: '100%', paddingLeft: 16, paddingRight: 16 }
  return (
    <div style={styles}>
      {_.map(Content.Projects[project].DetailsPage[side], (section) => {
        switch (section.type) {
          case 'Section':
            return <Section title={section.title} content={section.content} />
          case 'SubSection':
            return <SubSection content={section.content} />
          case 'Image':
            return (
              <div style={{ width: '100%', textAlign: 'center', marginBottom: 16 }} >
              <img
                style={{ maxWidth: 750, borderRadius: 4, boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.75)' }}
                alt={section.title}
                src={section.src}
              />
              </div>
            )
          case 'Link':
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <hr style={{ width: '25%', height: 2 }} />
                <Button variant="contained" href={section.url} target="_blank">
                  {section.title}
                </Button>
                <hr style={{ width: '25%', height: 2 }} />
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
const Description = ({ project }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'row'
  }
  return (
    <div style={styles}>
      <Panel project={project} side="Left" />
      <Panel project={project} side="Right" />
    </div>
  )
}

const ProjectDetails = ({ project }) => {
  return (
    <Page marginOverride={186}>
      <div style={{ padding: 16 }}>
        <Typography variant="h3">
          {Content.Projects[project].Card.Title}
        </Typography>
        <Divider variant="middle" style={{ marginBottom: 16 }} />
        <Description project={project} />
      </div>
    </Page>
  )
}

export default ProjectDetails
