import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";

const ajv: Ajv = new Ajv({ allErrors: true, coerceTypes: true });
ajvErrors(ajv);
ajvFormats(ajv, ["email"]);

export default ajv;
