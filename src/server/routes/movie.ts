import express from 'express'
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

let router = express.Router()

router.get('/movies', async function(_, res){
    const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_TMDB}`
        }
    });
    res.status(200).json({ data: response.data.results })
});

export default router