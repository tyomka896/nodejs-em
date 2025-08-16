import crypto from "crypto";

import { APP_KEY } from "#config/app.js";

function sha256(value: string): string {
    return crypto.createHmac("sha256", APP_KEY)
        .update(value)
        .digest("hex");
}

export default sha256;
