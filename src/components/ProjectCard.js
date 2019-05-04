import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const OverrideStyles = {
  media: {
    objectFit: 'cover'
  }
}

const ProjectCard = ({
  image,
  imageTitle,
  cardTitle,
  cardDescription,
  onMore,
  classes,
  style
}) => {
  return (
    <Card style={{ maxWidth: 448, ...style }}>
      <CardActionArea onClick={onMore}>
        <CardMedia
          component="img"
          height="256"
          className={classes.media}
          image={image}
          title={imageTitle}
          alt={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography component="p">{cardDescription}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={onMore} size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(OverrideStyles)(ProjectCard)
