import { ForbiddenError, UnauthorizedError } from "#errors/index.js";

const ROLES = {
    "admin": 1,
    "mentor": 2,
    "student": 3,
};

function checkRole(currentRole) {
    return (req, _res, next) => {
        if (!req.state?.user) {
            throw new UnauthorizedError();
        }

        const { role } = req.state.user;

        if (!ROLES[role]) {
            throw new ForbiddenError(`Invalid role '${role}'`);
        }

        if (ROLES[role] > ROLES[currentRole]) {
            throw new ForbiddenError(
                `Insufficient permissions, only for users with role: '${currentRole}'`,
            );
        }

        return next();
    };
}

export const IsStudentMiddleware = checkRole("student");
export const IsMentorMiddleware = checkRole("mentor");
export const IsAdminMiddleware = checkRole("admin");
