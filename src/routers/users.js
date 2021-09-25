import express from 'express'
import {REGISTER, LOGIN, GET} from '../controllers/users.js'

const router = express.Router()


router.post('/register', REGISTER)
      .post('/login', LOGIN)
      .get('/users', GET)



export default router