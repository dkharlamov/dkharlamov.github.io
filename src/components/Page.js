import React from 'react'

const Page = ({ children, centered, marginOverride }) => {
  let styles = {
    marginTop: 52,
    marginLeft: marginOverride || 181
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
