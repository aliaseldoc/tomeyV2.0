# CLAUDE.md

Proyecto:
-Aplicación web para material didáctico de estudio. Para estudiantes universitarios de la carrera de Enfermería.

Rol del agente:
-Desarrollador web con 15 años de experiencia
-Docente universitario especialista en área de la salud, específicamente enfermería

Objetivo:
-Crea una app para afianzar los conocimientos visto de forma lúdica 

Roles en la Aplicación:
-Poder ingresar el nombre del jugador
-Que la app registre el top 10 de puntajes más altos, independiente por nivel
-Estilo de juego preguntas y respuestas. Con un formato similar a "Quien quiere ser millonario"

Infografia:
Solo puedes utilizar el libro previsto en el root de proyecto llamado: Guía de gestión y dirección de enfermería. Marriner Tomey.org 

Temas:
	-Planificacion estrategica y operativa.Vision. Valores. Mision. Filosofia. Metas y objetivos. FODA	
	-Estructura y conceptos organizativos: organigrama. Cadena de mandos. Poder, politica y relaciones laborales: Motivacion.
	-Comunicación. Gestión del tiempo. Negociación de conflictos. Desarrollo de las teorías de liderazgo	
	-Evaluacion de desempeño.  Planificación de sistemas de educación continua y permanente del personal.

Estructura del juego:
-El juego se divide en 4 niveles temáticos, cada uno alineado con una clase del curso:
	-Nivel 1 · Planificación y gestión (capítulos 8, 9 y 15 del libro)
	-Nivel 2 · Estructura, poder y motivación (capítulos 4, 5, 10 y 11)
	-Nivel 3 · Comunicación y liderazgo (capítulos 1, 2, 3, 6 y 7)
	-Nivel 4 · Gestión del personal (capítulos 12, 13 y 14)
-Cada nivel es una escalera independiente de 15 preguntas, con la misma curva de puntos (100 a 20.000) y checkpoints en las preguntas 5 y 10.
-Cada una de esas 15 preguntas surge de un pool de 5 candidatas por escalón, elegida al azar en cada partida para que memorizar el orden no alcance para ganar.
-Los niveles se desbloquean de forma secuencial por fecha (Nivel 1 habilitado por defecto; los siguientes se habilitan en la fecha que indique el usuario).
-El ranking top 10 es independiente por nivel, sin mezclar puntajes entre niveles.

Stack de tecnologia:
-html5
-css3(con tailwind)
-JavaScript
-React

Preferencias generales:
-todos los textos visibles deben estar en español
-utilizaras las skills necesarias para el desarrollo de la app

Preferencias de diseño:
-Busca un dieseño sorprendente, colorido pero armónico, elegante y profesional

Preferencias de estilos:
-use medidas en rem, usando un font-size base de 10px
-uso de HTML5 y CCS3 nativo
-uso de buenas practicas de maquetacion css y si es necesario usa flexbox y css grid layout
-la web app sea 100% responsive mobile first


Preferencias de código:
-html debe ser semantico
-Usa siempre let o const y no uses nunca var
-no uses alerta o ventana modal que aparezca debe tener el mismo estilo que la web
-cuidado con olvidar prevenir el default en los eventos submit o click
-prioriza el codigo legible y mantenible
-prioriza que el codigo sea sencillo de entender
-si el agente duda, que revise laas especificaciones del proyecto y si no que pregunte al usuario

Estructura de archivos:
-estructuras de ficheros mas adecuada para proyectos de react(lo elige el agente de ia)
