import React from 'react'

const Page = ({ children, centered }) => {
  let styles = {
    marginTop: 52,
    marginLeft: 145
  }
  if (centered) {
    const centering = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    styles = { ...styles, ...centering }
  }
  return <div style={styles}>{children}</div>
}

export default Page
