-- Migration: create_user_table
-- Created at: 2020-03-24 23:28:25
-- ====  UP  ====

BEGIN;
    create table user
(
    id_user                               varchar(20)    not null,
    username                              varchar(100)   not null,
    PRIMARY KEY (id_user)
);

COMMIT;

-- ==== DOWN ====

BEGIN;
    DROP TABLE user CASCADE;
COMMIT;
