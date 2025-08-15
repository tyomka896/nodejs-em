import { ForbiddenError, UnauthorizedError } from "#errors/index.js";

const ROLES = {
    "admin": 1,
    "mentor": 2,
    "student": 3,
};

function validateUserRole(user) {
    if (!user) {
        throw new UnauthorizedError();
    }

    if (!ROLES[user.role]) {
        throw new ForbiddenError(`Invalid role '${user.role}'`);
    }

    return user.role;
}

function checkRole(currentRole) {
    return (req, _res, next) => {
        const role = validateUserRole(req.state?.user);

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

function checkExactRole(currentRole) {
    return (req, _res, next) => {
        const role = validateUserRole(req.state?.user);

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
