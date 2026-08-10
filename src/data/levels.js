/**
 * @typedef {Object} Question
 * @property {string} question
 * @property {string[]} options - exactly 4
 * @property {number} correctIndex - 0-3
 * @property {string} hint - shown via el comodín "Consultar el libro"
 *
 * @typedef {Object} Level
 * @property {number} chapter - 1-15, coincide con el capítulo del libro
 * @property {'Liderazgo'|'Gestión'} part
 * @property {string} category - etiqueta corta en español
 * @property {number} points - puntaje acumulado al superar este nivel
 * @property {boolean} isCheckpoint - si es un "salvavidas" de puntaje
 * @property {Question[]} questions - exactamente 5
 */

/** @type {Level[]} */
export const LEVELS = [
  {
    chapter: 1,
    part: 'Liderazgo',
    category: 'Comunicaciones',
    points: 100,
    isCheckpoint: false,
    questions: [
      {
        question:
          'En el proceso de comunicación, ¿cómo se llama el paso en el que el emisor traduce su mensaje en palabras, símbolos o conducta no verbal?',
        options: ['Ideación', 'Recepción', 'Codificación', 'Retroalimentación'],
        correctIndex: 2,
        hint: 'El proceso de comunicación tiene seis pasos, desde que el emisor decide compartir una idea hasta que recibe una respuesta evaluativa. Uno de esos pasos consiste en traducir el significado en símbolos comprensibles, como palabras habladas, escritas o gestos, antes de enviarlo.',
      },
      {
        question:
          '¿Qué sistema de comunicación en grupos pequeños resulta rápido y adecuado para problemas simples, aunque genera baja moral entre sus integrantes?',
        options: ['Cadena', 'Rueda', 'Círculo', 'Canales'],
        correctIndex: 0,
        hint: 'Los estudios sobre comunicación en grupos pequeños identificaron varias redes posibles, cada una con ventajas distintas según la complejidad del problema. En esta red, la persona ubicada en un punto central funciona como líder de forma estable, lo que agiliza la resolución de problemas simples, pero esa misma estructura mantiene baja la moral del grupo.',
      },
      {
        question: '¿A quiénes se les atribuye la creación de la Ventana de Johari, usada para analizar la retroalimentación entre una persona y su grupo?',
        options: ['Eric Berne y Thomas Harris', 'Muriel James y Dorothy Jongeward', 'Whetten y Cameron', 'Joseph Luft y Harry Ingham'],
        correctIndex: 3,
        hint: 'Este instrumento organiza en cuatro cuadrantes la información que una persona conoce o desconoce sobre sí misma, y la que el grupo conoce o desconoce sobre ella. El nombre del modelo combina los nombres de pila de sus dos creadores.',
      },
      {
        question: 'Según Eric Berne, ¿cuáles son los tres estados del ego que describe el análisis transaccional?',
        options: ['Pasivo, agresivo y asertivo', 'Padre, niño y adulto', 'Ideación, codificación y transmisión', 'Explosivas, beligerantes y demandantes'],
        correctIndex: 1,
        hint: 'El análisis transaccional sostiene que, al comunicarse, cada persona actúa desde uno de tres estados posibles: uno vinculado a normas y valores aprendidos, otro dominado por las emociones inmediatas, y otro asociado al razonamiento objetivo y la resolución de problemas.',
      },
      {
        question:
          '¿Qué técnica de asertividad consiste en repetir con calma el mismo mensaje las veces que sea necesario, sin dejarse desviar por los argumentos del otro?',
        options: ['Aseveración negativa', 'Interrogatorio negativo', 'Disco rayado', 'Banco de niebla'],
        correctIndex: 2,
        hint: 'Esta técnica permite sostener una petición frente a la resistencia de otra persona, insistiendo con serenidad en lo que se desea en lugar de ceder o entrar a discutir cada objeción que se presente.',
      },
    ],
  },
  {
    chapter: 2,
    part: 'Liderazgo',
    category: 'Gestión del estrés',
    points: 200,
    isCheckpoint: false,
    questions: [
      {
        question: '¿Cómo se llama la fase de la respuesta al estrés en la que el organismo ya no puede sostener el esfuerzo porque agotó sus reservas de energía?',
        options: ['Fase de agotamiento', 'Fase de alarma', 'Fase de resistencia', 'Fase de eustrés'],
        correctIndex: 0,
        hint: 'La respuesta al estrés atraviesa tres etapas sucesivas: una reacción inicial que moviliza recursos, una etapa de mayor consumo de energía para resistir la amenaza, y una última etapa que aparece si la tensión se mantiene demasiado tiempo sin aliviarse.',
      },
      {
        question: '¿Qué buscaba establecer la escala de calificación del reajuste social desarrollada por Holmes y Rahe?',
        options: ['Medir la cantidad de horas de sueño necesarias', 'Evaluar el nivel de asertividad ante los conflictos', 'Calcular el tiempo óptimo para delegar tareas', 'Relacionar eventos vitales con la probabilidad de enfermar'],
        correctIndex: 3,
        hint: 'Esta escala clásica se construyó preguntando a personas que se recuperaban de una enfermedad qué acontecimientos importantes habían vivido antes de enfermarse, y asignando puntuaciones a esos acontecimientos para estimar un riesgo asociado a la acumulación de cambios en la vida.',
      },
      {
        question: '¿Qué técnica de control del estrés utiliza dispositivos que miden señales corporales, como la resistencia cutánea, para ayudar a la persona a autorregularse?',
        options: ['Relajación progresiva', 'Biofeedback', 'Anclaje', 'Entrenamiento autógeno'],
        correctIndex: 1,
        hint: 'Esta técnica conecta a la persona con sensores que muestran respuestas fisiológicas asociadas al nerviosismo o la tensión, de manera que, al observar esas señales, pueda aprender progresivamente a reconocerlas y modificarlas de forma consciente.',
      },
      {
        question: 'Según Covey, ¿cuál de los siguientes es uno de los hábitos para gestionar con efectividad el tiempo personal?',
        options: ['Aumentar las horas de sueño diarias', 'Delegar todas las tareas repetitivas', 'Ser proactivo', 'Evitar establecer objetivos personales'],
        correctIndex: 2,
        hint: 'Este autor propuso siete hábitos para administrar mejor el tiempo propio. El primero de ellos consiste en asumir la responsabilidad de las propias decisiones y acciones, en lugar de reaccionar de forma pasiva ante lo que sucede alrededor.',
      },
      {
        question: '¿Cuál de los siguientes es uno de los cinco aspectos de la delegación descritos en el capítulo?',
        options: ['Circunstancia', 'Autoridad', 'Obligación', 'Responsabilidad'],
        correctIndex: 0,
        hint: 'El capítulo distingue cinco elementos que deben evaluarse antes de asignar una tarea a otra persona, entre ellos el contexto particular en el que se llevará a cabo el trabajo. Esto es distinto de otro grupo de tres conceptos relacionados con lo que asume quien recibe la tarea.',
      },
    ],
  },
  {
    chapter: 3,
    part: 'Liderazgo',
    category: 'Toma de decisiones',
    points: 350,
    isCheckpoint: false,
    questions: [
      {
        question: '¿Cuál es el primer paso del proceso de toma de decisiones descrito en el capítulo?',
        options: ['Explorar las alternativas', 'Evaluar los resultados', 'Elegir la alternativa más deseable', 'Identificar el problema y analizar la situación'],
        correctIndex: 3,
        hint: 'El proceso consta de varios pasos sucesivos que comienzan por comprender con precisión cuál es la dificultad real, antes de buscar posibles soluciones. Sin este primer paso, se corre el riesgo de tratar únicamente los síntomas y no la causa verdadera.',
      },
      {
        question: '¿Qué modelo organizativo de toma de decisiones describe el capítulo como aquel en que las decisiones no se planifican y dependen en gran medida del azar?',
        options: ['Modelo racional', 'Modelo del cubo de basura', 'Modelo burocrático', 'Modelo colegial'],
        correctIndex: 1,
        hint: 'A diferencia de otros modelos que suponen objetivos claros y procesos ordenados, este parte de la idea de que las decisiones surgen de forma incidental, sin planificación real, por lo que sus resultados pueden repetirse por pura casualidad.',
      },
      {
        question: 'En el proceso de toma de decisiones creativas, ¿cómo se llama la fase en la que aparece de forma repentina el descubrimiento de la solución?',
        options: ['Iluminación', 'Preparación', 'Verificación', 'Incubación'],
        correctIndex: 0,
        hint: 'Luego de una etapa previa en la que el problema se sigue procesando de manera inconsciente, puede surgir de golpe una idea clara, incluso en un momento alejado de la tarea, como durante la noche.',
      },
      {
        question: '¿Qué tipo de teoría ética evalúa si una acción es correcta según las consecuencias que produce, más que según la intención de quien actúa?',
        options: ['Deontológica', 'Principalismo', 'Teleológica', 'Obligacionismo'],
        correctIndex: 2,
        hint: 'A diferencia de las teorías que ponen el énfasis en el cumplimiento del deber y en la intención de la persona, este grupo de teorías éticas considera buena una acción cuando genera más bienestar que perjuicio para las personas involucradas.',
      },
      {
        question: '¿Qué instrumento gráfico, que debe su nombre a Henry Gantt, permite visualizar varias tareas pendientes junto con sus plazos de realización?',
        options: ['Técnica PERT', 'Método de la vía crítica', 'Árbol de decisión', 'Gráfica de Gantt'],
        correctIndex: 3,
        hint: 'Esta herramienta organiza en una cuadrícula las tareas o responsabilidades en filas, y el tiempo disponible en columnas, de modo que se pueda marcar el avance de cada actividad conforme se va completando.',
      },
    ],
  },
  {
    chapter: 4,
    part: 'Liderazgo',
    category: 'Motivación y moral',
    points: 500,
    isCheckpoint: false,
    questions: [
      {
        question: 'Según Maslow, ¿qué nivel de necesidades ocupa la cúspide de su pirámide jerárquica?',
        options: ['Necesidades de seguridad y estabilidad', 'Necesidades sociales y de pertenencia', 'Necesidades de autorrealización', 'Necesidades de estima'],
        correctIndex: 2,
        hint: 'Maslow ordenó las necesidades humanas en cinco niveles, comenzando por las fisiológicas en la base. El nivel más alto se relaciona con alcanzar el propio potencial y nuevas experiencias de crecimiento, y solo se persigue plenamente cuando los niveles inferiores ya están cubiertos.',
      },
      {
        question: 'Para Herzberg, ¿qué función cumplen factores como el salario y las condiciones de trabajo?',
        options: ['Son motivadores que impulsan mayor rendimiento', 'Son factores de higiene que solo evitan la insatisfacción', 'Son fuentes exclusivas de refuerzo positivo', 'Son indicadores de la necesidad de autorrealización'],
        correctIndex: 1,
        hint: 'Herzberg diferenció dos grupos de factores laborales: uno vinculado al contexto de trabajo que, cuando falta, genera descontento, y otro vinculado al contenido de la tarea que sí puede elevar el rendimiento. El primer grupo no despierta mayor compromiso, solo evita el malestar.',
      },
      {
        question: 'Según la teoría de la expectativa de Vroom, ¿qué determina la motivación?',
        options: ['La valencia multiplicada por la expectativa de lograrlo', 'La comparación del esfuerzo propio con el de otro', 'La cantidad de refuerzos positivos recibidos recientemente', 'El grado de satisfacción de las necesidades fisiológicas'],
        correctIndex: 0,
        hint: 'Este modelo describe la motivación como la combinación de dos elementos: cuánto desea una persona un resultado determinado y qué tan probable cree que es alcanzarlo mediante su esfuerzo. Vroom representó esa relación como el producto entre ambos factores.',
      },
      {
        question: '¿Qué supuesto caracteriza a la teoría X de McGregor sobre los trabajadores?',
        options: ['Que disfrutan el trabajo y ejercen autocontrol', 'Que buscan sobre todo el crecimiento personal', 'Que evitan el trabajo y requieren control estrecho', 'Que se autoorganizan en círculos de calidad'],
        correctIndex: 2,
        hint: 'McGregor contrastó dos visiones opuestas sobre la naturaleza humana en el trabajo. Una de ellas supone poca ambición, preferencia por la seguridad y necesidad de supervisión cercana y amenazas para rendir; la otra confía en el potencial y la autodirección del personal.',
      },
      {
        question: 'Según McClelland, ¿qué necesidad predomina en quien busca destacar y asumir riesgos calculados?',
        options: ['Necesidad de poder', 'Necesidad de afiliación', 'Necesidad de autorrealización', 'Necesidad de consecución o éxito'],
        correctIndex: 3,
        hint: 'McClelland describió tres necesidades presentes en distinta proporción en cada persona: una centrada en el logro y la superación de metas propias, otra en el control sobre los demás, y una tercera en el deseo de vínculos afectivos en el trabajo.',
      },
    ],
  },
  {
    chapter: 5,
    part: 'Liderazgo',
    category: 'Poder, política y relaciones laborales',
    points: 1000,
    isCheckpoint: true,
    questions: [
      {
        question: '¿En qué se basa principalmente el poder de experto?',
        options: ['En el conocimiento y la competencia técnica', 'En la posición jerárquica formal', 'En la capacidad de aplicar sanciones', 'En las coaliciones con personas influyentes'],
        correctIndex: 0,
        hint: 'Esta fuente de poder no depende del cargo formal que ocupa una persona. Surge del saber, las capacidades y la experiencia que alguien desarrolló en un área puntual, lo que le permite ganarse el respeto de quienes necesitan ese conocimiento.',
      },
      {
        question: "En el proceso legislativo estadounidense, ¿qué es 'la tolva'?",
        options: ['El comité que redacta la versión final', 'La caja donde se deposita el proyecto de ley', 'El grupo que decide un veto presidencial', 'El registro del testimonio de los testigos'],
        correctIndex: 1,
        hint: 'Cuando un legislador presenta un proyecto de ley ante la Cámara o el Senado, existe un recipiente físico cercano a la tribuna donde se coloca formalmente ese proyecto para darle inicio a su trámite.',
      },
      {
        question: '¿Qué buscaba principalmente la Wagner Act (NLRA) de 1935?',
        options: ['Prohibir la discriminación laboral por edad', 'Igualar el sueldo entre hombres y mujeres', 'Frenar la caída salarial y proteger la sindicalización', 'Otorgar permisos no remunerados por enfermedad grave'],
        correctIndex: 2,
        hint: 'Esta ley se sancionó durante una crisis económica profunda, cuando se buscaba impedir que los empleadores redujeran los sueldos sin límite. También dio origen a un organismo encargado de investigar a los patrones que impedían que sus empleados se organizaran.',
      },
      {
        question: 'Para pedir la descertificación de un sindicato, ¿qué porcentaje mínimo debe firmar la petición?',
        options: ['10%', '30%', '50%', '75%'],
        correctIndex: 1,
        hint: 'Este trámite exige un umbral mínimo de firmas del personal para demostrar que existe un interés genuino en dejar de estar representados por el sindicato, aunque en la práctica suele necesitarse un respaldo bastante mayor para que la elección tenga éxito.',
      },
      {
        question: '¿Cuál de estas opciones es una desventaja real de la negociación colectiva?',
        options: ['El equilibrio de poder entre las partes', 'La distribución equitativa del trabajo', 'La dificultad para evitar las huelgas', 'El favorecimiento del profesionalismo'],
        correctIndex: 2,
        hint: 'La negociación colectiva ofrece beneficios como mayor equilibrio de poder y procedimientos de queja, pero también genera relaciones de adversarios entre las partes, sin lograr siempre prevenir los paros laborales organizados por los trabajadores.',
      },
    ],
  },
  {
    chapter: 6,
    part: 'Liderazgo',
    category: 'Gestión y negociación de conflictos',
    points: 1500,
    isCheckpoint: false,
    questions: [
      {
        question: 'Cuando un mismo jefe da instrucciones contradictorias entre sí, ¿qué conflicto de función se produce?',
        options: ['Conflicto entre remitentes', 'Conflicto dentro del remitente', 'Conflicto persona-función', 'Sobrecarga de funciones'],
        correctIndex: 1,
        hint: 'Este tipo de conflicto de rol no proviene de dos fuentes distintas de expectativas que chocan entre sí. Nace de una sola persona que transmite mensajes o espera comportamientos mutuamente incompatibles.',
      },
      {
        question: "¿Qué estrategia de gestión del conflicto combina alta firmeza con alta cooperación, buscando el 'ganar-ganar'?",
        options: ['Evitación', 'Acomodación', 'Colaboración', 'Competencia'],
        correctIndex: 2,
        hint: 'Esta estrategia defiende con firmeza los objetivos propios y, a la vez, mantiene una fuerte disposición a cooperar con la otra parte, integrando distintas perspectivas hasta hallar soluciones satisfactorias para ambos lados.',
      },
      {
        question: 'En la técnica de grupo nominal, ¿por qué se listan ideas en silencio antes de compartirlas?',
        options: ['Para evitar que unos condicionen las ideas de otros', 'Porque el líder define las ideas de antemano', 'Para reducir el número de reuniones del comité', 'Porque el escrito tiene valor legal ante el NLRB'],
        correctIndex: 0,
        hint: 'Este primer paso busca dar tiempo para pensar y reducir la presión de la situación y de la conformidad social, evitando que la discusión se centre antes de tiempo en una sola idea o en la persona más influyente del grupo.',
      },
      {
        question: '¿En la negociación basada en principios, qué se recomienda hacer con las personas y el problema?',
        options: ['Atacar a la persona para debilitar su postura', 'Separar a las personas del problema', 'Fusionar a la persona con el problema', 'Negociar solo con criterios externos, sin personas'],
        correctIndex: 1,
        hint: 'Este enfoque de negociación, distinto del estilo duro y del blando, propone tratar el vínculo con la otra parte de manera separada del asunto en discusión. Así se puede ser firme con el tema sin dañar la relación personal.',
      },
      {
        question: '¿Cuál es la única defensa efectiva del empleador ante una denuncia de acoso sexual?',
        options: ['Argumentar falta de pruebas físicas', 'Demostrar que ocurrió fuera del horario laboral', 'Tener una política y un procedimiento de queja', 'Trasladar solo a la persona acosada'],
        correctIndex: 2,
        hint: 'La organización responde de forma indirecta por las acciones de sus supervisores en los casos de acoso. Por eso necesita contar de antemano con normas claras contra esta conducta y un canal establecido para presentar y resolver quejas.',
      },
    ],
  },
  {
    chapter: 7,
    part: 'Liderazgo',
    category: 'Teorías de liderazgo y gestión',
    points: 2250,
    isCheckpoint: false,
    questions: [
      {
        question: 'Según la teoría de la contingencia de Fiedler, ¿qué tres aspectos de la situación estructuran la función del líder?',
        options: [
          'Carisma, rasgos personales y motivación del grupo',
          'Necesidades del seguidor, visión compartida y recompensas',
          'Relaciones líder-miembro, estructura de la tarea y posición de poder',
          'Comportamiento de tarea y comportamiento de relación',
        ],
        correctIndex: 2,
        hint: 'Fiedler defendía que ningún estilo de liderazgo es efectivo en todas las circunstancias, sino que su éxito depende de qué tan favorable resulta el contexto para quien dirige, evaluado combinando el clima de confianza con el equipo, la claridad de la tarea y la autoridad formal del puesto.',
      },
      {
        question: '¿De qué teoría más amplia deriva House su teoría de la trayectoria-objetivo sobre el liderazgo?',
        options: ['La teoría del gran hombre', 'La teoría de la expectativa', 'La teoría de la contingencia de Fiedler', 'La teoría del rasgo'],
        correctIndex: 1,
        hint: 'Esta teoría de partida sostiene que las personas se esfuerzan cuando confían en que su conducta llevará a un resultado que valoran; House trasladó esa lógica al liderazgo para explicar cómo quien dirige allana el camino del equipo hacia sus metas.',
      },
      {
        question: 'En el modelo de liderazgo situacional de Hersey y Blanchard, ¿qué determina cuál es el estilo más apropiado para el líder?',
        options: ['La posición de poder que ostenta el líder', 'El grado de estructura de la tarea a realizar', 'La puntuación del colaborador menos preferido', 'El nivel de preparación de los seguidores'],
        correctIndex: 3,
        hint: 'El modelo describe cuatro estilos, desde dar instrucciones precisas hasta delegar casi por completo, y sostiene que ninguno es mejor en sí mismo: la elección correcta depende de cuánta capacidad y disposición muestra cada persona del equipo frente a una tarea concreta.',
      },
      {
        question: '¿Cuál de estas características corresponde al liderazgo transaccional y no al transformacional?',
        options: [
          'Establece objetivos para los empleados y ofrece recompensas contingentes',
          'Anima la autogestión y la creatividad del seguidor',
          'Proporciona estimulación intelectual y sentido de dirección',
          'Funciona como una red de colaboradores centrada en el proceso',
        ],
        correctIndex: 0,
        hint: 'Uno de estos dos estilos opera como un intercambio: fija metas de rendimiento y las vincula a beneficios concretos para quien las cumple, apoyándose en la jerarquía y en mantener las cosas como están; el otro busca transformar motivaciones y valores más profundos del seguidor.',
      },
      {
        question: '¿Qué mostraron realmente los estudios de Hawthorne dirigidos por Elton Mayo?',
        options: [
          'Que la iluminación era el factor decisivo en la productividad',
          'Que los rasgos innatos del líder determinaban el rendimiento',
          'Que las normas del grupo pesaban más que los incentivos económicos',
          'Que centralizar la autoridad aumentaba la eficacia de la organización',
        ],
        correctIndex: 2,
        hint: 'En estos experimentos se manipuló primero un factor físico del entorno de trabajo, pero al analizar los resultados con detenimiento se advirtió que el comportamiento de los trabajadores frente a la producción respondía sobre todo a acuerdos tácitos entre compañeros, más que a ese factor o a los planes de pago por rendimiento.',
      },
    ],
  },
  {
    chapter: 8,
    part: 'Gestión',
    category: 'Planificación estratégica y operativa',
    points: 3000,
    isCheckpoint: false,
    questions: [
      {
        question: '¿Cuál es la principal diferencia entre la planificación estratégica y la planificación operativa?',
        options: [
          'Solo la elaboran los gestores de nivel inferior',
          'La estratégica es a largo plazo; la operativa, diaria',
          'La operativa se centra en analizar amenazas externas globales',
          'La estratégica se limita a elaborar el presupuesto de tesorería',
        ],
        correctIndex: 1,
        hint: 'Un tipo de planificación se proyecta varios años hacia adelante y parte de examinar los puntos fuertes y débiles de la organización junto con las oportunidades y amenazas del entorno; el otro tiene un horizonte mucho más corto y suele coincidir con la preparación del presupuesto de cada unidad para el año que comienza.',
      },
      {
        question: '¿Por qué las empresas de servicios sanitarios en Estados Unidos empezaron a utilizar la planificación estratégica a mediados de la década de 1970?',
        options: [
          'Porque la demanda de productos privados empezó a estabilizarse',
          'Porque se generalizaron las capitaciones y los pagos globales',
          'Porque aumentó la competencia entre las organizaciones de salud',
          'Porque el gobierno impuso normas que limitaban los pagos públicos',
        ],
        correctIndex: 3,
        hint: 'Antes de esa década, este tipo de planificación a largo plazo era más propia de empresas privadas de otros sectores; el sector sanitario la adoptó cuando el Estado empezó a poner condiciones estrictas sobre cómo podían usarse los fondos públicos destinados a la salud.',
      },
      {
        question: '¿Qué distingue a los valores de una organización frente a sus metas y estrategias operativas?',
        options: [
          'Son el fundamento de la misión y no cambian con el tiempo',
          'Se revisan junto con el presupuesto cada seis meses',
          'Son la imagen mental de un futuro todavía no alcanzado',
          'Son la secuencia cronológica de los pasos de una tarea',
        ],
        correctIndex: 0,
        hint: 'Este elemento de la planificación se relaciona con lo que la organización considera correcto o importante, y por eso se espera que permanezca estable incluso cuando cambian las estrategias operativas del día a día; no debe confundirse con la imagen de futuro que se persigue ni con los pasos concretos de un proceso.',
      },
      {
        question: '¿Qué distingue a un procedimiento de una política dentro de un servicio de enfermería?',
        options: [
          'Una política nunca puede expresarse de forma oral',
          'El procedimiento afecta siempre a toda la organización',
          'El procedimiento detalla pasos concretos; la política es general',
          'La política se redacta siempre después de aplicar el procedimiento',
        ],
        correctIndex: 2,
        hint: 'Uno de estos dos instrumentos suele limitarse a un departamento o a unas pocas tareas y ordena con precisión qué hacer paso a paso; el otro tiene un alcance más amplio, sirve de base para tomar decisiones futuras y puede haber quedado establecido tanto de palabra como por escrito.',
      },
      {
        question: 'Según la definición del Institute of Medicine citada en el capítulo, ¿qué integra la práctica basada en la evidencia?',
        options: [
          'Solo los resultados de estudios publicados en revistas científicas',
          'Valores del paciente, experiencia clínica y evidencia de investigación',
          'Los protocolos institucionales y las normas administrativas vigentes',
          'La intuición del profesional experto y el reglamento del servicio',
        ],
        correctIndex: 1,
        hint: 'Esta forma de practicar la enfermería no se apoya en un único tipo de información: combina lo que muestran los estudios de mayor calidad con el criterio ganado en la práctica diaria y con las preferencias y circunstancias particulares de la persona atendida.',
      },
    ],
  },
  {
    chapter: 9,
    part: 'Gestión',
    category: 'Gestión económica y marketing',
    points: 4000,
    isCheckpoint: false,
    questions: [
      {
        question: 'En el sistema de pago prospectivo basado en los grupos relacionados con el diagnóstico (GRD), ¿en qué se basa el reembolso al hospital?',
        options: [
          'En la categoría diagnóstica del paciente, no en la estancia',
          'En una cantidad fija mensual pagada por cada persona asegurada',
          'En el número exacto de servicios y procedimientos recibidos',
          'En un descuento pactado entre el hospital y el paciente',
        ],
        correctIndex: 0,
        hint: 'Este sistema dejó de mirar hacia atrás, es decir, hacia lo que costó cada día de hospitalización, para fijar de antemano cuánto se pagará según el tipo de caso que se espera tratar, casi sin importar cuántos días permanezca finalmente internada la persona.',
      },
      {
        question: '¿Qué caracteriza al presupuesto base cero frente al enfoque histórico de presupuestación?',
        options: [
          'Se basa solo en las fluctuaciones estacionales de la demanda',
          'Da por válidos todos los programas del año anterior',
          'Solo puede aplicarse al presupuesto de bienes inmuebles',
          'Cada programa debe justificarse desde cero cada año',
        ],
        correctIndex: 3,
        hint: 'A diferencia de otros métodos que parten de lo aprobado en ejercicios anteriores y lo ajustan, este enfoque exige explicar y defender la necesidad de cada actividad como si el servicio fuera a crearse por primera vez, describiendo distintos niveles posibles de financiación.',
      },
      {
        question: '¿Cómo se comportan los costes variables en relación con el volumen de servicios prestados?',
        options: [
          'Se mantienen sin cambios independientemente del volumen',
          'Varían de forma directamente proporcional al volumen',
          'Aumentan únicamente cuando el volumen llega a cero',
          'Disminuyen a medida que aumenta el número de pacientes',
        ],
        correctIndex: 1,
        hint: 'Este tipo de coste está ligado de forma directa a cuánta actividad se realiza: si aumentan las prestaciones o los pacientes atendidos, crece en la misma proporción, a diferencia de los gastos que la organización debe afrontar aunque no preste ningún servicio ese período.',
      },
      {
        question: 'En la parrilla del Boston Consulting Group, ¿cómo se denominan los productos con potencial de crecimiento alto pero rentabilidad baja?',
        options: ['Vacas', 'Perros', 'Signos de interrogación', 'Valores en alza'],
        correctIndex: 2,
        hint: 'Esta herramienta clasifica los productos o servicios combinando dos ejes: cuánto pueden todavía expandirse en el mercado y cuánto beneficio generan hoy; la categoría en cuestión agrupa a los que exigen inversión porque su futuro aún es incierto, ya que todavía no generan grandes beneficios.',
      },
      {
        question: '¿Cuáles son los cuatro elementos que componen el marketing mix descrito en el capítulo?',
        options: [
          'Producto, precio, distribución y publicidad',
          'Segmentación, posicionamiento, diferenciación y fidelización',
          'Visión, valores, misión y filosofía',
          'Oferta, demanda, utilidad y elasticidad',
        ],
        correctIndex: 0,
        hint: 'Este conjunto de cuatro elementos es lo que una organización combina y ajusta para cada segmento de mercado al que se dirige: qué ofrece, cuánto cuesta, dónde se consigue y cómo se da a conocer.',
      },
    ],
  },
  {
    chapter: 10,
    part: 'Gestión',
    category: 'Estructuras y conceptos organizativos',
    points: 5000,
    isCheckpoint: true,
    questions: [
      {
        question: 'Según la fórmula de Graicunas, si el número de subordinados de un directivo aumenta en progresión aritmética, ¿cómo crece el número de relaciones posibles entre ellos?',
        options: ['En progresión geométrica', 'En progresión aritmética también', 'De forma logarítmica', 'Se mantiene constante'],
        correctIndex: 0,
        hint: 'Aunque el número de subordinados crezca de forma aritmética, la cantidad de posibles interacciones y relaciones entre ellos crece mucho más rápido, en progresión geométrica, según demostró V. A. Graicunas.',
      },
      {
        question: '¿Qué tipo de departamentalización agrupa el trabajo alrededor de un producto, territorio o cliente concreto, en lugar de hacerlo por función especializada?',
        options: ['Departamentalización basada en las metas', 'Departamentalización basada en los procesos', 'Estructura burocrática', 'Gestión matricial'],
        correctIndex: 0,
        hint: 'Este enfoque agrupa el trabajo alrededor de un producto, servicio, cliente o proyecto concreto, en lugar de agruparlo por función especializada, lo que da más autonomía a cada grupo.',
      },
      {
        question: '¿Qué tipo de estructura organizativa se caracteriza por una doble autoridad, entre un gestor funcional y un gestor de proyecto?',
        options: ['Estructura matricial', 'Estructura burocrática', 'Adhocracia', 'Dirección colegiada'],
        correctIndex: 0,
        hint: 'La organización matricial combina una estructura funcional jerárquica con equipos de proyecto, por lo que el personal responde a la vez ante un gestor funcional y ante un gestor de proyecto.',
      },
      {
        question: '¿Cómo se denomina el modelo organizativo flexible y poco jerárquico, opuesto a la burocracia, formado por personas con gran tolerancia a la ambigüedad?',
        options: ['Adhocracia', 'Estructura matricial', 'Gestión doble', 'Dirección colegiada'],
        correctIndex: 0,
        hint: "Es un modelo organizativo flexible y poco jerárquico, pensado para resolver problemas puntuales más que tareas rutinarias, y deriva su nombre de la expresión 'comité ad hoc'.",
      },
      {
        question: '¿Qué principio organizativo establece que cada persona debe rendir cuentas ante un único superior?',
        options: ['Unidad de mando', 'Amplitud del control', 'Descentralización', 'Departamentalización'],
        correctIndex: 0,
        hint: 'Este principio organizativo establece que cada persona debe tener un único jefe ante quien responder, evitando órdenes contradictorias desde distintas líneas de autoridad.',
      },
    ],
  },
  {
    chapter: 11,
    part: 'Gestión',
    category: 'Cultura organizativa, cambio e innovación',
    points: 7000,
    isCheckpoint: false,
    questions: [
      {
        question: 'Según la teoría del cambio de Lewin, ¿cuál es la secuencia correcta de las tres fases del cambio planificado?',
        options: ['Desbloqueo, movimiento y bloqueo', 'Diagnóstico, planificación y evaluación', 'Conocimiento, persuasión y decisión', 'Creación de la relación, diagnóstico y adopción'],
        correctIndex: 0,
        hint: 'Kurt Lewin describió el cambio planificado en tres fases: primero se rompe el equilibrio existente (desbloqueo), luego se avanza hacia la nueva situación (movimiento) y finalmente se estabiliza el cambio logrado (bloqueo).',
      },
      {
        question: "En el modelo de tipos psicológicos de Myers-Briggs, ¿qué caracteriza principalmente a una persona 'introvertida'?",
        options: ['Preferir trabajar sola y en un ambiente tranquilo', 'Comunicarse con libertad y sin pensarlo', 'Decidir la forma de actuar paso a paso', 'Basarse en la lógica para organizar sus ideas'],
        correctIndex: 0,
        hint: "En el modelo de Myers-Briggs, la dimensión 'actitud hacia la vida' distingue entre personas introvertidas, que prefieren la soledad, la calma y pensar antes de actuar, y personas extrovertidas, que se energizan con la interacción social.",
      },
      {
        question: '¿Cuál es la primera fase del proceso de innovación-decisión propuesto por Rogers?',
        options: ['Conocimiento', 'Persuasión', 'Decisión', 'Confirmación'],
        correctIndex: 0,
        hint: 'Rogers describió el proceso de innovación-decisión en cinco fases sucesivas: conocimiento, persuasión, decisión, ejecución y confirmación; todo comienza cuando la persona se informa sobre la existencia de la innovación.',
      },
      {
        question: '¿Cuál es el primer paso del proceso de ocho fases para liderar el cambio propuesto por Kotter?',
        options: ['Determinar el grado de urgencia del cambio', 'Crear una visión de futuro y una estrategia', 'Consolidar los éxitos conseguidos', 'Diagnosticar los problemas de la organización'],
        correctIndex: 0,
        hint: 'El modelo de ocho pasos de Kotter para liderar el cambio comienza generando un sentido de urgencia entre los miembros de la organización, antes incluso de formar equipos o definir una visión.',
      },
      {
        question: '¿Qué tipo de cultura organizativa, según la clasificación de Cooke y Rousseau, se basa en el poder, la rivalidad y el perfeccionismo?',
        options: ['Cultura agresiva-defensiva', 'Cultura organizativa positiva', 'Cultura pasiva-agresiva', 'Cultura formativa'],
        correctIndex: 0,
        hint: 'Cooke y Rousseau distinguieron tres tipos de cultura organizativa: la positiva (basada en la autorrealización), la pasiva-agresiva (evitativa y dependiente) y la agresiva-defensiva, centrada en el poder, la competencia y el perfeccionismo.',
      },
    ],
  },
  {
    chapter: 12,
    part: 'Gestión',
    category: 'Selección y desarrollo de personal',
    points: 9000,
    isCheckpoint: false,
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
        question: '¿Cómo se denomina la técnica que consiste en trasladar al personal de enfermería entre diferentes turnos, unidades o pacientes?',
        options: ['Rotación del puesto de trabajo', 'Enriquecimiento del puesto de trabajo', 'Simplificación del puesto de trabajo', 'Evaluación del puesto de trabajo'],
        correctIndex: 0,
        hint: 'La rotación es una técnica horizontal que traslada al personal entre distintas unidades, turnos o pacientes; a diferencia del enriquecimiento (vertical) o la simplificación, no reduce ni amplía la complejidad de las tareas, solo las varía.',
      },
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
        question: '¿Cómo se denomina el sesgo del entrevistador que consiste en emitir un juicio global basado en las apariencias de la persona solicitante?',
        options: ['Efecto halo', 'Fiabilidad intraevaluador', 'Validez de la entrevista', 'Discriminación inversa'],
        correctIndex: 0,
        hint: 'El efecto halo ocurre cuando el entrevistador forma un juicio global sobre la persona solicitante a partir de una sola característica visible, en vez de evaluar objetivamente sus calificaciones.',
      },
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
    ],
  },
  {
    chapter: 13,
    part: 'Gestión',
    category: 'Planificación y dotación de personal',
    points: 12000,
    isCheckpoint: false,
    questions: [
      {
        question:
          '¿Qué modelo de asignación de personal se caracteriza porque una enfermera profesional asume la responsabilidad total de un grupo reducido de pacientes durante las 24 horas del día, mientras dure su hospitalización?',
        options: ['Enfermería primaria', 'Enfermería funcional', 'Método del caso', 'Enfermería de equipo'],
        correctIndex: 0,
        hint: 'En la enfermería primaria, ideada por Marie Manthey, una enfermera profesional es responsable de la totalidad de la asistencia de un grupo reducido de pacientes durante toda su estancia, aunque otra enfermera asociada la reemplace cuando no está de turno.',
      },
      {
        question: '¿Qué modelo de dotación de personal divide el trabajo de forma jerárquica según tareas específicas (por ejemplo, una enfermera encargada solo de la medicación)?',
        options: ['Enfermería funcional', 'Enfermería modular', 'Gestión del caso', 'Enfermería primaria'],
        correctIndex: 0,
        hint: 'La enfermería funcional organiza el trabajo por tareas específicas asignadas jerárquicamente según el nivel de competencia del personal; es eficiente y de bajo coste, pero tiende a fragmentar y despersonalizar la asistencia.',
      },
      {
        question: '¿Cómo se conoce el patrón de turnos de diez horas en el que el personal trabaja siete días seguidos y luego descansa otros siete días?',
        options: ['7/70', 'Programación en bloque', 'Turno de doce horas', 'Autoprogramación'],
        correctIndex: 0,
        hint: 'El patrón 7/70 consiste en trabajar siete jornadas de diez horas seguidas y descansar los siete días siguientes, una variante de los turnos largos pensada para concentrar el tiempo de trabajo.',
      },
      {
        question: '¿Qué sistema de programación de la plantilla consiste en que las propias enfermeras elaboran y acuerdan colectivamente sus horarios de trabajo?',
        options: ['Autoprogramación', 'Programación centralizada', 'Programación descentralizada', 'Programación en bloque'],
        correctIndex: 0,
        hint: 'En la autoprogramación son las propias enfermeras de plantilla quienes elaboran su horario de forma colectiva, respetando las políticas del servicio, lo que suele aumentar la autonomía y la satisfacción laboral.',
      },
      {
        question: '¿Qué modelo de prestación de asistencia se centra en la totalidad de un episodio de enfermedad y es coordinado por una gestora del caso, con origen en la psiquiatría y el trabajo social?',
        options: ['Gestión del caso', 'Enfermería modular', 'Práctica de colaboración', 'Enfermería de equipo'],
        correctIndex: 0,
        hint: 'La gestión del caso tiene su origen en la psiquiatría y el trabajo social; una gestora del caso coordina y supervisa toda la asistencia que recibe un paciente a lo largo de un episodio completo de enfermedad, a menudo usando trayectorias clínicas.',
      },
    ],
  },
  {
    chapter: 14,
    part: 'Gestión',
    category: 'Evaluación y disciplina del personal',
    points: 15000,
    isCheckpoint: false,
    questions: [
      {
        question: '¿Cómo se denomina el error de evaluación en el que una única característica positiva del empleado eleva la calificación del resto de sus atributos?',
        options: ['Efecto halo', 'Efecto cuerno', 'Efecto contraste', 'Efecto de tendencia central'],
        correctIndex: 0,
        hint: 'El efecto halo ocurre cuando una característica positiva y llamativa de un empleado contamina positivamente la calificación del resto de sus atributos, aunque no estén relacionados entre sí.',
      },
      {
        question: '¿Qué técnica de evaluación obliga al evaluador a clasificar al personal siguiendo una distribución en forma de campana, asumiendo que el grupo es representativo de la población total?',
        options: ['Distribución forzada', 'Comparación por parejas', 'Escala de clasificación gráfica', 'Gestión por objetivos'],
        correctIndex: 0,
        hint: 'La distribución forzada aplica una curva en forma de campana y obliga a ubicar a la mayoría del personal en la categoría intermedia, dejando solo a unos pocos en los extremos alto y bajo.',
      },
      {
        question: '¿Qué sistema de capacitación del rendimiento centra la evaluación en el logro de objetivos y resultados acordados mutuamente, en lugar de en rasgos de personalidad?',
        options: ['Gestión por objetivos (GPO)', 'Revisión por pares', 'Retroalimentación de 360 grados', 'Escala de observación del comportamiento (EOC)'],
        correctIndex: 0,
        hint: 'La gestión por objetivos fija de mutuo acuerdo entre el coordinador y el empleado unos resultados concretos, medibles y con plazo definido, y evalúa el rendimiento comparando lo logrado con esos objetivos.',
      },
      {
        question:
          'En la entrevista de capacitación, ¿qué método se caracteriza porque el coordinador comunica la evaluación y trata de persuadir al empleado para que mejore, mientras este escucha la mayor parte del tiempo?',
        options: ['Hablar y vender', 'Hablar y escuchar', 'Resolución de problemas', 'Establecimiento de objetivos'],
        correctIndex: 0,
        hint: 'En el método de hablar y vender, el coordinador actúa como juez: expone su evaluación y utiliza su autoridad para convencer al empleado de que corrija sus debilidades, dejando poco espacio para el diálogo.',
      },
      {
        question: 'Según los principios de las actuaciones disciplinarias, al sancionar a una enfermera el coordinador debe hacer hincapié en...',
        options: ['El hecho inaceptable, no en la persona del empleado', 'Los antecedentes personales del empleado', 'La opinión de los compañeros de trabajo', 'El historial académico del empleado'],
        correctIndex: 0,
        hint: 'Uno de los principios de la disciplina eficaz es señalar exactamente qué conducta concreta fue inadecuada, sin convertir la sanción en un juicio sobre la valía personal del empleado.',
      },
    ],
  },
  {
    chapter: 15,
    part: 'Gestión',
    category: 'Mejora continua de la calidad',
    points: 20000,
    isCheckpoint: false,
    questions: [
      {
        question: "¿Qué experto en calidad es conocido por sus 'catorce puntos' para transformar la gestión, entre ellos 'desterrar el miedo' e 'instituir el liderazgo'?",
        options: ['Deming', 'Juran', 'Crosby', 'Donabedian'],
        correctIndex: 0,
        hint: 'Deming es célebre por sus catorce puntos para transformar la gestión de la calidad, entre los que se incluyen desterrar el miedo en el lugar de trabajo, instituir el liderazgo y adoptar una nueva filosofía de mejora constante.',
      },
      {
        question: "¿Cómo se denominan los tres procesos interrelacionados de la 'trilogía de la calidad' propuesta por Juran?",
        options: ['Planificación, control y mejora de la calidad', 'Estructura, proceso y resultado', 'Detección, corrección y prevención', 'Entrada, proceso y salida'],
        correctIndex: 0,
        hint: 'La trilogía de Juran organiza la gestión de la calidad en tres procesos que se retroalimentan: primero se planifica pensando en las necesidades del consumidor, luego se controla comparando el rendimiento real con los objetivos, y finalmente se mejora con proyectos concretos.',
      },
      {
        question: "¿Qué experto en calidad es conocido por el concepto de 'cero defectos' y por definir la calidad como la conformidad con los requisitos?",
        options: ['Crosby', 'Deming', 'Juran', 'Berwick'],
        correctIndex: 0,
        hint: "Crosby sostenía que la calidad se logra mediante la prevención de errores desde el principio, no mediante la inspección posterior, y fijó como meta ideal el 'defecto cero' en todos los procesos.",
      },
      {
        question: '¿Qué autor aplicó a la asistencia sanitaria un modelo de evaluación de la calidad basado en estructura, procesos y resultados?',
        options: ['Donabedian', 'Berwick', 'Deming', 'Juran'],
        correctIndex: 0,
        hint: 'Donabedian es conocido por trasladar a la asistencia sanitaria un modelo de tres componentes —estructura, procesos y resultados— para valorar sistemáticamente la calidad de la atención.',
      },
      {
        question: '¿Cómo se denomina también el diagrama de causa y efecto, utilizado para identificar las causas originales de un problema con una estructura similar al esqueleto de un pez?',
        options: ['Diagrama de Ishikawa (espina de pez)', 'Diagrama de Pareto', 'Diagrama de flujo', 'Diagrama de dispersión'],
        correctIndex: 0,
        hint: "También llamado diagrama en espina de pez, organiza visualmente las posibles causas de un problema en categorías (personas, métodos, materiales, equipo), llegando a las causas de fondo mediante la pregunta repetida de '¿por qué?'.",
      },
    ],
  },
];
