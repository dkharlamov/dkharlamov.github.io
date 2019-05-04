import React from 'react'

const ResumeView = () => {
  const styles = {
    width: '-webkit-fill-available',
    height: '-webkit-fill-available'
  }
  return (
    <object
      style={styles}
      id="pdfview"
      alt="Daniel Kharlamov's Resume"
      aria-label="Daniel Kharlamov's Resume"
      data={require('../static/docs/dkharlamov19resume.pdf')}
    />
  )
}

export default ResumeView
