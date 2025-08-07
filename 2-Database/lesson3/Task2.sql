SELECT
    age,
    COUNT(*) AS user_count
FROM
    users
GROUP BY
    age
HAVING
    COUNT(*) > 2
ORDER BY
    age;