import {categoriesPost,categoryGet,updateCategory,deleteCategory} from '../models/categories.js'



const POST = async (req,res) => {
    try {
        
        let post = await categoriesPost(req.body)

        if(post){
            res.json({
                status: 201,
                message: 'categories added',
                data: post
            })
        }else throw new Error('There is an error adding categories')
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
        
        let category = await categoryGet(req.query)
        if(category){
            res.json(category)
        }
        else throw new Error('such a category does not exist')
    } catch (error) {
        res.json({
            status:400,
            message: error.message,
            data: null
        })
    }
}

const PUT = async (req,res) => {
    try {
        
        let category = await updateCategory(req.body)
        if(category){
            res.json({
                status:200,
                message: 'the category updated',
                data: category
            })
        }else throw new Error('such a category does not exist')
    } catch (error) {
        res.json({
            status:400,
            message: error,
            data: null
        })
    }
}

const DELETE = async (req,res) => {
    try {
        let category = await deleteCategory(req.body)
        if(category){
            res.json({
                status:400,
                message: error,
                data: category
            })
        }else throw new Error('such a category does not exist')
    } catch (error) {
        res.json({
            status:400,
            message: error,
            data: null
        })
    }
}

export {
    POST,
    GET,
    PUT,
    DELETE
}