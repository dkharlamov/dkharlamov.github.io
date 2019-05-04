import React, { useState } from 'react'
import DrawerMUI from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Content from '../Content'

const ProjectsDrawer = ({ isOpen, onProjectSelect }) => {
  const styles = {
    backgroundColor: '#EEE',
    boxShadow: 'inset 0px 4px 8px -6px #000, inset 0px -4px 8px -6px #000'
  }
  return (
    <List className={isOpen ? 'enter.enter-active' : 'enter'} style={styles}>
      {Content.ProjectList.map((project, index) => (
        <ListItem button onClick={() => onProjectSelect(project)} key={project}>
          <ListItemText style={{ paddingLeft: 16 }} primary={project} />
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
        {['About Me', 'Projects', 'Resume'].map((page, index) => {
          const Item = () => (
            <ListItem
              button
              onClick={() => handlePageSelect(page)}
              selected={page === selected}
              key={page}
            >
              <ListItemText style={styles} primary={page} />
            </ListItem>
          )
          if (page === 'Projects' && page === selected) {
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
