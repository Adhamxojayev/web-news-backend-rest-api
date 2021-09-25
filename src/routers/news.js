import express from 'express'
import {POST,UPDATE, DELETE, GET} from '../controllers/news.js'

const router = express.Router()

router.post('/news', POST)
      .put('/news', UPDATE)
      .delete('/news', DELETE)
      .get('/news', GET)


export default router