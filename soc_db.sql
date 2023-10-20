create database SOC_DB;
use SOC_DB;

create table tb_user(
email 		varchar(30),
cod_etec 	char(3),
login 		varchar(30),
senha 		varchar(30),

 constraint pk_user primary key(login),
 constraint email unique(email)
);

select * from tb_user;