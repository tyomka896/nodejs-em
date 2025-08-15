import { connection } from "#libs/database.js";

export async function CreateCourseService({ title, about, creatorId }) {
    const { id } = await connection.one(
        "INSERT INTO courses (title, about, creator_id) VALUES ($1, $2, $3) RETURNING id",
        [title, about || null, creatorId],
    );

    return { id };
}
