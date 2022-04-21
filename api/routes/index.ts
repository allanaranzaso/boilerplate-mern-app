import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

// Check if we're in development, loads .env file
if (process.env.NODE_ENV === 'development') {
  dotenv.config()
}

/**
 * Creates express server instance
 */
const app: Express = express()
const PORT: string | undefined = process.env.PORT

/**
 * This tells Express where the files to be served are located
 */
// app.use( express.static(path.join(__dirname, '../../client/build')) )


/* GET home page. */
app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Express' });
  // res.send('Express + TS Serverrrrr')
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

/**
 * Serves the index.html file in the build folder from client
 */
// app.get('*', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// })

module.exports = app
