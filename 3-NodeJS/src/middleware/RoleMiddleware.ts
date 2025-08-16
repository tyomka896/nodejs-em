import { NextFunction, Request, Response } from "express";

import { UserTypes } from "#types/index.ts";
import { ForbiddenError, UnauthorizedError } from "#errors/index.ts";

const ROLES: Record<string, number> = {
    "admin": 1,
    "mentor": 2,
    "student": 3,
};

function validateUserRole(user: UserTypes.Model | null): UserTypes.Role {
    if (!user) {
        throw new UnauthorizedError();
    }

    if (!ROLES[user.role]) {
        throw new ForbiddenError(`Invalid role '${user.role}'`);
    }

    return user.role;
}

function checkRole(currentRole: UserTypes.Role) {
    return (req: Request, _res: Response, next: NextFunction) => {
        const role = validateUserRole(req.state?.user || null);

        if (ROLES[role] > ROLES[currentRole]) {
            throw new ForbiddenError(
                `Insufficient permissions, only for users with role or above: '${currentRole}'`,
            );
        }

        return next();
    };
}

export const IsStudentMiddleware = checkRole("student");
export const IsMentorMiddleware = checkRole("mentor");

function checkExactRole(currentRole: UserTypes.Role) {
    return (req: Request, _res: Response, next: NextFunction) => {
        const role = validateUserRole(req.state?.user || null);

        if (ROLES[role] !== ROLES[currentRole]) {
            throw new ForbiddenError(
                `Insufficient permissions, only for users with role: '${currentRole}'`,
            );
        }

        return next();
    };
}

export const OnlyStudentMiddleware = checkExactRole("student");
export const OnlyMentorMiddleware = checkExactRole("mentor");
export const OnlyAdminMiddleware = checkExactRole("admin");
