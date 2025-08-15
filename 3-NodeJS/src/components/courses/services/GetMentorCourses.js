import { connection } from "#libs/database.js";

export async function GetMentorCoursesService({ mentorId }) {
    return await connection.manyOrNone(
        "SELECT * FROM courses WHERE creator_id = $1",
        [mentorId],
    );
}
