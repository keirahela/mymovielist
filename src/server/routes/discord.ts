import express from 'express'
import axios from 'axios';
import dotenv from 'dotenv'
import discordMiddleware from '../middlewares/discord'
dotenv.config()

const router = express.Router()

router.get('/discord/verify-discord/:token', discordMiddleware, async function(req, res){
  const { token } = req.params // always exists due to middleware
  try {
    // api call with token to discord
    console.log(token)
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }

});

export default router