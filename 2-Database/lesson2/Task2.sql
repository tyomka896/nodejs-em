INSERT INTO
    users (name, surname, age, password)
VALUES
    ('Иван', 'Иванов', 25, md5('password1')),
    ('Петр', 'Петров', 30, md5('password2')),
    ('Анна', 'Сидорова', 22, md5('password3')),
    ('Мария', 'Кузнецова', 28, md5('password4')),
    ('Алексей', 'Смирнов', 35, md5('password5')),
    ('Елена', 'Попова', 27, md5('password6')),
    ('Дмитрий', 'Васильев', 31, md5('password7')),
    ('Ольга', 'Новикова', 29, md5('password8')),
    ('Сергей', 'Федоров', 33, md5('password9')),
    ('Наталья', 'Морозова', 26, md5('password10'));

INSERT INTO
    categories (name, code)
VALUES
    ('Electronics', 'ELEC'),
    ('Clothing', 'CLOTH'),
    ('Books', 'BOOK'),
    ('Home', 'HOME'),
    ('Sports', 'SPORT'),
    ('Toys', 'TOYS'),
    ('Food', 'FOOD'),
    ('Health', 'HLTH'),
    ('Beauty', 'BTY'),
    ('Automotive', 'AUTO');