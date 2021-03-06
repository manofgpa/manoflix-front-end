import React from 'react'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: '#0b2027',
    color: 'white',
    boxShadow: '5px 2px 12px 0px #7f7f7f',
  },
  media: {
    height: 240,
  },
  overview: {
    color: '#ccc',
  },
})

const SingleMovie = ({
  movie: {
    original_title,
    overview,
    backdrop_path,
    vote_average,
    id,
    genre_ids,
  },
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => navigate(`/movie/${id}`)}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          title={original_title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {original_title}
          </Typography>
          <Typography>★ {vote_average}</Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.overview}
            component='p'
          >
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SingleMovie
