import React, { useState } from 'react'
import DrawerMUI from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ProjectsDrawer = ({ isOpen }) => {
  const styles = {
    backgroundColor: '#EEE',
    boxShadow: 'inset 0px 4px 8px -6px #000, inset 0px -4px 8px -6px #000'
  }
  return (
    <List className={isOpen ? 'enter.enter-active' : 'enter'} style={styles}>
      {['VR Drive', 'Aircycle', 'Research'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText style={{ paddingLeft: 16 }} primary={text} />
        </ListItem>
      ))}
    </List>
  )
}

const Drawer = () => {
  const [selected, setSelected] = useState('About Me')
  const styles = {
    minWidth: 96
  }
  const topBarMargin = {
    marginTop: 52
  }
  return (
    <DrawerMUI variant="permanent">
      <div style={topBarMargin} />
      <List>
        {['About Me', 'Projects', 'Resume'].map((text, index) => {
          const Item = () => (
            <ListItem
              button
              onClick={() => setSelected(text)}
              selected={text === selected}
              key={text}
            >
              <ListItemText style={styles} primary={text} />
            </ListItem>
          )
          if (text === 'Projects' && text === selected) {
            return (
              <div>
                <Item />
                <ProjectsDrawer />
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
