CREATE TABLE public.userdetails
(
    StudentName character varying COLLATE pg_catalog."default" NOT NULL,
    StudentId character varying COLLATE pg_catalog."default" NOT NULL,
    YoB integer,
    Gender character varying COLLATE pg_catalog."default",
    Height integer,
    Weight integer,
    Nationality character varying COLLATE pg_catalog."default",
    Course character varying COLLATE pg_catalog."default",
    LastScore integer,
    Ailments boolean,
	createdAt bigint,
	lastModifiedAt bigint,
    source integer,
    CONSTRAINT userdetails_pkey PRIMARY KEY (StudentId)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;