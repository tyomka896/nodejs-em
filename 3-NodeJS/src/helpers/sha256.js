import crypto from "crypto";

import { AUTH_PASSWORD_KEY } from "#config";

const sha256 = (string) =>
    crypto.createHmac("sha256", AUTH_PASSWORD_KEY)
        .update(string)
        .digest("hex");

export default sha256;
