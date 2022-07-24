# shop-react-redux-cloudfront-bff
Back end for shop-react-redux-cloudfront application

# SQL:

CREATE EXTENSION if NOT exists "uuid-ossp";

create table products (
id uuid primary key default uuid_generate_v4(),
title text not null,
description text,
price integer
);

create table stocks (
product_id uuid,
count integer,
foreign key ("product_id") references "products" ("id")
);

insert into products (title, description, price) values
('Candle 1', 'Candle 1 Description', 45),
('Candle 2', 'Candle 2 Description', 60),
('Candle 3', 'Candle 3 Description', 65),
('Candle 4', 'Candle 4 Description', 27),
('Candle 5', 'Candle 5 Description', 81)

insert into stocks (product_id, count) values
('dad69b2e-f4ac-4f32-a96c-6ec9ccb97486', 6),
('59e61ce7-6962-4fc3-9fb2-792a1674c12d', 12),
('80f42bd5-a5ca-47fa-a1e9-5b765814981f', 1),
('17a79597-2b44-488d-9e55-bd9d1f2d09ab', 4),
('9d14fb52-8f39-4da1-b581-e7a3f697c1b7', 10)
