import React, { useState } from 'react'
import _ from 'lodash'
import DrawerMUI from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Content from '../Content'
import { ListItemIcon } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectsDrawer = ({ isOpen, onProjectSelect }) => {
  const styles = {
    backgroundColor: '#EEE',
    boxShadow: 'inset 0px 4px 8px -6px #000, inset 0px -4px 8px -6px #000'
  }
  return (
    <List className={isOpen ? 'enter.enter-active' : 'enter'} style={styles}>
      {_.map(Content.ProjectList, (project, index) => (
        <ListItem
          button
          onClick={() => onProjectSelect(project.name)}
          key={project.name}
        >
          <FontAwesomeIcon icon={project.icon} fixedWidth />
          <ListItemText style={{ paddingLeft: 16 }} primary={project.name} />
        </ListItem>
      ))}
    </List>
  )
}

const Drawer = ({ onPageSelect, onProjectSelect }) => {
  const [selected, setSelected] = useState('About Me')
  const styles = {
    minWidth: 96
  }
  const topBarMargin = {
    marginTop: 52
  }

  const handlePageSelect = (page) => {
    setSelected(page)
    onPageSelect(page)
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
              <div>
                <Item />
                <ProjectsDrawer onProjectSelect={onProjectSelect} />
              </div>
            )
          }
          return <Item />
        })}
      </List>
    </DrawerMUI>
  )
}

export default Drawer
