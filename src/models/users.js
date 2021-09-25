import db from '../lib/postgres.js'

const REGISTER = `
    insert into users(
        first_name,
        last_name,
        email,
        password,
        specialist
    )values ($1, $2, $3, $4, $5)
    returning *
`
const LOGIN = `
    select 
        *
    from users u
    where
        case
            when u.password = $1 and u.email = $2 then true
            else false
        end
`
const USERS_GET = `
    select * from users
`

const userRegister = ({first_name, last_name, email, password, specialist}) => {
    try {
        return db(REGISTER, [first_name, last_name, email, password, specialist])
    } catch (error) {
        throw error
    }
}

const userLogin = ({password, email}) => {
    try {
        return db(LOGIN, [password, email])
    } catch (error) {
        throw error
    }
}

const usersGet = () => {
    try {
        return db(USERS_GET)
    } catch (error) {
        console.log(error);
    }
}

export {
    userRegister,
    userLogin,
    usersGet
}