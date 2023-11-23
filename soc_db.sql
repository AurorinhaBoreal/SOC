drop database db_soc;
create database db_soc;
use db_soc;

create table tb_user(
email 		varchar(30),
cod_etec 	char(3),
login 		varchar(30),
senha 		varchar(30),

 constraint pk_user primary key(login),
 constraint email unique(email)
);

select * from tb_user;

create table tb_prof(
id		int auto_increment,
nome	varchar(30),
rm		int,

constraint pk_prof primary key(id)
);

insert into tb_prof(nome, rm) values
("Saiz","1010"),
("Francalino Antonio", "1011"),
("Marcos Nogueira","1111"),
("Luiz","1212"),
("Emerson","1313"),
("Marcos Costa","1414"),

("Wilhelm","4204"),
("Alcindo","1911"),
("Raquel","0000");

select * from tb_prof;

create table tb_cursos(
id		  int auto_increment,
descricao varchar(40),

constraint pk_curso primary key(id)
);

insert into tb_cursos(descricao) values
("Desenvolvimento de Sistemas");

select * from tb_cursos;

create table tb_modulos(
id int auto_increment,
descricao varchar(20),

constraint pk_modulo primary key(id)
);

insert into tb_modulos(descricao) values
("1° Módulo"),
("2° Módulo"),
("3° Módulo");

create table tb_materias(
id			int	auto_increment,
nome		varchar(50),
id_curso	int,
id_modulo	int,

constraint pk_materia primary key(id),
constraint fk_curso foreign key (id_curso) references tb_cursos(id),
constraint fk_modulo foreign key(id_modulo) references tb_modulos(id)
);

insert into tb_materias(nome, id_curso, id_modulo) values
/*Primeiro Bimestre*/
("Programação WEB 1","1","1"),
("Fundamentos da Informática","1","1"),
("Programação e Algoritimos","1","1"),
("Design Digital","1","1"),
("Operação de Software Aplicativo","1","1"),
("Banco de Dados 1","1","1"),
("Ética e Cidadania Organizacional","1","1"),
("Inglês Instrumental","1","1"),

/*Segundo Bimestre*/
("Desenvolvimento de Sistemas I","1","2"),
("Análise e Desenvolvimento de Projetos","1","2"),
("Banco de Dados II","1","2"),
("Programação Web II","1","2"),
("Programação de Aplicativos Mobile","1","2"),
("Sistemas Embarcados","1","2"),
("Planejamento de TCC","1","2");

select * from tb_materias;

create table tb_periodos(
id int auto_increment,
descricao varchar(20),

constraint pk_periodos primary key(id)
);

insert into tb_periodos(descricao) values
("Matutino"),
("Vespertino"),
("Noturno");

create table tb_dias(
id			int auto_increment,
nome  		varchar(15),
id_periodos int,

constraint pk_dias primary key(id),
constraint fk_periodos foreign key(id_periodos) references tb_periodos(id)
);

insert into tb_dias(nome, id_periodos) values
("Segunda-Feira","1"),("Segunda-Feira","2"),("Segunda-Feira","3"),
("Terça-Feira","1"),("Terça-Feira","2"),("Terça-Feira","3"),
("Quarta-Feira","1"),("Quarta-Feira","2"),("Quarta-Feira","3"),
("Quinta-Feira","1"),("Quinta-Feira","2"),("Quinta-Feira","3"),
("Sexta-Feira","1"),("Sexta-Feira","2"),("Sexta-Feira","3");

select * from tb_dias;

create table tb_turma(
id 			int auto_increment,
descricao	varchar(15),

constraint pk_turma primary key(id) 
);

insert into tb_turma(descricao) values
("Turma A"), ("Turma B"), ("Sem Divisão");

select * from tb_turma;

create table tb_profMaterias(	
id int auto_increment,
id_prof int,
id_materia int,

constraint pk_profMat primary key (id),
constraint fk_profe foreign key (id_prof) references tb_prof(id),
constraint fk_materias foreign key (id_materia) references tb_materias(id)
);

insert into tb_profMaterias(id_prof, id_materia) values
("1","9"),
("2","10"),
("3","11"),
("4","12"),
("5","13"),
("6","14"),
("6","15");

select
tb_prof.nome as Nome, tb_materias.nome as Materia
from tb_profMaterias
inner join tb_prof on tb_prof.id = tb_profMaterias.id_prof
inner join tb_materias on tb_materias.id = tb_profMaterias.id_materia;

-- SIMBOLOGIA - VISÃO DO COORDENADOR
create table tb_horarios(
id 			int auto_increment,
id_prof		int,
id_materia	int,
id_dia		int,
bloco		enum("1", "2"),
id_turma	int,
dt_criacao	date,	

constraint pk_horarios primary key(id),
constraint fk_prof foreign key (id_prof) references tb_prof(id),
constraint fk_materia foreign key (id_materia) references tb_materias(id),
constraint fk_dia foreign key (id_dia) references tb_dias(id),
constraint fk_turma foreign key (id_turma) references tb_turma(id)
);

insert into tb_horarios(id_prof, id_materia, id_dia, bloco, id_turma, dt_criacao) values
/*Primeiro Bimestre*/
('4',"1","3","1","1","2023-01-01"),('4',"1","3","2","2","2023-01-01"), 	   	#Luiz    	   	/Segunda
('7',"2","3","1","2","2023-01-01"),('7',"2","3","2","1","2023-01-01"), 	   	#Wilhelm 	   	/Segunda
('3',"1","6","1","3","2023-01-01"),										   	#Marcos Nogueira/Terça
('1',"3","6","2","3","2023-01-01"),                                        	#Saiz		   	/Terça
('1',"3","9","1","1","2023-01-01"),('1',"3","9","2","2","2023-01-01"), 	   	#Saiz			/Quarta
('5',"4","9","1","2","2023-01-01"),('5',"4","9","2","1","2023-01-01"),	   	#Emerson		/Quarta
('2',"5","12","1","1","2023-01-01"),('2',"5","12","2","2","2023-01-01"),   	#Francalino		/Quinta
('6',"6","12","1","2","2023-01-01"),('6',"6","12","2","1","2023-01-01"),   	#Marcão			/Quinta
('8',"7","15","1","3","2023-01-01"),									   	#Alcindo		/Sexta
('9',"8","15","2","3","2023-01-01"),									   	#Raquel			/Sexta

/*Segundo Bimestre*/
('1',"9","3","1","3","2023-06-01"),('1',"9","3","2","3","2023-06-01"),     	#Saiz			/Segunda
('2',"10","6","1","3","2023-06-01"),									   	#Francalino		/Terça
('3',"11","6","2","3","2023-06-01"),	                                   	#Marcos Nogueira/Terça
('4',"12","9","1","3","2023-06-01"),('4',"12","9","2","3","2023-06-01"),   	#Luiz			/Quarta
('5',"13","12","1","3","2023-06-01"),('5',"13","12","2","3","2023-06-01"), 	#Emersono		/Quinta
('6',"14","15","1","3","2023-06-01"),('6',"15","15","2","3","2023-06-01"); 	#Marcão			/Sexta

select
tb_prof.nome as Professor,
tb_cursos.descricao as Curso,
tb_materias.nome as Componente,
tb_dias.nome as Dia_Semanal,
tb_horarios.bloco as Bloco,
tb_turma.descricao as Turma,
tb_materias.id_modulo as Modulo,
tb_periodos.descricao as Periodo,
tb_horarios.dt_criacao as Data_de_Criação,
adddate(tb_horarios.dt_criacao, interval 5 month) as Data_de_Validade
from tb_horarios
inner join tb_prof on tb_prof.id=tb_horarios.id_prof
inner join tb_materias on tb_materias.id=tb_horarios.id_materia
inner join tb_cursos on tb_cursos.id=tb_materias.id_curso
inner join tb_dias on tb_dias.id=tb_horarios.id_dia
inner join tb_periodos on tb_periodos.id=tb_dias.id_periodos
inner join tb_turma on tb_turma.id=tb_horarios.id_turma
where tb_materias.id_modulo = 1 /*Mude isso para 2 se quiser ver o segundo módulo*/
order by tb_dias.id, tb_horarios.bloco, tb_turma.descricao;
