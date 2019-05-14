import React, { useState } from 'react'
import _ from 'lodash'
import DrawerMUI from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Content from '../Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectsDrawer = ({ isOpen, onProjectSelect, currentProject }) => {
  const [selected, setSelected] = useState(currentProject)

  const handleProjectSelect = (project) => {
    setSelected(project)
    onProjectSelect(project)
  }

  const styles = {
    backgroundColor: '#EEE',
    boxShadow: 'inset 0px 4px 8px -6px #000, inset 0px -4px 8px -6px #000'
  }
  return (
    <List className={isOpen ? 'enter.enter-active' : 'enter'} style={styles}>
      {_.map(Content.ProjectList, (project, index) => (
        <ListItem
          button
          onClick={() => handleProjectSelect(project.name)}
          selected={project.name === selected}
          key={project.name}
        >
          <FontAwesomeIcon icon={project.icon} fixedWidth />
          <ListItemText style={{ paddingLeft: 16 }} primary={project.name} />
        </ListItem>
      ))}
    </List>
  )
}

const Drawer = ({ onPageSelect, onProjectSelect, currentPage, currentProject }) => {
  const [selected, setSelected] = useState(currentPage)
  // updator required to remount the imbeded drawer correctly
  const [updator, incrementUpdator] = useState(0)
  const styles = {
    minWidth: 96
  }
  const topBarMargin = {
    marginTop: 52
  }

  const handlePageSelect = (page) => {
    setSelected(page)
    onPageSelect(page)
    incrementUpdator(updator + 1)
  }

  return (
    <DrawerMUI variant="permanent">
      <div style={topBarMargin} />
      <List>
        {_.map(Content.Pages, (page) => {
          const Item = () => (
            <ListItem
              button
              onClick={() => handlePageSelect(page.name)}
              selected={page.name === selected}
              key={page.name}
            >
              <FontAwesomeIcon icon={page.icon} fixedWidth />
              <ListItemText style={styles} primary={page.name} />
            </ListItem>
          )
          if (page.name === 'Projects' && page.name === selected) {
            return (
              <div key={page.name}>
                <Item />
                <ProjectsDrawer key={updator} currentProject={currentProject} onProjectSelect={onProjectSelect} />
              </div>
            )
          }
          return <Item  key={page.name}/>
        })}
      </List>
    </DrawerMUI>
  )
}

export default Drawer
