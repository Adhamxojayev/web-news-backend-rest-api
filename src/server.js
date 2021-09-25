import express from 'express'
import { PORT, host } from './config.js'
import usersRouter from './routers/users.js'
import categoryRouter from './routers/categories.js'
import newsRouter from './routers/news.js'

const app = express()

app.use(express.json())

app.use(usersRouter)
app.use(categoryRouter)
app.use(newsRouter)




app.listen(PORT, () => {console.log(`server http://${host}:${PORT}`)})