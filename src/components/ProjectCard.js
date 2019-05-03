import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const ProjectCard = ({
  image,
  imageTitle,
  cardTitle,
  cardDescription,
  onMore
}) => {
  return (
    <Card style={{ maxWidth: 448 }}>
      <CardActionArea onClick={onMore}>
        <CardMedia
          height={243}
          component="img"
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

export default ProjectCard
