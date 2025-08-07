CREATE TABLE user_addresses (
    id SERIAL PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    users_id INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO
    user_addresses (address, users_id)
VALUES
    ('ул. Ленина, д. 10, кв. 5', 1),
    ('пр. Победы, д. 25', 1),
    ('ул. Гагарина, д. 3, кв. 12', 2),
    ('ул. Садовая, д. 7', 2),
    ('пер. Центральный, д. 15, кв. 3', 3),
    ('ул. Лесная, д. 33', 3),
    ('пр. Космонавтов, д. 41, кв. 8', 4),
    ('ул. Школьная, д. 22', 4),
    ('ул. Мира, д. 18, кв. 9', 1),
    ('ул. Заречная, д. 5', 2);

SELECT
    ua.address,
    u.surname
FROM
    user_addresses ua
    JOIN users u ON ua.users_id = u.id
ORDER BY
    u.surname,
    ua.address;