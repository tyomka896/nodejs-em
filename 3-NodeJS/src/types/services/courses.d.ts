import { UserTypes } from "#types/index.d.ts";

export interface CreateCourseArgs {
    title: string;
    about?: string;
    creatorId: number;
}

export interface DeleteCourseArgs {
    courseId: number;
}

export interface EnrollUserArgs {
    userId: number;
    courseId: number;
}

export interface GetCourseArgs {
    userId: number;
    courseId: number;
    role: UserTypes.Role;
}

export interface GetMentorCoursesArgs {
    mentorId: number;
}

export interface GetStudentCoursesArgs {
    studentId: number;
}

export interface UpdateCourseArgs {
    courseId: number;
    title?: string;
    about?: string;
}
