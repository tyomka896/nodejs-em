export const DATABASE_HOST: string = Deno.env.get("DATABASE_HOST") ??
    "localhost";

export const DATABASE_PORT: number = Number(
    Deno.env.get("DATABASE_PORT") ?? 5432,
);

export const DATABASE_NAME: string = Deno.env.get("DATABASE_NAME") ??
    "postgres";

export const DATABASE_USER: string = Deno.env.get("DATABASE_USER") ??
    "postgres";

export const DATABASE_PASSWORD: string = Deno.env.get("DATABASE_PASSWORD") ??
    "postgres";
