import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'

export const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/movie', async (req, res) => {
  const { provider, id } = req.body;
  
  if(!provider || !id) return res.status(400).json({ message: "Bad Request", error: "PRM_NOT_FOUND"})
  console.log(provider, id)
  const fetchedData = await fetch('https://vidsrc.xyz/embed/movie?imdb=tt5433140')
  const data = fetchedData.body;
  console.log(JSON.parse(data as unknown as string))
    res.status(200).json({ message: "GET Request" })
})

if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist'
    app.use(express.static(frontendFiles))
    app.get('/*', (_, res) => {
      res.send(frontendFiles + '/index.html')
    })
    app.listen(process.env['PORT'])
}
  