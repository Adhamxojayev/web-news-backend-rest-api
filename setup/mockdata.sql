
insert into languages (lang_name) values ('uzbek'), ('русский'), ('english');   

insert into categories (category_name, lang_id) values ('jahon', 1), ('sport', 1), ('fan va texnika', 1);
insert into categories (category_name, lang_id) values ('Мир', 2), ('спорт', 2), ('наука и технология',2);
insert into categories (category_name, lang_id) values ('world', 3), ('sport', 3), ('science and technology',3);


insert into news (news_title, news_body, category_id, author_id, lang_id) values ('futzal', 'futzal boyish chemp boshlandi', 2, 2, 1);
