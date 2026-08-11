/**
 * @typedef {Object} Question
 * @property {string} question
 * @property {string[]} options - exactamente 4
 * @property {number} correctIndex - 0-3
 * @property {string} hint - mostrado con el comodín "Consultar el libro"
 *
 * @typedef {Object} Escalon
 * @property {number} points - puntaje acumulado al superar este escalón
 * @property {boolean} isCheckpoint - si es un "salvavidas" de puntaje
 * @property {string} category - capítulo de origen de este escalón
 * @property {Question[]} questions - pool de exactamente 5 candidatas; se elige 1 al azar
 *
 * @typedef {Object} Nivel
 * @property {string} id - kebab-case, también sufijo de las claves de localStorage/sessionStorage
 * @property {string} title
 * @property {string} description
 * @property {string|null} unlockDate - ISO date string, o null = bloqueado hasta fijar fecha
 * @property {Escalon[]} levels - exactamente 15 escalones
 */

/** @type {Nivel} */
export const NIVEL_4 = {
  id: 'gestion-del-personal',
  title: 'Gestión del personal',
  description: 'Selección y desarrollo de personal, planificación y dotación de personal, y evaluación y disciplina del personal.',
  unlockDate: null,
  levels: [
    {
      points: 100,
      isCheckpoint: false,
      category: 'Selección y desarrollo de personal',
      questions: [
        {
          question: "¿En qué consiste la 'técnica del embudo' durante una entrevista de selección?",
          options: [
            'Comenzar con preguntas abiertas e ir cerrando el enfoque con preguntas más directas',
            'Empezar con preguntas cerradas y terminar con preguntas abiertas',
            'Hacer todas las preguntas en un orden aleatorio',
            'Realizar solo preguntas de autoevaluación',
          ],
          correctIndex: 0,
          hint: 'La técnica del embudo estructura la entrevista comenzando con preguntas abiertas y generales, para luego ir estrechando el tema con preguntas de autoevaluación y finalmente preguntas cerradas y directas.',
        },
        {
          question: '¿Qué técnica de diseño del puesto de trabajo elimina las partes más difíciles de una tarea para que el trabajador pueda hacer mejor lo que queda, aunque tiende a generar aburrimiento?',
          options: ['Rotación del puesto de trabajo', 'Enriquecimiento del puesto de trabajo', 'Simplificación del puesto de trabajo', 'Evaluación del puesto de trabajo'],
          correctIndex: 2,
          hint: 'Por ejemplo, una enfermera puede ser contratada solo para dar comienzo a todas las líneas intravenosas, liberando de esa tarea a otras enfermeras. Esta técnica horizontal reduce la dificultad del trabajo, pero puede llevar al aburrimiento.',
        },
        {
          question: '¿Qué tipo de fiabilidad de la entrevista —la de entrevistas repetidas por la misma persona— suele ser mayor que la fiabilidad entre evaluadores distintos?',
          options: ['Fiabilidad entre evaluadores', 'Fiabilidad intraevaluador', 'Validez predictiva', 'Validez de contenido'],
          correctIndex: 1,
          hint: 'El capítulo distingue dos tipos de fiabilidad en la entrevista de selección: una que compara las entrevistas repetidas por la misma persona, y otra que compara las entrevistas repetidas por personas diferentes. Ambas son menores cuando la entrevista no está estructurada.',
        },
        {
          question: '¿Qué tipo de preguntas de entrevista son indicativas, pueden responderse con un simple "sí" o "no", y son apropiadas para obtener información objetiva y factual?',
          options: ['Preguntas abiertas', 'Preguntas de autoevaluación', 'Preguntas de estrés', 'Preguntas cerradas'],
          correctIndex: 3,
          hint: 'Ejemplos de este tipo de preguntas son "¿Cuál fue la última empresa para la que trabajó?" o "¿Se llevó bien con sus compañeros de trabajo?". Solicitan menos información que las preguntas abiertas.',
        },
        {
          question: '¿Qué requiere, en Estados Unidos, la licencia inicial para ejercer como enfermera registrada (ER), según el capítulo?',
          options: ['Un examen médico previo obligatorio', 'Huellas dactilares y una comprobación de antecedentes', 'Una prueba de personalidad estandarizada', 'Una entrevista de estrés obligatoria'],
          correctIndex: 1,
          hint: 'Las normas federales requieren una comprobación de antecedentes en relación con algunos profesionales sanitarios, y este trámite forma parte del proceso de selección junto con el examen médico previo al empleo.',
        },
      ],
    },
    {
      points: 200,
      isCheckpoint: false,
      category: 'Selección y desarrollo de personal',
      questions: [
        {
          question: '¿Cómo se denomina la técnica que consiste en trasladar al personal de enfermería entre diferentes turnos, unidades o pacientes?',
          options: ['Rotación del puesto de trabajo', 'Enriquecimiento del puesto de trabajo', 'Simplificación del puesto de trabajo', 'Evaluación del puesto de trabajo'],
          correctIndex: 0,
          hint: 'La rotación es una técnica horizontal que traslada al personal entre distintas unidades, turnos o pacientes; a diferencia del enriquecimiento (vertical) o la simplificación, no reduce ni amplía la complejidad de las tareas, solo las varía.',
        },
        {
          question: '¿Qué técnica de diseño del puesto de trabajo es un enfoque vertical que utiliza una gama más plena de las habilidades e ingenio del personal?',
          options: ['Simplificación del puesto de trabajo', 'Enriquecimiento del puesto de trabajo', 'Rotación del puesto de trabajo', 'Evaluación del puesto de trabajo'],
          correctIndex: 1,
          hint: 'A diferencia de la rotación o la simplificación, esta técnica busca aumentar la motivación y la productividad considerando la variedad de las experiencias, la identidad de la tarea, su significación, la autonomía y la retroalimentación.',
        },
        {
          question: '¿Qué proceso consiste en determinar el valor remunerativo de un puesto de trabajo en relación con el de otros puestos, utilizando por ejemplo un sistema de puntos?',
          options: ['Análisis del puesto de trabajo', 'Descripción del puesto de trabajo', 'Diseño del puesto de trabajo', 'Evaluación del puesto de trabajo'],
          correctIndex: 3,
          hint: 'Este proceso asigna valores numéricos a calificaciones como la educación, las capacidades mentales y manuales, la responsabilidad sobre recursos y las condiciones de trabajo, para luego sumarlos y determinar un grado que sirve de base para la paga.',
        },
        {
          question: 'En una descripción del puesto de trabajo, ¿qué indica principalmente el título del puesto?',
          options: ['El salario exacto que corresponde a esa posición', 'La antigüedad mínima requerida para acceder al puesto', 'Las principales responsabilidades y delimita dicho puesto de otros', 'El organigrama completo del departamento'],
          correctIndex: 2,
          hint: 'La descripción del puesto de trabajo es un resumen completo pero no detallado de los principales deberes; el título que la encabeza cumple la función de señalar las responsabilidades centrales y diferenciar ese puesto de otros similares.',
        },
        {
          question: '¿De qué proceso derivan las descripciones de los puestos de trabajo, que además se ve afectado por la evaluación y el diseño del puesto?',
          options: ['La planificación de la sucesión', 'La revisión por pares', 'El análisis del puesto de trabajo', 'El proceso de tutoría'],
          correctIndex: 2,
          hint: 'Este proceso es la base de la que se desprenden las descripciones de los puestos de trabajo, y está a su vez relacionado con otros dos procesos: la evaluación del puesto (su valor remunerativo) y el diseño del puesto (su contenido y métodos).',
        },
      ],
    },
    {
      points: 350,
      isCheckpoint: false,
      category: 'Selección y desarrollo de personal',
      questions: [
        {
          question: '¿Cuál de las siguientes preguntas NO está permitida en una entrevista de selección, según sus directrices legales?',
          options: [
            '¿Está usted embarazada o planea estarlo?',
            '¿Puede satisfacer los requerimientos de horario de este puesto?',
            '¿Tiene la capacidad legal para trabajar en este país?',
            '¿Ha sido condenado por algún delito relacionado con el puesto?',
          ],
          correctIndex: 0,
          hint: 'Las leyes de igualdad de oportunidades prohíben preguntar directamente sobre embarazo pasado, presente o futuro durante una entrevista, ya que no debe influir en la decisión de contratación.',
        },
        {
          question: '¿A partir de qué edad protege a los trabajadores la Age Discrimination in Employment Act de 1967, según la enmienda de 1986?',
          options: ['A partir de los 18 años', 'A partir de los 65 años', 'A partir de los 40 años', 'A partir de los 55 años'],
          correctIndex: 2,
          hint: 'Esta ley hace ilegal la discriminación contra empleados de mayor edad; una enmienda de 1986 prohibió específicamente la discriminación contra las personas que ya superaron esa edad.',
        },
        {
          question: 'Según la Americans with Disabilities Act (ADA) de 1990, ¿cuál de las siguientes es una de las tres categorías de individuos protegidos por discapacidad?',
          options: [
            'Individuos que han solicitado alguna vez una baja por enfermedad',
            'Individuos que tienen un registro o historia de una alteración física o mental que limita una actividad vital',
            'Individuos mayores de 40 años sin ninguna alteración física o mental',
            'Individuos que han recibido alguna vez un diagnóstico médico, sin importar su gravedad',
          ],
          correctIndex: 1,
          hint: 'La ADA protege a tres categorías: quienes tienen una alteración física o mental que limita sustancialmente una actividad vital, quienes tienen un registro o historia de esa alteración, y quienes son considerados como si la tuvieran aunque no sea así.',
        },
        {
          question: '¿Qué prohíbe la Pregnancy Discrimination Act de 1978?',
          options: [
            'Que las mujeres embarazadas trabajen turnos rotatorios',
            'Que las mujeres soliciten trabajo estando embarazadas',
            'Que las empresas ofrezcan beneficios por discapacidad durante el embarazo',
            'La discriminación sexual contra las mujeres embarazadas o que pudieran llegar a estarlo',
          ],
          correctIndex: 3,
          hint: 'Esta ley impide que una empresa rechace contratar a una mujer por estar embarazada si ella es capaz de llevar a cabo los principales aspectos del puesto, y garantiza que reciba los mismos beneficios por discapacidad que otros empleados que no puedan trabajar por otras razones médicas.',
        },
        {
          question: 'Según la Family and Medical Leave Act de 1993, ¿a cuántas semanas de permiso no remunerado tiene derecho un empleado elegible en un período de 12 meses?',
          options: ['4 semanas', '12 semanas', '26 semanas', '52 semanas'],
          correctIndex: 1,
          hint: 'Esta ley proporciona seguridad en el trabajo durante una baja no pagada para cuidar a un nuevo hijo o a un familiar con un problema de salud grave, o para atender la propia enfermedad grave del empleado, siempre que haya trabajado al menos 12 meses y 1250 horas previas.',
        },
      ],
    },
    {
      points: 500,
      isCheckpoint: false,
      category: 'Selección y desarrollo de personal',
      questions: [
        {
          question: '¿Cómo se denomina el sesgo del entrevistador que consiste en emitir un juicio global basado en las apariencias de la persona solicitante?',
          options: ['Efecto halo', 'Fiabilidad intraevaluador', 'Validez de la entrevista', 'Discriminación inversa'],
          correctIndex: 0,
          hint: 'El efecto halo ocurre cuando el entrevistador forma un juicio global sobre la persona solicitante a partir de una sola característica visible, en vez de evaluar objetivamente sus calificaciones.',
        },
        {
          question: 'Según las directrices que estableció la Equal Employment Opportunity Commission (EEOC) en 1980, ¿qué ley viola el acoso sexual en el lugar de trabajo?',
          options: ['La Equal Pay Act', 'La Age Discrimination in Employment Act', 'El Title VII de la Civil Rights Act', 'La Rehabilitation Act'],
          correctIndex: 2,
          hint: 'Estas directrices hacían responsables a los empleadores de un acto de acoso sexual cometido por un empleado, incluso si el empleador no tenía conocimiento previo, por violar esta ley que prohíbe la discriminación por motivo de sexo, entre otros.',
        },
        {
          question: '¿Qué riesgo señala el capítulo sobre el uso de la comunicación verbal (boca a boca) como método de reclutamiento, aunque puede ser muy eficiente?',
          options: [
            'Es el método de reclutamiento más costoso de todos',
            'Está prohibido por la Equal Pay Act',
            'Reduce la diversidad cultural únicamente en hospitales magnéticos',
            'Puede llevar a contratar a amigos y familiares, incentivando el favoritismo',
          ],
          correctIndex: 3,
          hint: 'Este método de reclutamiento puede violar los requerimientos de un empleo con igualdad de oportunidades, a diferencia de anuncios en revistas profesionales, periódicos o asociaciones con escuelas de enfermería, que ofrecen un campo más amplio de candidatos.',
        },
        {
          question: 'Según la tabla de diferencias generacionales del capítulo, ¿qué caracteriza el objetivo de carrera profesional de los "baby boomers" (nacidos entre 1946 y 1964)?',
          options: ['Construir un legado', 'Construir una carrera profesional móvil', 'Construir una carrera profesional estelar', 'Construir carreras paralelas'],
          correctIndex: 2,
          hint: 'Esta generación, nacida en la explosión demográfica posterior a la Segunda Guerra Mundial, se siente recompensada por el dinero, el título, el reconocimiento y un lugar preferente en la oficina, e inventó las jornadas de 60 horas semanales.',
        },
        {
          question: 'Según la tabla de diferencias generacionales del capítulo, ¿qué recompensa valoran principalmente los miembros de la generación X (nacidos entre 1965 y 1980)?',
          options: ['El dinero, el título y el reconocimiento', 'La libertad', 'La satisfacción de un trabajo bien hecho', 'El trabajo significativo'],
          correctIndex: 1,
          hint: 'Esta generación desea construir una carrera profesional móvil, se siente recompensada por la libertad y prefiere una retroalimentación frecuente; cuanto más aprenden en una organización, mayor es la probabilidad de que se queden.',
        },
      ],
    },
    {
      points: 1000,
      isCheckpoint: true,
      category: 'Selección y desarrollo de personal',
      questions: [
        {
          question: '¿Qué establece la Equal Pay Act de 1963 (enmendada en 1972)?',
          options: [
            'Que no se pueden pagar salarios distintos por razón de sexo cuando el trabajo es igual',
            'Que las empresas deben ofrecer un salario mínimo garantizado a todos los empleados',
            'Que las embarazadas no pueden ser despedidas por su estado',
            'Que los mayores de 40 años no pueden ser discriminados por su edad',
          ],
          correctIndex: 0,
          hint: 'La Equal Pay Act de 1963 exige que hombres y mujeres reciban el mismo salario cuando realizan un trabajo con responsabilidades, condiciones y exigencias física y mental equivalentes.',
        },
        {
          question: '¿Cómo se denominan los primeros 2 o 3 días de orientación de un nuevo empleado, en los que se describe la historia, la visión y la estructura de la organización?',
          options: ['La socialización', 'La preceptoría', 'La inducción', 'La tutoría'],
          correctIndex: 2,
          hint: 'Este primer tramo de la orientación suele llevarlo a cabo el departamento de personal para todos los nuevos contratados, e incluye información sobre horas de trabajo, días festivos, evaluación del rendimiento y oportunidades formativas, entre otros temas.',
        },
        {
          question: '¿Cómo se llama la primera fase del proceso de tutoría, en la que el tutor emplea su tiempo y energía en educar a una profesional más joven orientada por objetivos?',
          options: ['Fase de cuestionamiento', 'Fase invitacional', 'Fase transicional', 'Fase de consumación'],
          correctIndex: 1,
          hint: 'El proceso de tutoría atraviesa tres fases: en la primera, el tutor decide dedicarse a formar a alguien deseoso de aprender; en la segunda, la persona tutelada cuestiona sus objetivos; en la tercera, la persona tutelada está lista para convertirse en tutora.',
        },
        {
          question: '¿Cuál es la secuencia correcta de los estadios de desarrollo del grupo descritos en el capítulo?',
          options: [
            'Norma, forma, ejecución, tormenta, suspensión',
            'Forma, tormenta (organización), norma, ejecución, suspensión',
            'Ejecución, forma, suspensión, tormenta, norma',
            'Suspensión, norma, forma, tormenta, ejecución',
          ],
          correctIndex: 1,
          hint: 'Los grupos pasan por estadios sucesivos: primero se forman (ansiedad e inseguridad), luego atraviesan un estadio de tensión y luchas de poder, después desarrollan lealtad y confianza al fijar normas, alcanzan un funcionamiento estable y, finalmente, se disuelven.',
        },
        {
          question: '¿Cuáles son los cuatro indicadores dicotómicos del Myers-Briggs Type Indicator mencionados en el capítulo?',
          options: [
            'Liderazgo-gestión, poder-autoridad, motivación-satisfacción, conflicto-negociación',
            'Principiante-experto, novato-competente, avanzado-perito, técnico-profesional',
            'Artesano-guardián, idealista-racional, lógico-emotivo, activo-pasivo',
            'Extraversión-introversión, sensación-intuición, pensamiento-sentimiento, juicio-percepción',
          ],
          correctIndex: 3,
          hint: 'Este instrumento, basado en el trabajo de Carl Jung, ayuda a comprender el modo de pensar y sentir de las personas a través de cuatro pares de preferencias opuestas, útiles para planificar estrategias que resuelvan conflictos dentro de un equipo.',
        },
      ],
    },
    {
      points: 1500,
      isCheckpoint: false,
      category: 'Planificación y dotación de personal',
      questions: [
        {
          question:
            '¿Qué modelo de asignación de personal se caracteriza porque una enfermera profesional asume la responsabilidad total de un grupo reducido de pacientes durante las 24 horas del día, mientras dure su hospitalización?',
          options: ['Enfermería primaria', 'Enfermería funcional', 'Método del caso', 'Enfermería de equipo'],
          correctIndex: 0,
          hint: 'En la enfermería primaria, ideada por Marie Manthey, una enfermera profesional es responsable de la totalidad de la asistencia de un grupo reducido de pacientes durante toda su estancia, aunque otra enfermera asociada la reemplace cuando no está de turno.',
        },
        {
          question: '¿En qué década fue el método del caso (asistencia total al paciente) el modelo primario de prestación de asistencia, antes de resurgir también en la década de 1980?',
          options: ['Década de 1950', 'Década de 1930', 'Década de 1970', 'Década de 1990'],
          correctIndex: 1,
          hint: 'En este modelo, cada paciente queda asignado a una enfermera para la totalidad de su asistencia durante el turno de esa enfermera, pero la continuidad solo se garantiza durante ese turno, ya que el paciente tiene una enfermera distinta en cada turno.',
        },
        {
          question: '¿Qué sistema de asignación es una modificación de la enfermería de equipo y de la enfermería primaria, en la que equipos más pequeños prestan asistencia a pacientes agrupados geográficamente?',
          options: ['Gestión del caso', 'Práctica de colaboración', 'Enfermería modular o de distrito', 'Práctica diferenciada'],
          correctIndex: 2,
          hint: 'En este sistema, cada enfermera profesional, ayudada por personal paraprofesional, presta la máxima asistencia posible a un grupo de pacientes; suele usarse cuando no hay suficientes enfermeras profesionales para practicar la enfermería primaria.',
        },
        {
          question: '¿Qué comité fundaron en 1972 la American Nurses Association y la American Medical Association para apoyar la práctica de colaboración entre enfermeras y médicos?',
          options: ['El Baldrige National Quality Award', 'El American Nurses Credentialing Center', 'El Comité de Ética de la NANDA', 'El National Joint Practice Committee'],
          correctIndex: 3,
          hint: 'El informe de este comité, financiado por la W. K. Kellogg Foundation, apoyaba la práctica de colaboración y sugería que una mayor colaboración entre médicos y enfermeras mejora la calidad de la asistencia y la satisfacción del paciente y de la enfermera.',
        },
        {
          question: 'El modelo de competencias de la práctica diferenciada puede utilizar los niveles de práctica definidos por Benner. ¿Cuál de las siguientes secuencias corresponde a esos niveles?',
          options: [
            'Novato, junior, senior, supervisor, director',
            'Aprendiz, técnico, profesional, gestor, líder',
            'Inicial, intermedio, avanzado, experto, maestro',
            'Principiante, avanzado, competente, perito, experto',
          ],
          correctIndex: 3,
          hint: 'La práctica de enfermería diferenciada ajusta las competencias de las enfermeras a las necesidades de los pacientes, y puede apoyarse en los mismos cinco niveles de práctica que describió Patricia Benner para el desarrollo profesional de la enfermera.',
        },
      ],
    },
    {
      points: 2250,
      isCheckpoint: false,
      category: 'Planificación y dotación de personal',
      questions: [
        {
          question: '¿Qué modelo de dotación de personal divide el trabajo de forma jerárquica según tareas específicas (por ejemplo, una enfermera encargada solo de la medicación)?',
          options: ['Enfermería funcional', 'Enfermería modular', 'Gestión del caso', 'Enfermería primaria'],
          correctIndex: 0,
          hint: 'La enfermería funcional organiza el trabajo por tareas específicas asignadas jerárquicamente según el nivel de competencia del personal; es eficiente y de bajo coste, pero tiende a fragmentar y despersonalizar la asistencia.',
        },
        {
          question: '¿Quién dirige el equipo de enfermería, planificando, interpretando, coordinando, supervisando y evaluando los cuidados de enfermería?',
          options: ['Exclusivamente el gestor de la unidad', 'Un comité de auxiliares de enfermería', 'Un profesional de enfermería', 'La gestora del caso'],
          correctIndex: 2,
          hint: 'Este sistema, introducido en la década de 1950 para mejorar los servicios de enfermería utilizando personal con mayor y menor preparación, está dirigido por un profesional del que dependen enfermeras en prácticas, licenciadas y personal no licenciado.',
        },
        {
          question: 'Según el capítulo, ¿qué duración recomendada tiene una reunión de trabajo del equipo de enfermería para que se convierta en parte de la rutina diaria?',
          options: ['De 5 a 10 minutos', 'De 15 a 30 minutos', 'De 1 a 2 horas', 'De 3 a 4 horas'],
          correctIndex: 1,
          hint: 'Se recomienda que esta reunión, realizada a la misma hora todos los días, sea breve y limitada en tiempo y alcance, eligiendo momentos que interfieran lo menos posible con otras actividades del personal de plantilla.',
        },
        {
          question: 'Durante la década de 1990, ¿qué estrategia de tipo económico guiaba la reforma de la asistencia sanitaria y estimulaba el uso de "colaboradores en la práctica asistencial" (un equipo interdisciplinario)?',
          options: ['La enfermería privada', 'El método del caso', 'La enfermería modular', 'La competencia gerencial'],
          correctIndex: 3,
          hint: 'Según la línea de tiempo del capítulo, en la década de 1920 predominaba el método del caso y la enfermería privada, en la de 1950 la enfermería funcional, a fines de los 60 y en los 70 la enfermería primaria, en los 80 la gestión de casos, y en los 90 esta estrategia económica.',
        },
        {
          question: 'Según las definiciones del capítulo, ¿qué es la "gestión de la asistencia" (managed care)?',
          options: [
            'La técnica horizontal de ampliación del puesto de trabajo',
            'La prestación de servicios sanitarios por medio de redes hospitalarias, médicos y otros profesionales para dar acceso a una asistencia completa, económica y de alta calidad',
            'La gestión y coordinación de la asistencia que recibe un paciente durante un episodio de enfermedad',
            'La determinación del número y promedio de personal basado en las necesidades de los pacientes',
          ],
          correctIndex: 1,
          hint: 'El capítulo distingue este concepto de la "gestión de casos", que en cambio se define como la gestión y coordinación de la asistencia que recibe un paciente concreto durante un episodio de enfermedad.',
        },
      ],
    },
    {
      points: 3000,
      isCheckpoint: false,
      category: 'Planificación y dotación de personal',
      questions: [
        {
          question: '¿Cómo se conoce el patrón de turnos de diez horas en el que el personal trabaja siete días seguidos y luego descansa otros siete días?',
          options: ['7/70', 'Programación en bloque', 'Turno de doce horas', 'Autoprogramación'],
          correctIndex: 0,
          hint: 'El patrón 7/70 consiste en trabajar siete jornadas de diez horas seguidas y descansar los siete días siguientes, una variante de los turnos largos pensada para concentrar el tiempo de trabajo.',
        },
        {
          question: '¿Cuál de las siguientes es una ventaja del turno de 12 horas mencionada en el capítulo?',
          options: [
            'Elimina por completo el riesgo de errores por fatiga',
            'Menor coste por paciente-día y mejor continuidad de la asistencia',
            'Es el único turno permitido por la Fair Labor Standards Act',
            'Reduce a la mitad la necesidad total de personal de enfermería',
          ],
          correctIndex: 1,
          hint: 'El mejor empleo del personal de enfermería con este turno disminuye los requerimientos de dotación de plantilla, lo que reduce el coste por paciente-día; además, las enfermeras llegan a conocer mejor a sus pacientes porque tienen más tiempo para revisarlos.',
        },
        {
          question: '¿Qué efecto producen los turnos de trabajo alternos o rotatorios sobre las enfermeras, según el capítulo?',
          options: [
            'Mejoran de forma constante la calidad del sueño',
            'Están asociados a una menor tasa de errores de medicación',
            'Generan estrés porque desajustan los ritmos circadianos del organismo',
            'No tienen ningún efecto documentado sobre la salud del personal',
          ],
          correctIndex: 2,
          hint: 'Cuando se alteran las horas de trabajo, el tiempo de sueño y las actividades sociales, el organismo debe realizar ajustes frente a la discrepancia entre su ciclo natural y las nuevas demandas del ambiente, lo que puede tardar de 2 a 3 días hasta 2 semanas.',
        },
        {
          question: '¿En qué consiste el plan alternativo de fin de semana desarrollado por el Baylor University Medical Center?',
          options: [
            'Trabajar los 7 días de la semana en turnos de 10 horas',
            'Rotar entre los 3 turnos cada semana de forma obligatoria',
            'Eliminar por completo el trabajo de fin de semana para todo el personal',
            'Trabajar 12 horas al día durante 2 días del fin de semana, recibiendo una paga de 36 o 40 horas',
          ],
          correctIndex: 3,
          hint: 'Este plan, originado en Dallas, Texas, permite a las enfermeras elegir trabajar solo los fines de semana con turnos largos y una paga superior a las horas efectivamente trabajadas, aunque también podían optar por cinco turnos de 8 horas de lunes a viernes.',
        },
        {
          question: '¿En qué consiste la programación en bloque o cíclica?',
          options: [
            'Cada enfermera elabora su propio horario sin ninguna restricción',
            'El personal rota entre los tres turnos cada día',
            'Se contrata personal exclusivamente para cubrir un turno específico',
            'Se utiliza el mismo programa de trabajo de forma repetida',
          ],
          correctIndex: 3,
          hint: 'Un ejemplo es la rotación prospectiva de 6 días, en la que el personal trabaja 6 días consecutivos seguidos de al menos 2 días libres, y el programa se repite cada 6 semanas; permite planificar la vida personal con anticipación.',
        },
      ],
    },
    {
      points: 4000,
      isCheckpoint: false,
      category: 'Planificación y dotación de personal',
      questions: [
        {
          question: '¿Qué sistema de programación de la plantilla consiste en que las propias enfermeras elaboran y acuerdan colectivamente sus horarios de trabajo?',
          options: ['Autoprogramación', 'Programación centralizada', 'Programación descentralizada', 'Programación en bloque'],
          correctIndex: 0,
          hint: 'En la autoprogramación son las propias enfermeras de plantilla quienes elaboran su horario de forma colectiva, respetando las políticas del servicio, lo que suele aumentar la autonomía y la satisfacción laboral.',
        },
        {
          question: '¿Cuáles son las dos ventajas principales de la programación centralizada mencionadas en el capítulo?',
          options: [
            'La rapidez y el bajo coste de implementación',
            'La justicia hacia los empleados y la contención de costes',
            'La eliminación total del papeleo y la reducción de personal',
            'La rotación obligatoria de todos los turnos',
          ],
          correctIndex: 1,
          hint: 'Esta forma de programación aplica de manera firme, objetiva e imparcial las políticas de dotación de personal, y aprovecha mejor los recursos para contener costes, además de liberar a las gestoras de unos deberes laboriosos.',
        },
        {
          question: 'Con la programación descentralizada, ¿quién asume la autoridad y la responsabilidad de dotar de personal a la unidad?',
          options: [
            'Un departamento central de recursos humanos',
            'El comité de acreditación de la institución',
            'Cada enfermera gestora de forma individual, para su propia unidad',
            'Exclusivamente el personal de plantilla, sin intervención de gestoras',
          ],
          correctIndex: 2,
          hint: 'Con este método, el personal siente que recibe una atención más personalizada, y la dotación de personal resulta más fácil y menos complicada al hacerse sobre una unidad pequeña en lugar de sobre toda la institución.',
        },
        {
          question: '¿A cuántas horas por año equivale un puesto de dedicación plena equivalente (FTE), calculado sobre 40 horas semanales durante 52 semanas?',
          options: ['1920 horas', '2600 horas', '1560 horas', '2080 horas'],
          correctIndex: 3,
          hint: 'Un FTE puede ser cubierto por una sola persona o por una combinación de personal; por ejemplo, dos personas podrían compartir un empleo trabajando juntas 80 horas cada 2 semanas hasta completar ese total anual.',
        },
        {
          question: '¿Según qué criterio se ajusta el número y la mezcla del personal en una dotación de plantilla variable?',
          options: [
            'Según la antigüedad de cada enfermera en la institución',
            'Según un cálculo fijo que nunca cambia durante el año',
            'Según las necesidades de los pacientes y la gravedad de sus afecciones',
            'Según el presupuesto de tesorería del trimestre anterior',
          ],
          correctIndex: 2,
          hint: 'A diferencia de un patrón de dotación de plantilla fijo, este método cambia el cociente de personal (por ejemplo, entre profesionales, LPN y personal sin licenciatura) según cambian el número y la gravedad de las afecciones de los pacientes.',
        },
      ],
    },
    {
      points: 5000,
      isCheckpoint: true,
      category: 'Planificación y dotación de personal',
      questions: [
        {
          question: '¿Qué modelo de prestación de asistencia se centra en la totalidad de un episodio de enfermedad y es coordinado por una gestora del caso, con origen en la psiquiatría y el trabajo social?',
          options: ['Gestión del caso', 'Enfermería modular', 'Práctica de colaboración', 'Enfermería de equipo'],
          correctIndex: 0,
          hint: 'La gestión del caso tiene su origen en la psiquiatría y el trabajo social; una gestora del caso coordina y supervisa toda la asistencia que recibe un paciente a lo largo de un episodio completo de enfermedad, a menudo usando trayectorias clínicas.',
        },
        {
          question: '¿Qué organización asumió a principios de la década de 1980 el compromiso de estudiar la escasez de enfermeras, dando origen al concepto de hospitales "magnéticos"?',
          options: [
            'La Joint Commission on Accreditation of Hospitals',
            'La American Academy of Nursing',
            'El National Joint Practice Committee',
            'La Occupational Safety and Health Administration',
          ],
          correctIndex: 1,
          hint: 'En 1982 y 1983, la American Nurses Association patrocinó un estudio para identificar variables relacionadas con la contratación, retención y satisfacción laboral de las enfermeras, tomando como muestra instituciones reconocidas por su capacidad de atraer y retener personal.',
        },
        {
          question: 'Entre las 14 características del magnetismo descritas por Urden y Monarch, ¿qué significa la "autonomía" de la enfermera?',
          options: [
            'La posibilidad de elegir libremente el turno sin ninguna restricción institucional',
            'La ausencia total de supervisión por parte de la dirección de enfermería',
            'La capacidad exclusiva de fijar el propio salario',
            'La expectativa de que las enfermeras ejercerán un juicio independiente de acuerdo con los estándares profesionales',
          ],
          correctIndex: 3,
          hint: 'Esta característica del magnetismo aparece junto a otras como la calidad del liderazgo, una estructura organizativa plana y descentralizada, y modelos de cuidados profesionalizados en los que las enfermeras son responsables de la asistencia que coordinan.',
        },
        {
          question: '¿Qué sistema de clasificación de pacientes, introducido en 1970, identifica aproximadamente 50 actividades de asistencia directa e indirecta al paciente?',
          options: ['Medicus', 'TISS', 'GRASP', 'ENEPCS'],
          correctIndex: 2,
          hint: 'Este sistema, muy laborioso pero todavía utilizado, exige realizar los cálculos cada 12 horas y forma parte de un sistema de información multidimensional que incluye evaluaciones sobre dotación de plantilla, coste, identificación, presupuesto y calidad.',
        },
        {
          question: '¿Por qué el capítulo señala que la renovación (turnover) de personal de enfermería resulta especialmente cara para una institución?',
          options: [
            'Porque obliga por ley a pagar una indemnización equivalente a un año de sueldo',
            'Porque es costoso reclutar, orientar y preparar a las nuevas enfermeras, además de las pérdidas por camas cerradas o tiempo extra',
            'Porque cada nueva contratación requiere una auditoría externa obligatoria',
            'Porque reduce automáticamente la categoría de hospital magnético de la institución',
          ],
          correctIndex: 1,
          hint: 'Además de los desembolsos directos en marketing, entrevistas y orientación, se pierden ingresos cuando se cierran camas o se difieren procedimientos programados por falta de personal, lo que puede llevar a un aumento del cociente paciente/enfermera.',
        },
      ],
    },
    {
      points: 7000,
      isCheckpoint: false,
      category: 'Evaluación y disciplina del personal',
      questions: [
        {
          question: '¿Cómo se denomina el error de evaluación en el que una única característica positiva del empleado eleva la calificación del resto de sus atributos?',
          options: ['Efecto halo', 'Efecto cuerno', 'Efecto contraste', 'Efecto de tendencia central'],
          correctIndex: 0,
          hint: 'El efecto halo ocurre cuando una característica positiva y llamativa de un empleado contamina positivamente la calificación del resto de sus atributos, aunque no estén relacionados entre sí.',
        },
        {
          question: '¿Cómo se denomina el error de evaluación opuesto al efecto halo, en el que el evaluador se muestra hipercrítico y califica al personal más bajo de lo que merece?',
          options: ['Efecto de proximidad', 'Efecto halo', 'Efecto cuerno', 'Distribución forzada'],
          correctIndex: 2,
          hint: 'Los coordinadores perfeccionistas, o que comparan el rendimiento actual de una persona con cómo rindió anteriormente, tienen más posibilidades de incurrir en este error, calificando con más dureza a quienes realizan tareas con las que están muy familiarizados.',
        },
        {
          question: '¿Qué error de evaluación se produce cuando el evaluador limita sus calificaciones a un rango muy estrecho de puntuaciones, evitando tanto los extremos altos como los bajos?',
          options: ['Efecto de proximidad', 'Efecto de tendencia central', 'Efecto cuerno', 'Efecto halo'],
          correctIndex: 1,
          hint: 'Este efecto surge de la tendencia del evaluador a evitar puntuaciones extremas; el capítulo señala que puede minimizarse aplicando una técnica de distribución forzada.',
        },
        {
          question: '¿Qué método de gestión del rendimiento consiste en descripciones objetivas del comportamiento, registrando qué se observó, quién lo observó, cuándo, dónde y haciendo qué?',
          options: ['Listas de comprobación', 'Notas anecdóticas', 'Escalas de clasificación', 'Distribución forzada'],
          correctIndex: 1,
          hint: 'En estas anotaciones deberían evitarse palabras cargadas de significado como "bueno" o "malo", y son más útiles cuando se acumulan varias observaciones breves a lo largo del tiempo para identificar un patrón de comportamiento.',
        },
        {
          question: '¿Para qué tipo de variables son especialmente útiles las listas de comprobación como método de evaluación del rendimiento, según el capítulo?',
          options: [
            'Exclusivamente para evaluar el liderazgo de la alta dirección',
            'Solo para medir resultados financieros de la unidad',
            'Únicamente para procesos de acreditación externa',
            'Para variables tangibles, como el inventario de suministros, aunque también pueden usarse para evaluar aptitudes',
          ],
          correctIndex: 3,
          hint: 'Con este método, el coordinador valora categóricamente la presencia o la ausencia de las características o los comportamientos deseados; lo más aconsejable es enumerar solo las conductas esenciales para un rendimiento satisfactorio, determinadas de antemano.',
        },
      ],
    },
    {
      points: 9000,
      isCheckpoint: false,
      category: 'Evaluación y disciplina del personal',
      questions: [
        {
          question: '¿Qué técnica de evaluación obliga al evaluador a clasificar al personal siguiendo una distribución en forma de campana, asumiendo que el grupo es representativo de la población total?',
          options: ['Distribución forzada', 'Comparación por parejas', 'Escala de clasificación gráfica', 'Gestión por objetivos'],
          correctIndex: 0,
          hint: 'La distribución forzada aplica una curva en forma de campana y obliga a ubicar a la mayoría del personal en la categoría intermedia, dejando solo a unos pocos en los extremos alto y bajo.',
        },
        {
          question: '¿Qué proceso de evaluación consiste en que un grupo de enfermeras licenciadas en activo evalúa la calidad del rendimiento profesional de otras enfermeras?',
          options: ['Retroalimentación de 360 grados', 'Autoevaluación', 'Revisión por pares', 'Distribución forzada'],
          correctIndex: 2,
          hint: 'Este proceso proporciona un mecanismo para compartir ideas, comparar la consistencia del rendimiento con una serie de estándares, reconocer un rendimiento sobresaliente e identificar áreas que necesitan mayor desarrollo.',
        },
        {
          question: '¿Qué combina el sistema de valoración conocido como retroalimentación de 360 grados?',
          options: [
            'Únicamente la opinión del coordinador directo del empleado',
            'Diferentes tipos de recursos, como la capacitación personal y por subordinados, la revisión externa y las respuestas administrativas',
            'Solo los resultados de exámenes escritos estandarizados',
            'Exclusivamente la autoevaluación del propio empleado',
          ],
          correctIndex: 1,
          hint: 'Este sistema genera una información creíble, disminuye el sesgo del supervisor, respalda el entorno de equipo y el desarrollo profesional, aunque los receptores a veces se resisten a las respuestas y consume bastante tiempo aplicarlo.',
        },
        {
          question: '¿Qué método de gestión del rendimiento utiliza incidentes críticos del comportamiento del trabajador, calificando en una escala de cinco puntos desde "casi nunca" hasta "casi siempre"?',
          options: [
            'Escala de clasificación por porcentajes',
            'Comparación por parejas',
            'Escalas de observación del comportamiento (EOC)',
            'Gestión por objetivos',
          ],
          correctIndex: 2,
          hint: 'Este sistema aprovecha ciertos puntos fuertes de la escala de clasificación fijada en el comportamiento (ECFC) y evita algunas de sus desventajas; es relativamente fiable y bien comprendido, aunque lleva tiempo y su desarrollo resulta caro.',
        },
        {
          question: 'Según el capítulo, ¿por qué la autoevaluación promueve la dignidad y el respeto por uno mismo dentro de un proceso de capacitación del rendimiento?',
          options: [
            'Porque sustituye por completo la necesidad de que el coordinador evalúe al empleado',
            'Porque garantiza automáticamente calificaciones más altas que cualquier otro método',
            'Porque elimina la necesidad de fijar estándares de rendimiento',
            'Porque el propio personal constituye la mejor fuente de información sobre su trabajo y participa activamente en el proceso',
          ],
          correctIndex: 3,
          hint: 'Esta estrategia, menos estructurada, se usa en organizaciones participativas y convierte al coordinador en un instructor en lugar de un juez; sin embargo, aplicada de forma aislada puede mostrar un cuadro impreciso, por lo que conviene contrastarla con otros datos.',
        },
      ],
    },
    {
      points: 12000,
      isCheckpoint: false,
      category: 'Evaluación y disciplina del personal',
      questions: [
        {
          question: '¿Qué sistema de capacitación del rendimiento centra la evaluación en el logro de objetivos y resultados acordados mutuamente, en lugar de en rasgos de personalidad?',
          options: ['Gestión por objetivos (GPO)', 'Revisión por pares', 'Retroalimentación de 360 grados', 'Escala de observación del comportamiento (EOC)'],
          correctIndex: 0,
          hint: 'La gestión por objetivos fija de mutuo acuerdo entre el coordinador y el empleado unos resultados concretos, medibles y con plazo definido, y evalúa el rendimiento comparando lo logrado con esos objetivos.',
        },
        {
          question: '¿En qué método de entrevista de capacitación el coordinador habla la mitad del tiempo y escucha, refleja y sintetiza los sentimientos y desacuerdos del empleado, sin tratar de refutarlos?',
          options: ['Hablar y vender', 'Hablar y escuchar', 'Resolución de problemas', 'Establecimiento de objetivos'],
          correctIndex: 1,
          hint: 'Este método funciona mejor cuando existe respeto hacia el entrevistador; ayuda a reducir las conductas defensivas del empleado, que se siente aceptado, aunque no siempre desarrolla la necesidad real de cambiar.',
        },
        {
          question: '¿Qué rol asume el entrevistador en el método de entrevista de capacitación de "resolución de problemas"?',
          options: [
            'El de juez, que expone su evaluación y trata de persuadir al empleado',
            'El de vendedor, que debe convencer al empleado de sus conclusiones',
            'El de ayudante, para estimular el crecimiento y el desarrollo del entrevistado',
            'El de observador pasivo, sin ninguna intervención en la conversación',
          ],
          correctIndex: 2,
          hint: 'En este método se supone que puede producirse un cambio sin corregir explícitamente los defectos, ya que el debate de los problemas genera ideas nuevas; el miembro del personal lleva el peso de la charla mientras el entrevistador escucha y plantea preguntas aclaratorias.',
        },
        {
          question: '¿Hacia qué momento está orientado el método de entrevista de capacitación de "establecimiento de objetivos"?',
          options: [
            'El pasado, revisando exclusivamente errores ya cometidos',
            'El futuro, centrándose en el rendimiento que el empleado logrará',
            'El presente inmediato, sin ninguna planificación',
            'Ninguno en particular, ya que se centra solo en sentimientos',
          ],
          correctIndex: 1,
          hint: 'Este método integra los objetivos de rendimiento institucionales y personales, fomenta que las personas decidan cómo hacer su trabajo porque se centra en los resultados y no en los métodos, e implica una gestión participativa.',
        },
        {
          question: '¿Quiénes redactan conjuntamente el informe de capacitación del rendimiento, según el capítulo?',
          options: [
            'Únicamente el departamento de Recursos Humanos',
            'El coordinador y la propia enfermera',
            'Solamente un comité externo de acreditación',
            'Solo los compañeros de trabajo del área, sin el coordinador',
          ],
          correctIndex: 1,
          hint: 'Este informe debe ser fiable, válido y preciso, mostrar los progresos logrados y aportar ilustraciones que sustenten los juicios de valor; si ambos han guardado notas valoradas periódicamente, la enfermera se sentirá más libre para ser honesta sobre sus puntos fuertes y débiles.',
        },
      ],
    },
    {
      points: 15000,
      isCheckpoint: false,
      category: 'Evaluación y disciplina del personal',
      questions: [
        {
          question:
            'En la entrevista de capacitación, ¿qué método se caracteriza porque el coordinador comunica la evaluación y trata de persuadir al empleado para que mejore, mientras este escucha la mayor parte del tiempo?',
          options: ['Hablar y vender', 'Hablar y escuchar', 'Resolución de problemas', 'Establecimiento de objetivos'],
          correctIndex: 0,
          hint: 'En el método de hablar y vender, el coordinador actúa como juez: expone su evaluación y utiliza su autoridad para convencer al empleado de que corrija sus debilidades, dejando poco espacio para el diálogo.',
        },
        {
          question: 'Entre los principios de las actuaciones disciplinarias, ¿por qué se recomienda actuar con presteza, sin demorar la sanción?',
          options: [
            'Porque las leyes laborales exigen sancionar dentro de las primeras 24 horas',
            'Porque una sanción rápida siempre evita cualquier apelación posterior',
            'Porque el coordinador pierde autoridad si consulta antes con Recursos Humanos',
            'Porque si se retrasa la actuación disciplinaria, la relación entre la sanción y la infracción puede perder claridad',
          ],
          correctIndex: 3,
          hint: 'Aunque los coordinadores deben investigar los hechos con cuidado antes de actuar, posponer demasiado una actuación disciplinaria desagradable puede hacer que se pierda de vista la conexión entre lo ocurrido y la consecuencia aplicada.',
        },
        {
          question: 'Según los principios de las actuaciones disciplinarias, antes de sancionar a un empleado, ¿qué debe hacer el coordinador?',
          options: [
            'Aplicar la sanción máxima posible para prevenir futuras infracciones',
            'Recopilar los hechos, comprobar las alegaciones, hablar con los testigos y escuchar la versión del acusado',
            'Consultar únicamente con el sindicato antes de cualquier otra acción',
            'Esperar a que el empleado reconozca espontáneamente su error',
          ],
          correctIndex: 1,
          hint: 'Dado que las actuaciones disciplinarias tienen consecuencias graves, el coordinador debe proceder con cautela y aceptar el relato del empleado, al menos hasta que se compruebe la veracidad de las alegaciones.',
        },
        {
          question: '¿Qué debe constar en una reprimenda por escrito, según el capítulo?',
          options: [
            'Únicamente la firma del director general de la institución',
            'Solo una descripción genérica de "mal comportamiento", sin más detalle',
            'El nombre del trabajador y del coordinador, los hechos, el plan de corrección y las consecuencias de una repetición futura',
            'Una copia de todo el expediente académico del empleado',
          ],
          correctIndex: 2,
          hint: 'Se recomienda que el coordinador y el empleado desarrollen juntos por escrito un plan de mejora con un plazo determinado; el trabajador debería firmar el informe para dejar constancia de que lo leyó y recibió una copia.',
        },
        {
          question: '¿Cuándo es apropiado que un coordinador opte por una reprimenda verbal en lugar de una sanción más grave?',
          options: [
            'Únicamente cuando el sindicato lo autoriza expresamente por escrito',
            'Solo después de haber aplicado ya tres reprimendas por escrito',
            'Para infracciones menores que se hayan producido por primera vez',
            'Nunca, ya que el capítulo la considera una sanción obsoleta',
          ],
          correctIndex: 2,
          hint: 'Esta sanción tiene un valor limitado más allá de advertir con amabilidad al empleado sobre la necesidad de corregir su conducta; como no queda nada por escrito y se realiza en privado, resulta difícil demostrar después que la advertencia se formuló.',
        },
      ],
    },
    {
      points: 20000,
      isCheckpoint: false,
      category: 'Evaluación y disciplina del personal',
      questions: [
        {
          question: 'Según los principios de las actuaciones disciplinarias, al sancionar a una enfermera el coordinador debe hacer hincapié en...',
          options: ['El hecho inaceptable, no en la persona del empleado', 'Los antecedentes personales del empleado', 'La opinión de los compañeros de trabajo', 'El historial académico del empleado'],
          correctIndex: 0,
          hint: 'Uno de los principios de la disciplina eficaz es señalar exactamente qué conducta concreta fue inadecuada, sin convertir la sanción en un juicio sobre la valía personal del empleado.',
        },
        {
          question: '¿En qué consiste la "disciplina sin sanción", a diferencia de la disciplina progresiva tradicional?',
          options: [
            'En eliminar por completo cualquier consecuencia ante una infracción grave',
            'En aplicar siempre el despido inmediato ante la primera infracción',
            'En una suspensión disciplinaria con sueldo, para demostrar que el coordinador busca sinceramente el cambio y la aceptación del trabajador',
            'En dejar que sean los compañeros de trabajo quienes decidan la sanción',
          ],
          correctIndex: 2,
          hint: 'A diferencia de la disciplina progresiva, que va de la reprimenda verbal a la escrita, la suspensión y finalmente el despido, este enfoque exige al empleado asumir la responsabilidad de sus propios actos y decidir si se compromete a corregir su conducta o acepta el despido.',
        },
        {
          question: 'En la modificación de la conducta del empleado, ¿qué efecto tiene el refuerzo positivo sobre el comportamiento deseado?',
          options: [
            'Disminuye siempre la probabilidad de que se repita la conducta',
            'Aumenta la probabilidad de que se produzca el comportamiento deseado, sobre todo cuanto antes se aplique después de dicho comportamiento',
            'No tiene ningún efecto medible sobre la conducta futura',
            'Solo es eficaz si se aplica exactamente una vez por semana',
          ],
          correctIndex: 1,
          hint: 'Este refuerzo puede ser tan sutil como una sonrisa o un reconocimiento verbal; el capítulo señala que el rendimiento reforzado de forma intermitente, en lugar de constante, resulta más resistente a la extinción.',
        },
        {
          question: '¿Cuál de los siguientes es un cambio psicosocial mencionado en el capítulo como posible signo de abuso de sustancias en un empleado?',
          options: [
            'Un aumento sostenido y documentado de la puntualidad',
            'Una mejora notable y constante en la calidad del trabajo',
            'Mayor participación voluntaria en las reuniones sociales del equipo',
            'Irritabilidad, mal humor y tendencia a aislarse',
          ],
          correctIndex: 3,
          hint: 'Entre los signos se incluyen también cambios sociales, como comer a solas y evitar las reuniones, y cambios en el aspecto personal; entre los síntomas físicos figuran el olor a alcohol, el lenguaje farfullado y la marcha inestable.',
        },
        {
          question: '¿Qué efecto tienen las normas de asistencia documentadas sobre los índices de ausencias del personal, según el capítulo?',
          options: [
            'No producen ningún efecto medible sobre el absentismo',
            'Influyen de forma notable en la disminución de las ausencias',
            'Aumentan el absentismo porque generan resentimiento',
            'Solo son eficaces si se aplican exclusivamente al personal nuevo',
          ],
          correctIndex: 1,
          hint: 'El capítulo señala que los coordinadores deben asegurarse de que existen normas de asistencia, que estas no recompensan la falta de asistencia y que se cumplen con rigor; también compara cómo las bajas remuneradas influyen en la tasa real de ausencias.',
        },
      ],
    },
  ],
};
