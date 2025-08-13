import crypto from "crypto";

import { APP_KEY } from "#config/app.js";

const sha256 = (string) =>
    crypto.createHmac("sha256", APP_KEY)
        .update(string)
        .digest("hex");

export default sha256;
