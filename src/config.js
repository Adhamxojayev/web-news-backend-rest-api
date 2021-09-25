const PORT = process.env.PORT ?? 5000
const host = 'localhost'

import path from 'path'
import dotenv from 'dotenv'

dotenv.config({path: path.join(process.cwd(), 'src', '.env')})


const pgConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}




export {
    PORT,
    host,
    pgConfig
}