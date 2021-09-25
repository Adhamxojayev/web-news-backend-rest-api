import express from 'express'
import {POST, GET, PUT, DELETE} from '../controllers/categories.js'


const router = express.Router()

router.post('/categories', POST)
      .get('/categories', GET)
      .put('/categories', PUT)
      .delete('/categories', DELETE)


export default router