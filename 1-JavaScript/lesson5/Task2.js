function objToArray(obj, type = "keys") {
    if (!obj || typeof obj != "object") {
        return false;
    }

    if (typeof type != "string" || !["keys", "values"].includes(type)) {
        return false;
    }

    return type == "keys" ? Object.keys(obj) : Object.values(obj);
}

const objToArr = (obj, type) => objToArray(obj, type);
