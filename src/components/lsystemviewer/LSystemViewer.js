import React, { Component, useState } from 'react'
import _ from 'lodash'

import Page from '../Page'
import { Typography, TextField, Paper } from '@material-ui/core'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.currentPos = { x: 1280 / 2, y: 720 / 2 }
    this.deg = 0
    this.grammar = {}
    this.grammar['F'] = this.goForward
    this.grammar['-'] = this.goLeft
    this.grammar['+'] = this.goRight
  }
  componentDidMount() {
    this.context = this.refs.engine.getContext('2d')
    let depthSentence = [...this.props.sentence]
    for (let i = 0; i < this.props.depth; i++) {
      depthSentence = depthSentence.join('').split('')
      for (let j = 0; j < depthSentence.length; j++) {
        if (depthSentence[j] === 'F') {
          depthSentence[j] = this.props.predicate
        }
      }
    }

    this.renderSentence(depthSentence.join(''))
  }

  renderSentence = (sentence) => {
    _.forEach(sentence.split(''), (alpha) => {
      this.grammar[alpha]()
    })
  }

  goForward = () => {
    const { deg } = this
    const { scale } = this.props
    const dirX = Math.cos((deg * Math.PI) / 180)
    const dirY = Math.sin((deg * Math.PI) / 180)
    this.drawLine(dirX * scale, dirY * scale)
  }

  goLeft = () => {
    this.deg -= this.props.angle
  }

  goRight = () => {
    this.deg += this.props.angle
  }

  drawLine = (deltaX, deltaY) => {
    const { context, currentPos } = this
    const { x, y } = currentPos
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + deltaX, y + deltaY)
    context.stroke()
    currentPos.x = x + deltaX
    currentPos.y = y + deltaY
  }
  render() {
    return (
      <Paper>
        <canvas width="1280" height="720" ref="engine" />
      </Paper>
    )
  }
}

const LSystemViewer = () => {
  const [sentence, setSentence] = useState('F--F--F')
  const [predicate, setPredicate] = useState('F+F--F+F')
  const [depth, setDepth] = useState(6)
  const [scale, setScale] = useState(5)
  const [angle, setAngle] = useState(75)

  return (
    <Page marginOverride={210}>
      <Typography variant="h5">L System Viewer</Typography>
      <Graph
        key={sentence + depth + scale + predicate + angle}
        scale={scale}
        depth={depth}
        angle={angle}
        predicate={predicate}
        sentence={sentence}
      />
      <TextField
        value={sentence}
        onChange={(e) => {
          setSentence(e.target.value)
        }}
      />
      <TextField
        value={predicate}
        onChange={(e) => {
          setPredicate(e.target.value)
        }}
      />
      <TextField
        value={depth}
        onChange={(e) => {
          setDepth(e.target.value)
        }}
      />
      <TextField
        value={scale}
        onChange={(e) => {
          setScale(e.target.value)
        }}
      />
      <TextField
        value={angle}
        onChange={(e) => {
          setAngle(e.target.value)
        }}
      />
    </Page>
  )
}

export default LSystemViewer
