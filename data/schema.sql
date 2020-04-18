DROP TABLE IF EXISTS advice;

CREATE TABLE advice (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    country VARCHAR(255),
    comment TEXT
);