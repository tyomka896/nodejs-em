--
-- PostgreSQL database dump
--
CREATE TABLE public.courses (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    about text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    creator_id integer NOT NULL
);

CREATE SEQUENCE public.courses_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    refresh_token character varying(255),
    role public.user_role DEFAULT 'student' :: public.user_role NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE public.users_courses (
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE SEQUENCE public.users_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

ALTER TABLE
    ONLY public.courses
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.courses_id_seq' :: regclass);

ALTER TABLE
    ONLY public.users
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.users_id_seq' :: regclass);

ALTER TABLE
    ONLY public.courses
ADD
    CONSTRAINT courses_pkey PRIMARY KEY (id);

ALTER TABLE
    ONLY public.users_courses
ADD
    CONSTRAINT user_courses_pkey PRIMARY KEY (user_id, course_id);

ALTER TABLE
    ONLY public.users
ADD
    CONSTRAINT users_email_key UNIQUE (email);

ALTER TABLE
    ONLY public.users
ADD
    CONSTRAINT users_pkey PRIMARY KEY (id);

ALTER TABLE
    ONLY public.courses
ADD
    CONSTRAINT courses_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    ONLY public.users_courses
ADD
    CONSTRAINT user_courses_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    ONLY public.users_courses
ADD
    CONSTRAINT user_courses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;