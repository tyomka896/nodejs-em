export interface BaseErrorInfo {
    name: string;
    message: string;
    statusCode: number;
    stack?: string;
}

export interface BaseErrorObject {
    error: string;
    statusCode: number;
}

export interface ValidationErrorObject extends BaseErrorObject {
    messages: string | string[] | Record<string, string>[];
}
