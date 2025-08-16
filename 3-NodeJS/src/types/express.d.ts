import "express";

import { UserTypes } from "#types/index.d.ts";

declare module "express-serve-static-core" {
    interface Request {
        state?: {
            user?: UserTypes.Model;
        };
    }
}

export interface PagedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
