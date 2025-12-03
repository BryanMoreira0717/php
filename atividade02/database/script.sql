create database php_crud;

use php_crud;

create table usuario(
    email varchar(255) primary key,
    name varchar(255) not null,
    password varchar(255) not null
);

insert into usuario(email, name, password)
values("bryan@gmail.com", "Bryan", "12345");