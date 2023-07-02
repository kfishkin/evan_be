import express, {json, Router, urlencoded} from 'express'
import serverless from 'serverless-http'
const api = express()
const router = Router()
api.use(json())
api.use(urlencoded({
  extended: true
}))
router.get('/hello', (req, res) => res.send('Hello World!'))
api.use('/api/', router)
export const handler = serverless(api)
