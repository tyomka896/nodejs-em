DELETE FROM
    users
WHERE
    id IN (
        SELECT
            id
        FROM
            users
        ORDER BY
            id ASC
        LIMIT
            2
    );