import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import movieRoutes from './routes/movie'
import loginRoute from "./routes/login"
import discordRoute from "./routes/discord"
export const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', movieRoutes)
app.use('/api', loginRoute)
app.use('/api', discordRoute)

if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist'
    app.use(express.static(frontendFiles))
    app.get('/*', (_, res) => {
      res.send(frontendFiles + '/index.html')
    })
    app.listen(process.env['PORT'])
}
  