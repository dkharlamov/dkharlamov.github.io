import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Left = () => {
  const styles = {
    fontVariant: 'small-caps',
    marginLeft: 16
  }
  return (
    <Typography variant="h5" color="textSecondary" style={styles}>
      Daniel Kharlamov
    </Typography>
  )
}
const Right = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    margin: 8
  }
  return (
    <div style={styles}>
      <Button
        style={{ marginRight: 8 }}
        href="https://www.linkedin.com/in/khar/"
        color="secondary"
        variant="contained"
        target="_blank"
      >
        LinkedIn
      </Button>
      <Button
        color="secondary"
        variant="contained"
        href="https://github.com/dkharlamov"
        target="_blank"
      >
        GitHub
      </Button>
    </div>
  )
}

const Navbar = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
    color: '#eeecec',
    zIndex: 1201
  }
  return (
    <AppBar color="primary" style={styles}>
      <Left />
      <Right />
    </AppBar>
  )
}

export default Navbar
