import {userRegister, userLogin, usersGet} from '../models/users.js'
import jwt from 'jsonwebtoken'
import {registerJoi} from '../lib/validation.js'


const REGISTER = async (req,res) => {
    try {
        let {error} = registerJoi.validate(req.body)
        if(error){
            throw error
        }
        let user = await userRegister(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'you are registered',
                token: jwt.sign({userId: user.user_id}, 'exam')
            })
        }else throw new Error('there is an error in registration')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            token: null
        })
    }
}

const LOGIN = async (req,res) => {
    try {
        const user = await userLogin(req.body)
        if(user.length){
            res.json({
                status: 200,
                message: 'you have logged in',
                token: jwt.sign({userId: user.user_id}, 'exam')
            })
        }else throw new Error('login or password error')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            token: null
        })
    }
}

const GET = async (req,res) => {
    try {
        let users = await usersGet()
        if(users){
            res.json(users)
        }else throw new Error('users error')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            token: null
        })
    }
}

export {
    REGISTER,
    LOGIN,
    GET
}