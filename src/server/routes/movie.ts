import express from 'express'
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

let router = express.Router()

router.get('/movies/details/:id', async function(req, res){
  const { id } = req.params
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_TMDB}`
      }
    });

    res.status(200).json({
      rating: response.data.vote_average,
      title: response.data.title,
      description: response.data.overview,
      thumbnail: `https://image.tmdb.org/t/p/original/${response.data.poster_path}`
    })
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }

});

router.get('/movies', async function(_, res){
  if(!process.env.ACCESS_TOKEN_TMDB) return res.status(404).json({ message: 'TMDB ACCESS TOKEN NOT FOUND IN ENV'})
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_TMDB}`
        }
      });
      res.status(200).json({ data: response.data.results })
    } catch {
      res.status(500).json({ message: 'Internal Server Error' })
    }
});

export default router