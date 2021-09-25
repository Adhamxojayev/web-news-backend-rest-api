import Joi from 'joi'

const registerJoi = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).min(4).required(),
    password: Joi.string().min(8).alphanum(),
    specialist: Joi.string().min(1).required()
})


export {
    registerJoi
}