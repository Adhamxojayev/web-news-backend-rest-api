create database world_news;


create table users (
    user_id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(100) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    specialist varchar(50) not null,
    UNIQUE(email)
);

create table news (
    news_id serial,
    news_title varchar(256) not null,
    news_body text not null,
    author_id int not null references users(user_id) on delete cascade,
    category_id int not null references categories(category_id) on delete cascade,
    lang_id int not null references languages(lang_id) on delete cascade,
    views int default 0,
    news_created_at timestamptz default current_timestamp
);

create table languages (
    lang_id serial primary key,
    lang_name varchar(40) not null
);


create table categories (
    category_name varchar(200) not null,
    category_id serial primary key,
    lang_id int not null references languages(lang_id) on delete cascade
);

