import { Request } from "express";

export type ValidationResult = {
    error: string;
    messages: Record<string, string>[];
} | {};
