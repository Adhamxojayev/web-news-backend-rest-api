import {newsPost,deleteNews,updateNews,getNews} from '../models/news.js'


const POST = async (req,res) => {
    try {
        let news = await newsPost(req.body)
        if(news){
            res.json({
                status: 201,
                message: 'news uploaded',
                data: news
            })
        }else throw new Error('There is an error loading the news')
    } catch (error) {
        res.json({
            status:400,
            message: error.message,
            data: null
        })
    }
}

const DELETE = async (req,res) => {
    try {
        let news = await deleteNews(req.body)
        if(news){
            res.json({
                status: 201,
                message: 'news deleted',
                data: news
            })
        }else throw new Error('There is an error')
    } catch (error) {
        res.json({
            status:400,
            message: error.message,
            data: null
        })
    }
}

const UPDATE = async (req,res) => {
    try {
        let news = await updateNews(req.body)
        if(news.length){
            res.json({
                status: 200,
                message: 'news updated',
                data: news
            })
        }else throw new Error('There is an error')
    } catch (error) {
        res.json({
            status:400,
            message: error.message,
            data: null
        })
    }
}

const GET = async (req,res) => {
    try {
        let news = await getNews()
        if(news){
            res.json(news)
        }else throw new Error('There is an error')
    } catch (error) {
        res.json({
            status:400,
            message: error.message,
            data: null
        })
    }
}


export {
    POST,
    DELETE,
    UPDATE,
    GET
}