import { Request } from "express";

export function getRequestDescription(req: Request): string {
    const { method, originalUrl: url } = req;

    for (const route of ROUTES) {
        if (route.method === method && route.path.test(url)) {
            return route.description;
        }
    }

    return `${method} ${url}`;
}

type RouteInfo = {
    method: string;
    path: RegExp;
    description: string;
};

const ROUTES: RouteInfo[] = [
    {
        method: "POST",
        path: /^\/auth$/,
        description: "Аутентификация пользователя",
    },
    {
        method: "POST",
        path: /^\/auth\/refresh$/,
        description: "Обновление токена аутентификации",
    },
    {
        method: "GET",
        path: /^\/test/,
        description: "Тестовый GET-запрос",
    },
    {
        method: "POST",
        path: /^\/test$/,
        description: "Тестовый POST-запрос",
    },
    {
        method: "PUT",
        path: /^\/test$/,
        description: "Тестовый PUT-запрос",
    },
    {
        method: "POST",
        path: /^\/courses$/,
        description: "Создание нового курса",
    },
    {
        method: "POST",
        path: /^\/courses\/[^\/]+\/enroll$/,
        description: "Запись пользователя на курс",
    },
    {
        method: "GET",
        path: /^\/courses\/mentor/,
        description: "Получение курсов, где пользователь является наставником",
    },
    {
        method: "GET",
        path: /^\/courses\/student/,
        description: "Получение курсов, где пользователь является студентом",
    },
    {
        method: "GET",
        path: /^\/courses\/[^\/]+/,
        description: "Получение информации о курсе",
    },
    {
        method: "PUT",
        path: /^\/courses\/[^\/]+$/,
        description: "Обновление информации о курсе",
    },
    {
        method: "DELETE",
        path: /^\/courses\/[^\/]+$/,
        description: "Удаление курса",
    },
    {
        method: "GET",
        path: /^\/courses/,
        description: "Получение списка всех курсов",
    },
    {
        method: "POST",
        path: /^\/users$/,
        description: "Создание нового пользователя",
    },
    {
        method: "GET",
        path: /^\/users/,
        description: "Получение списка пользователей",
    },
    {
        method: "PUT",
        path: /^\/users\/[^\/]+$/,
        description: "Обновление информации о пользователе",
    },
];
