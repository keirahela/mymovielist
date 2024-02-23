import express from 'express'
import fetch from 'node-fetch'
import Request from '../interfaces/Request';

let router = express.Router()

router.get('/movie', async function(req, res){
    const { provider, id, type }: Request = req.body;
  
    if(!provider || !id || !type) return res.status(400).json({ message: "Bad Request", error: "PRM_NOT_FOUND"})
    console.log(provider, id)
    const fetchedData = await fetch(`https://vidsrc.xyz/embed/${type}?${provider}mdb=${id}`)
    const data = fetchedData.body;
    console.log(JSON.parse(data as unknown as string))
    res.status(200).json({ message: "GET Request" })
});

export default router