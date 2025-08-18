--
-- PostgreSQL database dump
--
CREATE TABLE public.audit_data (
    id integer NOT NULL,
    url text NOT NULL,
    method text NOT NULL,
    user_id integer,
    user_role text,
    description text NOT NULL,
    created_at timestamp with time zone NOT NULL
);

CREATE SEQUENCE public.audit_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.audit_data_id_seq OWNED BY public.audit_data.id;

ALTER TABLE
    ONLY public.audit_data
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.audit_data_id_seq' :: regclass);

ALTER TABLE
    ONLY public.audit_data
ADD
    CONSTRAINT audit_data_pkey PRIMARY KEY (id);