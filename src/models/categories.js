import db from '../lib/postgres.js'

const POST = `
    insert into categories(
        category_name,
        lang_id
    ) values ($1, $2)
    returning *
`

const GET = `
    select
        * 
    from categories s
    where 
        case
            when $1 > 0 then s.lang_id = $1
            else true
        end

`

const PUT = `
    update categories set
        category_name = $2
    where 
        category_id = $1
    returning *
`

const DELETE = `
    delete from categories
    where category_id = $1
    returning *
`

const categoriesPost = ({category_name, lang_id}) => {
    try {
        return db(POST, [category_name, lang_id])
    } catch (error) {
        console.log(error);
    }
}

const categoryGet = ({langId = 0}) => {
    try {
        
        return db(GET, [langId])

    } catch (error) {
        console.log(error);
    }
}

const updateCategory = ({category_id, category_name}) => {
    try {
        return db(PUT, [category_id, category_name])
    } catch (error) {
        console.log(error);
    }
}

const deleteCategory = ({category_id}) => {
    try {
        return db(DELETE, [category_id])
    } catch (error) {
        console.log(error);
    }
}

export {
    categoriesPost,
    categoryGet,
    updateCategory,
    deleteCategory
}