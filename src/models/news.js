import db from '../lib/postgres.js'



const NEWS_POST = `
    insert into news (
        news_title, 
        news_body, 
        category_id, 
        author_id, 
        lang_id
    ) values ($1, $2, $3, $4, $5)
    returning *
`

const DELETE_NEWS = `
    delete from news 
    where news_id = $1
    returning *
`

const UPDATE_NEWS = `
    with  old_news as (
        select 
            news_id,
            news_title,
            news_body,
            author_id,
            views
        from news where news_id = $1
    )update news n set
    views = case
            when $5 then o.views + 1
            else o.views
        end
    ,
    news_title = 
        case
            when length($2) > 0 then $2
            else o.news_title
        end
    ,
    news_body = 
        case
            when length($3) > 0 then $3
            else o.news_body
        end
    ,
    author_id = 
        case
            when $4 > 0 then $4
            else o.author_id
        end
    
    from old_news o
    where n.news_id = $1
    returning n.*
`
const GET_NEWS = `
    select * from news
`

const newsPost = ({news_title, news_body, category_id, author_id, lang_id}) => {
    try {
        return db(NEWS_POST,[news_title, news_body, category_id, author_id, lang_id])
    } catch (error) {
        console.log(error);
    }
}

const deleteNews = ({news_id}) => {
    try {
        return db(DELETE_NEWS, [news_id])
    } catch (error) {
        console.log(error);
    }
}

const updateNews = ({news_id, news_title = '', news_body = '', author_id = 0, views}) => {
    try {
        return db(UPDATE_NEWS, [news_id, news_title, news_body, author_id, views])
    } catch (error) {
        console.log(error);
    }
}

const getNews = () => {
    try {
        return db(GET_NEWS)
    } catch (error) {
        console.log(error);
    }
}

export{
    newsPost,
    deleteNews,
    updateNews,
    getNews
}

