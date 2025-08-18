import dayjs from "dayjs";
import { NextFunction, Request, Response } from "express";

import { sendLog } from "#libs/kafka.ts";
import { AuditData } from "#types/index.ts";
import { getRequestDescription } from "#data/urlInfo.ts";

export async function LoggerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    next();

    const logInfo: AuditData = {
        url: req.originalUrl,
        method: req.method,
        description: getRequestDescription(req),
        timestamp: dayjs().format(),
    };

    res.on("finish", async () => {
        if (req.state?.user) {
            logInfo.user_id = req.state?.user.id;
            logInfo.user_role = req.state?.user.role;
        }

        await sendLog(logInfo).catch(() => {});
    });
}
