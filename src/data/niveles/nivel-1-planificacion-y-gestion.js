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
export const NIVEL_1 = {
  id: 'planificacion-y-gestion',
  title: 'Planificación y gestión',
  description: 'Planificación estratégica y operativa, gestión económica y marketing, y mejora continua de la calidad.',
  unlockDate: '2026-08-10',
  levels: [
    {
      points: 100,
      isCheckpoint: false,
      category: 'Planificación estratégica y operativa',
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
          hint: 'Un tipo de planificación se proyecta varios años hacia adelante y parte de examinar los puntos fuertes y débiles de la organización junto con las oportunidades y amenazas del entorno; el otro tiene un horizonte mucho más corto y suele coincidir con la actividad asistencial diaria, semanal y mensual.',
        },
        {
          question: '¿Qué imagen mental, todavía no visible, representa hacia dónde quiere llegar la organización, según las herramientas de la planificación estratégica?',
          options: ['La filosofía', 'La misión', 'La visión', 'Una meta'],
          correctIndex: 2,
          hint: 'Esta herramienta se describe como una imagen mental de algo que todavía no es visible: hacia dónde quiere llegar la organización en el futuro, no lo que ya es o hace hoy.',
        },
        {
          question: '¿Qué significan las siglas FODA (o DAFO), la herramienta de planificación propuesta por Albert Humphrey?',
          options: [
            'Fortalezas, Oportunidades, Debilidades y Amenazas',
            'Filosofía, Objetivos, Dirección y Autoridad',
            'Financiación, Organización, Delegación y Auditoría',
            'Fusión, Operación, Diagnóstico y Ajuste',
          ],
          correctIndex: 0,
          hint: 'Esta herramienta permite visualizar la situación actual y real de la organización combinando dos ejes: uno interno y otro externo, con el objetivo de maximizar los aspectos positivos y minimizar los negativos de cada eje.',
        },
        {
          question: 'Dentro del análisis FODA, ¿qué dos elementos se evalúan mirando hacia el entorno externo de la organización?',
          options: ['Fortalezas y debilidades', 'Visión y misión', 'Oportunidades y amenazas', 'Políticas y procedimientos'],
          correctIndex: 2,
          hint: 'El análisis FODA cruza dos ejes distintos: uno que examina lo que ocurre dentro de la organización y otro que mira hacia afuera, hacia el entorno en el que la organización debe competir o adaptarse.',
        },
        {
          question: 'Según el capítulo, ¿cómo debe quedar establecida la filosofía de una organización, es decir, las creencias y valores que orientan su actividad?',
          options: [
            'Únicamente de forma verbal, para mantener flexibilidad',
            'Por escrito, incluida en manuales e informes institucionales',
            'Solo la conoce la dirección de nivel superior',
            'Se redacta después de aplicar cada procedimiento',
          ],
          correctIndex: 1,
          hint: 'Esta herramienta articula la misión y da una dirección clara a la práctica del personal de enfermería, por lo que necesita quedar documentada de forma estable y accesible, no depender de la transmisión oral.',
        },
      ],
    },
    {
      points: 200,
      isCheckpoint: false,
      category: 'Gestión económica y marketing',
      questions: [
        {
          question: 'En el sistema de pago prospectivo basado en los grupos relacionados con el diagnóstico (GRD), ¿en qué se basa el reembolso al hospital?',
          options: [
            'En un descuento pactado entre el hospital y el paciente',
            'En el número exacto de servicios y procedimientos recibidos',
            'En una cantidad fija mensual pagada por cada persona asegurada',
            'En la categoría diagnóstica del paciente, no en la estancia',
          ],
          correctIndex: 3,
          hint: 'Este sistema dejó de mirar hacia atrás, es decir, hacia lo que costó cada día de hospitalización, para fijar de antemano cuánto se pagará según el tipo de caso que se espera tratar, casi sin importar cuántos días permanezca finalmente internada la persona.',
        },
        {
          question: '¿Qué tipo de coste se mantiene sin cambios independientemente del volumen de servicios prestados por la organización?',
          options: ['Coste variable', 'Coste marginal', 'Coste fijo', 'Coste de oportunidad'],
          correctIndex: 2,
          hint: 'A diferencia de los gastos ligados directamente a cuánta actividad se realiza, este tipo de coste debe afrontarlo la organización aunque no preste ningún servicio durante ese período.',
        },
        {
          question: '¿A cuántas horas anuales equivale un ETC (equivalente a tiempo completo), calculado sobre 8 horas diarias, 5 días a la semana, durante 52 semanas?',
          options: ['1560 horas', '2080 horas', '2600 horas', '1040 horas'],
          correctIndex: 1,
          hint: 'Este indicador se utiliza para calcular la dotación de personal necesaria; se obtiene multiplicando las horas de una jornada completa diaria por los días laborables de una semana estándar y, luego, por las semanas de un año.',
        },
        {
          question: '¿Cuál es la ecuación fundamental de la contabilidad, según el capítulo?',
          options: [
            'Ingresos menos gastos igual a beneficio neto',
            'Activos igual a pasivo más patrimonio neto',
            'Presupuesto igual a costes fijos más costes variables',
            'Precio igual a coste más margen de beneficio',
          ],
          correctIndex: 1,
          hint: 'Esta ecuación básica de la contabilidad establece que todo lo que posee la organización debe estar financiado, ya sea mediante deudas con terceros o mediante los recursos propios de la organización.',
        },
        {
          question: 'En marketing, ¿qué término describe el conjunto de impresiones, creencias e ideas que las personas forman en su mente sobre una organización?',
          options: ['Posicionamiento', 'Segmentación', 'Imagen', 'Marca diana'],
          correctIndex: 2,
          hint: 'Cuando una persona tiene una percepción positiva de esto respecto a una organización, se siente atraída hacia ella; si la percepción es negativa, la gente tiende a alejarse o a menospreciarla.',
        },
      ],
    },
    {
      points: 350,
      isCheckpoint: false,
      category: 'Planificación estratégica y operativa',
      questions: [
        {
          question: '¿En qué década empezaron las empresas privadas (no sanitarias) a utilizar la planificación estratégica, según el capítulo?',
          options: ['1950', '1970', '1980', '1990'],
          correctIndex: 0,
          hint: 'Las organizaciones de servicios sanitarios adoptaron la planificación estratégica bastante más tarde que las empresas privadas de otros sectores, recién a mediados de la década de 1970.',
        },
        {
          question: '¿Qué nivel de gestores es el encargado de definir la misión de la organización y diseñar la cartera de servicios que ofrece?',
          options: ['Gestores de nivel inferior', 'Personal de enfermería asistencial', 'Gestores de nivel superior', 'Comité de auditoría externa'],
          correctIndex: 2,
          hint: 'Este nivel de dirección se ocupa de las decisiones con mirada de largo plazo: define el propósito general de la organización y el conjunto de productos y servicios que la organización puede ofrecer.',
        },
        {
          question: '¿Qué nivel de gestores elabora los planes operativos de la actividad asistencial, con una programación diaria, semanal y mensual?',
          options: ['Gestores de nivel superior', 'Gestores de nivel inferior', 'Gestores de nivel intermedio', 'El comité de planificación estratégica'],
          correctIndex: 1,
          hint: 'A diferencia de quienes fijan la misión y las metas generales con una mirada de varios años, este nivel de gestión concreta la planificación en la actividad asistencial cotidiana, con un horizonte mucho más corto.',
        },
        {
          question: '¿Qué nivel de gestores (directores de unidad, supervisores, jefes de departamento) suele programar con un horizonte de entre 6 meses y 2 años?',
          options: ['Gestores de nivel intermedio', 'Gestores de nivel superior', 'Gestores de nivel inferior', 'El director económico-financiero'],
          correctIndex: 0,
          hint: 'Este nivel se ubica entre la dirección general y la primera línea asistencial, y su horizonte de programación es más corto que el de la planificación estratégica pero más largo que el de los planes operativos diarios.',
        },
        {
          question: '¿Cómo se llama la fase del ciclo de vida de un producto en la que el potencial de crecimiento es alto pero la respuesta del consumidor todavía es poco conocida?',
          options: ['Fase de madurez', 'Fase de declive', 'Fase de crecimiento', 'Fase de introducción'],
          correctIndex: 3,
          hint: 'Esta es la primera de las cuatro fases del ciclo de vida de un producto: comienza cuando se ofrece por primera vez el nuevo producto o servicio, momento en el que aún no se sabe bien cómo reaccionará el mercado.',
        },
      ],
    },
    {
      points: 500,
      isCheckpoint: false,
      category: 'Gestión económica y marketing',
      questions: [
        {
          question: '¿Qué tipo de organización sanitaria ofrece servicios integrales a sus afiliados a cambio de un pago fijo periódico (capitación)?',
          options: [
            'Un seguro médico abierto (PPO)',
            'Una organización para el mantenimiento integral de la salud (OMIS)',
            'Un organismo de homologación como la TJC',
            'Una organización de revisión externa (ORE)',
          ],
          correctIndex: 1,
          hint: 'Este tipo de organización cobra por adelantado una cantidad fija y periódica, y a cambio se compromete a cubrir todos los servicios sanitarios que la persona afiliada pueda necesitar.',
        },
        {
          question: 'En un seguro médico abierto (PPO), ¿qué puede hacer habitualmente la persona afiliada sin consultar antes con un médico de atención primaria?',
          options: [
            'Acceder directamente a un médico especialista',
            'Recibir un reembolso basado únicamente en el GRD',
            'Evitar el pago de cualquier prima fija',
            'Elegir libremente entre distintas OMIS',
          ],
          correctIndex: 0,
          hint: 'Este tipo de seguro permite la libre elección de médico y, a diferencia de otros modelos más restrictivos, no exige pasar primero por un médico de atención primaria para acceder a una consulta especializada.',
        },
        {
          question: '¿Qué instrumento sirve específicamente para garantizar la liquidez de la organización, es decir, que haya efectivo disponible cuando se lo necesite?',
          options: ['El presupuesto operativo', 'El presupuesto de costes laborales', 'El presupuesto de bienes inmuebles', 'El presupuesto de tesorería'],
          correctIndex: 3,
          hint: 'A diferencia de otros presupuestos centrados en ingresos y gastos generales, en el coste del personal o en las inversiones a largo plazo, este se ocupa concretamente de que la organización disponga de efectivo suficiente en cada momento.',
        },
        {
          question: '¿Cómo se denomina la diferencia entre lo presupuestado y los resultados económicos realmente obtenidos por la organización?',
          options: ['Coste estándar', 'Umbral de rentabilidad', 'Variación presupuestaria', 'Coste de oportunidad'],
          correctIndex: 2,
          hint: 'Esta diferencia puede ser positiva, si se obtiene un beneficio mayor al previsto, o negativa, si el resultado real queda por debajo de lo que se había presupuestado.',
        },
        {
          question: '¿Qué tipo de marketing busca cambiar comportamientos sociales, como sucede con las campañas antitabaco o de vacunación, en lugar de vender un producto?',
          options: ['Marketing diana', 'Marketing de masas', 'Marketing social', 'Marketing indiferenciado'],
          correctIndex: 2,
          hint: 'Este segmento del marketing no es lucrativo y aplica los mismos principios generales del marketing, pero con el fin de cambiar comportamientos sociales de un grupo de personas o de mejorar el bienestar de la sociedad en su conjunto.',
        },
      ],
    },
    {
      points: 1000,
      isCheckpoint: true,
      category: 'Planificación estratégica y operativa',
      questions: [
        {
          question: 'Según el modelo de Patricia Benner (2001), ¿cuántos niveles de competencia describe el desarrollo profesional de una enfermera?',
          options: ['Tres', 'Cuatro', 'Cinco', 'Siete'],
          correctIndex: 2,
          hint: 'Este modelo describe un recorrido progresivo, desde quien se enfrenta por primera vez a una situación sin experiencia previa hasta quien alcanza una comprensión intuitiva de la asistencia, pasando por niveles intermedios.',
        },
        {
          question: 'En el modelo de Patricia Benner, ¿qué nivel de competencia percibe la situación como un todo y actúa con comprensión intuitiva, sin detenerse a considerar soluciones alternativas?',
          options: ['Principiante', 'Competente', 'Muy competente', 'Experta'],
          correctIndex: 3,
          hint: 'Este es el nivel más avanzado del modelo: quien lo alcanza ya no necesita analizar conscientemente cada opción posible, porque su experiencia le permite reconocer de forma casi inmediata qué es lo que la situación requiere.',
        },
        {
          question: 'En el modelo de Patricia Benner, ¿a qué nivel corresponde una estudiante o una enfermera que se enfrenta por primera vez a una situación para la que no tiene experiencia previa?',
          options: ['Muy competente', 'Principiante', 'Competente', 'Experta'],
          correctIndex: 1,
          hint: 'Este es el nivel inicial del modelo: describe a quien todavía no cuenta con ninguna vivencia previa de la situación concreta que está enfrentando, sin importar cuánta formación teórica haya recibido.',
        },
        {
          question: 'Según el capítulo, ¿qué extensión suele tener el resumen ejecutivo de un plan de negocio (business plan)?',
          options: ['Aproximadamente media página', 'Aproximadamente 2 páginas', 'Aproximadamente 10 páginas', 'Aproximadamente 20 páginas'],
          correctIndex: 1,
          hint: 'Aunque el plan de negocio completo puede ser extenso, su resumen ejecutivo debe ser breve, apenas un par de páginas, para que quien lo lea capte rápidamente la idea central del proyecto.',
        },
        {
          question: 'Según la definición del Institute of Medicine citada en el capítulo, ¿qué integra la práctica basada en la evidencia?',
          options: [
            'Solo los resultados de estudios publicados en revistas científicas',
            'Los protocolos institucionales y las normas administrativas vigentes',
            'Valores del paciente, experiencia clínica y evidencia de investigación',
            'La intuición del profesional experto y el reglamento del servicio',
          ],
          correctIndex: 2,
          hint: 'Esta forma de practicar la enfermería no se apoya en un único tipo de información: combina lo que muestran los estudios de mayor calidad con el criterio ganado en la práctica diaria y con las preferencias y circunstancias particulares de la persona atendida.',
        },
      ],
    },
    {
      points: 1500,
      isCheckpoint: false,
      category: 'Gestión económica y marketing',
      questions: [
        {
          question: '¿Qué ley estadounidense de 1982 introdujo el concepto de "case mix" y dio origen al sistema de pago prospectivo basado en 467 categorías de GRD?',
          options: [
            'La Tax Equity and Fiscal Responsibility Act (TEFRA)',
            'La Health Insurance Portability and Accountability Act (HIPAA)',
            'La Occupational Safety and Health Act (OSHA)',
            'La Consolidated Omnibus Budget Reconciliation Act (COBRA)',
          ],
          correctIndex: 0,
          hint: 'Esta ley del año 1982 obligó a la elaboración de un sistema de precios prospectivo y sentó las bases para controlar el reembolso a los hospitales en función del diagnóstico del paciente, no de la estancia.',
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
          question: '¿Cuál de las siguientes es una de las cuatro fases de la contención de costes descritas en el capítulo?',
          options: ['Fusión de departamentos administrativos', 'Auditoría externa obligatoria', 'Incentivo de las conductas', 'Descentralización presupuestaria total'],
          correctIndex: 2,
          hint: 'Las cuatro fases de la contención de costes avanzan desde tomar conciencia del problema hasta lograr que el personal adopte por sí mismo conductas favorables al ahorro, pasando antes por controlar y gestionar activamente los costes.',
        },
        {
          question: 'De los cuatro instrumentos de promoción del marketing, ¿cuál consiste en ofrecer incentivos a los compradores durante un período corto para que adquieran el producto?',
          options: ['Publicidad pagada', 'Venta personal', 'Publicidad no pagada', 'Ofertas promocionales'],
          correctIndex: 3,
          hint: 'A diferencia de la publicidad paga, de la venta cara a cara o de la promoción gratuita, este instrumento se apoya en incentivos temporales, como cupones o muestras gratuitas, para motivar una compra en un plazo acotado.',
        },
        {
          question: 'Según el capítulo, ¿qué modelo de cálculo del coste de los servicios de enfermería añade el coste de los equipamientos (EC), a diferencia del modelo tradicional?',
          options: ['El modelo de la parrilla del Boston Consulting Group', 'El modelo de McCloskey', 'El modelo de Donabedian', 'El modelo del presupuesto base cero'],
          correctIndex: 1,
          hint: 'El modelo tradicional para calcular el coste de los servicios de enfermería combina el número de horas de cuidados y otros factores, pero este otro modelo incorpora además el coste de los equipos utilizados, algo que el tradicional no contempla.',
        },
      ],
    },
    {
      points: 2250,
      isCheckpoint: false,
      category: 'Planificación estratégica y operativa',
      questions: [
        {
          question: '¿Cómo se denominan las políticas que surgen directamente de la dirección de la organización, sin haber sido solicitadas por otro grupo ni impuestas desde afuera?',
          options: ['Políticas impuestas', 'Políticas solicitadas', 'Políticas originales', 'Políticas implícitas'],
          correctIndex: 2,
          hint: 'El capítulo distingue las políticas según su origen: unas nacen por iniciativa propia de la dirección, otras se piden desde otro nivel de la organización, y otras se adoptan porque una fuente externa obliga a ello.',
        },
        {
          question: '¿Cómo se denominan las políticas que la organización adopta porque una fuente externa, como una ley o una agencia gubernamental, obliga a ello?',
          options: ['Políticas originales', 'Políticas impuestas', 'Políticas solicitadas', 'Políticas explícitas'],
          correctIndex: 1,
          hint: 'A diferencia de las que nacen por iniciativa propia de la dirección o de las que se piden desde otro nivel de la organización, estas políticas se adoptan porque una autoridad o normativa externa a la organización así lo exige.',
        },
        {
          question: 'A diferencia de una política, ¿qué caracteriza principalmente a un procedimiento dentro de un servicio de enfermería?',
          options: [
            'Nunca puede expresarse de forma oral',
            'Afecta siempre a toda la organización',
            'Detalla pasos concretos y suele limitarse a un departamento',
            'Se redacta siempre después de aplicar la política',
          ],
          correctIndex: 2,
          hint: 'Uno de estos dos instrumentos suele limitarse a un departamento o a unas pocas tareas y ordena con precisión qué hacer paso a paso; el otro tiene un alcance más amplio y sirve de base para tomar decisiones futuras.',
        },
        {
          question: 'A diferencia de los objetivos, ¿qué caracteriza principalmente a las metas de una organización, según el capítulo?',
          options: [
            'Son más específicas y siempre llevan una fecha de consecución',
            'Son más generales y traducen la misión de forma amplia',
            'Se redactan exclusivamente en el presupuesto anual',
            'No pueden fijarse en cascada dentro de la organización',
          ],
          correctIndex: 1,
          hint: 'Las metas y los objetivos traducen la misión y la filosofía en acciones, pero uno de estos dos términos es más amplio y general, mientras que el otro se formula de manera más concreta, cuantificable y con plazos definidos.',
        },
        {
          question: 'Según el capítulo, ¿qué relación existe entre lo cuantificable de una meta y la probabilidad de alcanzarla?',
          options: [
            'Cuanto más cuantificable, menor la probabilidad de lograrla',
            'No existe ninguna relación entre ambos factores',
            'Cuanto más cuantificable, mayor la probabilidad de lograrla',
            'Solo se cumplen las metas que no están cuantificadas',
          ],
          correctIndex: 2,
          hint: 'El capítulo sostiene que expresar una meta en términos medibles y concretos, en lugar de dejarla como una aspiración vaga, aumenta las posibilidades reales de conseguirla.',
        },
      ],
    },
    {
      points: 3000,
      isCheckpoint: false,
      category: 'Gestión económica y marketing',
      questions: [
        {
          question: '¿Qué distingue al presupuesto base cero frente al enfoque histórico de presupuestación?',
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
          question: 'El principio contable de "conservadurismo", mencionado en el capítulo, consiste en:',
          options: [
            'Sobrestimar los ingresos para mostrar mejores resultados',
            'Subestimar los ingresos y sobrestimar los gastos, como margen de seguridad',
            'Registrar solamente los costes fijos de la organización',
            'Evitar por completo la elaboración de presupuestos anuales',
          ],
          correctIndex: 1,
          hint: 'Este principio busca ser prudente frente a la incertidumbre económica: prefiere calcular de menos lo que se espera ingresar y de más lo que se espera gastar, para dejar un margen frente a imprevistos.',
        },
        {
          question: 'Según el capítulo, ¿cuáles son las cuatro responsabilidades básicas del marketing que tiene toda empresa?',
          options: [
            'Territorial, competitiva, publicitaria y financiera',
            'Económica, legal, ética y solidaria',
            'Estratégica, operativa, táctica y de control',
            'De producto, de precio, de plaza y de personal',
          ],
          correctIndex: 1,
          hint: 'Estas cuatro responsabilidades abarcan desde ser rentable y cumplir la ley, hasta hacer lo correcto y justo, y contribuir a mejorar la calidad de vida de la sociedad en su conjunto.',
        },
        {
          question: '¿Cómo se denomina la política de precios que consiste en fijar un precio elevado para asegurar el beneficio cuando la demanda es alta y la competencia es escasa?',
          options: [
            'Política de precios basada en el prestigio',
            'Política de precios promocionales',
            'Política de precios dirigida a mantener la cuota de mercado',
            'Política de precios basada en la demanda',
          ],
          correctIndex: 3,
          hint: 'Esta política aprovecha específicamente el nivel de demanda del momento: cuando es alta y no hay demasiada competencia que la discipline, el precio puede fijarse más alto para maximizar el beneficio, a diferencia de otras políticas centradas en el prestigio o en la cuota de mercado.',
        },
        {
          question: 'Según la parrilla del Boston Consulting Group, ¿qué producto tiene un potencial de crecimiento alto y, además, una rentabilidad alta?',
          options: ['Perros', 'Vacas', 'Valores en alza', 'Signos de interrogación'],
          correctIndex: 2,
          hint: 'Esta parrilla clasifica los productos combinando dos ejes: cuánto pueden todavía expandirse en el mercado y cuánto beneficio generan hoy. La categoría en cuestión reúne a los que ya destacan en ambos aspectos a la vez, a diferencia de los que solo destacan en uno de ellos o en ninguno.',
        },
      ],
    },
    {
      points: 4000,
      isCheckpoint: false,
      category: 'Planificación estratégica y operativa',
      questions: [
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
          question: 'Según el capítulo, ¿cuál es una desventaja de que las políticas de una organización estén siempre por escrito?',
          options: [
            'Aumentan la interpretación errónea del personal',
            'Resulta más difícil modificarlas cuando quedan obsoletas',
            'Impiden que se demuestre que no hay nada que ocultar',
            'No pueden aplicarse a más de un departamento a la vez',
          ],
          correctIndex: 1,
          hint: 'Tener las políticas documentadas reduce las interpretaciones erróneas y demuestra transparencia, pero ese mismo carácter formal y estable puede convertirse en un obstáculo cuando la política ya no responde a la realidad y hay que actualizarla.',
        },
        {
          question: '¿Qué tipo de procedimiento, a diferencia de uno intradepartamental, afecta a más de un departamento a la vez?',
          options: ['Procedimiento implícito', 'Procedimiento original', 'Procedimiento interdepartamental', 'Procedimiento impuesto'],
          correctIndex: 2,
          hint: 'Los procedimientos, al igual que las políticas, pueden limitarse a un único sector de la organización o involucrar la coordinación de varios departamentos distintos para completarse.',
        },
        {
          question: 'Según los cuadros del capítulo, ¿en qué secuencia jerárquica se fijan típicamente las metas y los objetivos de una organización de enfermería?',
          options: [
            'Personal → supervisión → subdirección → dirección',
            'Dirección → subdirección → supervisión → personal',
            'Subdirección → personal → dirección → supervisión',
            'Se fijan de forma simultánea en todos los niveles',
          ],
          correctIndex: 1,
          hint: 'Las metas y objetivos se traducen en acciones concretas siguiendo un orden descendente, que comienza en el nivel más alto de conducción de la organización y llega, en última instancia, hasta quienes prestan la asistencia directa.',
        },
      ],
    },
    {
      points: 5000,
      isCheckpoint: true,
      category: 'Gestión económica y marketing',
      questions: [
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
        {
          question: 'En el análisis coste-beneficio, ¿a partir de qué valor del ratio beneficio/coste se considera, en principio, una buena inversión?',
          options: ['Un ratio igual o mayor a 1', 'Un ratio siempre menor a 1', 'Un ratio igual a 0', 'Un ratio mayor a 10 exclusivamente'],
          correctIndex: 0,
          hint: 'Este ratio compara lo que se obtiene con lo que se invierte; cuando el resultado alcanza o supera un valor de referencia, significa que el beneficio iguala o supera al coste, lo que en principio justifica la inversión.',
        },
        {
          question: '¿Cómo se denomina el punto en el que los ingresos igualan exactamente a los gastos, representado habitualmente en una gráfica?',
          options: ['Coste estándar', 'Variación presupuestaria', 'Punto de conservadurismo', 'Umbral de rentabilidad'],
          correctIndex: 3,
          hint: 'Este punto marca el momento exacto en el que una actividad deja de generar pérdidas, porque lo que ingresa la organización se iguala con lo que gasta; a partir de ahí, cualquier ingreso adicional comienza a generar beneficio.',
        },
        {
          question: 'Según el capítulo, ¿qué modelo de cálculo del coste de los servicios de enfermería incorpora explícitamente el coste de los equipamientos (EC), algo que el modelo tradicional no contempla?',
          options: ['El modelo de Donabedian', 'El modelo de McCloskey', 'El modelo del presupuesto base cero', 'El modelo de la parrilla del Boston Consulting Group'],
          correctIndex: 1,
          hint: 'A diferencia del cálculo tradicional del coste de los servicios de enfermería, que combina el número de horas de cuidados con otros factores conocidos, este otro modelo suma además el gasto asociado al equipamiento utilizado.',
        },
      ],
    },
    {
      points: 7000,
      isCheckpoint: false,
      category: 'Mejora continua de la calidad',
      questions: [
        {
          question: '¿Cómo se llamaba originalmente el organismo que hoy se conoce como The Joint Commission (TJC), fundado en 1951?',
          options: [
            'National Committee for Quality Assurance (NCQA)',
            'Joint Commission on Accreditation of Hospitals (JCAH)',
            'Occupational Safety and Health Administration (OSHA)',
            'National Institute for Occupational Safety and Health (NIOSH)',
          ],
          correctIndex: 1,
          hint: 'Este organismo de homologación, voluntario e independiente, cambió de nombre varias veces a lo largo de las décadas -incluyendo una etapa como JCAHO- hasta convertirse en la organización que hoy conocemos por sus siglas actuales.',
        },
        {
          question: '¿En qué década se introdujo en Japón el concepto de "control de calidad total" (CCT)?',
          options: ['Década de 1940', 'Década de 1960', 'Década de 1980', 'Década de 2000'],
          correctIndex: 0,
          hint: 'Este enfoque de calidad, cuya filosofía era "hacer lo correcto la primera vez, puntualmente y en todo momento", se introdujo en la industria japonesa en esta década, cuando expertos estadounidenses viajaron a formar al personal japonés.',
        },
        {
          question: '¿Qué instrumento gráfico, llamado así en honor a un economista que observó que el 80% de la riqueza de Italia estaba en manos del 20% de la población, ordena las causas de un problema por frecuencia descendente?',
          options: ['Diagrama de Ishikawa', 'Diagrama de Pareto', 'Gráfica de Gantt', 'Técnica PERT'],
          correctIndex: 1,
          hint: 'Este economista observó una desproporción similar entre causas y efectos que dio nombre a un principio general: la mayoría de los efectos provienen de unas pocas causas. El diagrama que lleva su nombre ordena las categorías de datos de mayor a menor frecuencia.',
        },
        {
          question: '¿Cómo se denomina también el diagrama de causa y efecto, utilizado para identificar las causas originales de un problema con una estructura similar al esqueleto de un pez?',
          options: ['Diagrama de Ishikawa (espina de pez)', 'Diagrama de Pareto', 'Diagrama de flujo', 'Diagrama de dispersión'],
          correctIndex: 0,
          hint: "También llamado diagrama en espina de pez, organiza visualmente las posibles causas de un problema en categorías (personas, métodos, materiales, equipo), llegando a las causas de fondo mediante la pregunta repetida de '¿por qué?'.",
        },
        {
          question: 'En el control del riesgo sanitario, ¿cómo se denomina un resultado inesperado que lleva implícita la muerte o una lesión física o psicológica grave del paciente?',
          options: ['Semierror', 'Etiología principal', 'Acontecimiento centinela', 'Incidente adverso evitable'],
          correctIndex: 2,
          hint: 'Este tipo de suceso, por su gravedad, exige una investigación y una respuesta inmediatas por parte de la organización, así como un análisis meticuloso de sus causas subyacentes y de los procesos y sistemas implicados.',
        },
      ],
    },
    {
      points: 9000,
      isCheckpoint: false,
      category: 'Mejora continua de la calidad',
      questions: [
        {
          question: '¿Qué ciclo, todavía muy utilizado en el ámbito de la asistencia sanitaria, introdujo Deming para gestionar el cambio y la mejora?',
          options: ['PERT', 'PDCA (planificar-acción-comprobación-actuación)', 'FODA', 'GRD'],
          correctIndex: 1,
          hint: 'Este ciclo, todavía muy utilizado en el ámbito de la asistencia sanitaria, organiza la mejora en cuatro etapas sucesivas que se repiten: primero se planifica el cambio, luego se implementa, después se comprueba su efecto y, finalmente, se actúa en consecuencia.',
        },
        {
          question: '¿Qué técnica de grupo permite priorizar ideas haciendo que cada participante otorgue una puntuación ponderada a sus 5 o 7 primeras prioridades?',
          options: ['Lluvia de ideas', 'Diagrama de afinidad', 'Comparativa (benchmarking)', 'Técnica de grupo nominal'],
          correctIndex: 3,
          hint: 'En esta técnica, tras generar ideas en silencio y compartirlas de a una por turno, los participantes clasifican y votan sus primeras opciones otorgando una puntuación mayor a la idea que consideran mejor.',
        },
        {
          question: '¿Cómo se denomina el proceso que consiste en identificar las mejores prácticas de otra organización y compararlas con las propias para mejorar el rendimiento?',
          options: ['Diagrama de Pareto', 'Comparativa (benchmarking)', 'Diagrama de flujo', 'Gráfica de Gantt'],
          correctIndex: 1,
          hint: 'Este proceso aprende y toma prestadas ideas de otras organizaciones: identifica con quién compararse, qué comparar, recopila información sobre esas prácticas y, finalmente, adapta lo mejor de ellas a los procesos propios.',
        },
        {
          question: '¿Qué ley federal de Estados Unidos, promulgada en 1996, protege la privacidad y la confidencialidad de la información sanitaria de los pacientes?',
          options: ['COBRA', 'OSHA', 'HIPAA', 'ERISA'],
          correctIndex: 2,
          hint: 'Esta ley se promulgó para que los ciudadanos pudieran disfrutar de su cobertura sanitaria aunque se desplazaran, y para controlar la forma en que se utiliza y se divulga su información personal, mediante tres series de normas diferentes.',
        },
        {
          question: 'Según el capítulo, ¿qué caracteriza a los hospitales llamados "magnéticos"?',
          options: [
            'Obtienen los mejores resultados en los pacientes y la mejor capacidad de reclutamiento y retención del personal de enfermería',
            'Son los que aplican exclusivamente el modelo de enfermería funcional',
            'Son los que tienen el presupuesto de tesorería más elevado del país',
            'Son los que dependen directamente de la Joint Commission para su gestión diaria',
          ],
          correctIndex: 0,
          hint: 'Estos centros suelen destacar en varios aspectos a la vez: los resultados que obtienen sus pacientes, su capacidad para atraer y retener personal de enfermería, sus ambientes de trabajo y la aplicación de prácticas basadas en evidencias científicas.',
        },
      ],
    },
    {
      points: 12000,
      isCheckpoint: false,
      category: 'Mejora continua de la calidad',
      questions: [
        {
          question: "¿Qué experto en calidad es conocido por sus 'catorce puntos' para transformar la gestión, entre ellos 'desterrar el miedo' e 'instituir el liderazgo'?",
          options: ['Deming', 'Juran', 'Crosby', 'Donabedian'],
          correctIndex: 0,
          hint: 'Este experto es célebre por sus catorce puntos para transformar la gestión de la calidad, entre los que se incluyen desterrar el miedo en el lugar de trabajo, instituir el liderazgo y adoptar una nueva filosofía de mejora constante.',
        },
        {
          question: "¿Cómo se denominan los tres procesos interrelacionados de la 'trilogía de la calidad' propuesta por Juran?",
          options: ['Planificación, control y mejora de la calidad', 'Estructura, proceso y resultado', 'Detección, corrección y prevención', 'Entrada, proceso y salida'],
          correctIndex: 0,
          hint: 'Esta trilogía organiza la gestión de la calidad en tres procesos que se retroalimentan: primero se planifica pensando en las necesidades del consumidor, luego se controla comparando el rendimiento real con los objetivos, y finalmente se mejora con proyectos concretos.',
        },
        {
          question: "¿Qué experto en calidad es conocido por el concepto de 'cero defectos' y por definir la calidad como la conformidad con los requisitos?",
          options: ['Crosby', 'Deming', 'Juran', 'Berwick'],
          correctIndex: 0,
          hint: "Este experto sostenía que la calidad se logra mediante la prevención de errores desde el principio, no mediante la inspección posterior, y fijó como meta ideal el 'defecto cero' en todos los procesos.",
        },
        {
          question: '¿Qué informe del Institute of Medicine, publicado en 1999, estimó entre 44.000 y 98.000 las muertes anuales por errores médicos evitables en los hospitales?',
          options: ['Crossing the Quality Chasm', '"Errar es humano" (To Err Is Human)', 'Priority Areas for National Action', 'Keeping Patients Safe'],
          correctIndex: 1,
          hint: 'Este informe, publicado en noviembre de 1999, se basó en varios estudios de investigación y concluyó que los errores se deben sobre todo a procesos y condiciones del sistema, más que a la dejadez individual del personal.',
        },
        {
          question: 'Los principios STEEEP, descritos en el informe "Crossing the Quality Chasm" (2001), exigen que la asistencia sea segura, oportuna, eficaz, eficiente, equitativa y...',
          options: ['Centrada en el paciente', 'Gratuita para todos los usuarios', 'Exclusivamente hospitalaria', 'Basada solo en la tecnología disponible'],
          correctIndex: 0,
          hint: 'Este informe proponía que la asistencia satisficiera las necesidades del cliente en tiempo real, a través de distintos canales, y que respondiera a sus necesidades y valores particulares, no solo a criterios técnicos.',
        },
      ],
    },
    {
      points: 15000,
      isCheckpoint: false,
      category: 'Mejora continua de la calidad',
      questions: [
        {
          question: '¿Qué agravio intencionado implica un contacto físico real y no permitido a una persona, como golpearla o forzarla a someterse a un tratamiento?',
          options: ['Asalto', 'Difamación', 'Reclusión falsa', 'Agresión'],
          correctIndex: 3,
          hint: 'Este agravio, a diferencia de la simple amenaza, implica contactos intencionados y no permitidos a la extensión del cuerpo de una persona, como sus ropas o los objetos que lleva en las manos, sin que se necesite un intento hostil del acusado.',
        },
        {
          question: '¿Qué agravio intencionado consiste en la amenaza o intimidación de tocar a una persona sin justificación, sin que llegue a producirse el contacto físico?',
          options: ['Asalto', 'Agresión', 'Invasión de la intimidad', 'Difamación'],
          correctIndex: 0,
          hint: 'Este agravio implica el trastorno mental de la integridad personal, incluyendo el amedrentamiento y la humillación, mediante una conminación a tocar a una persona sin justificación, pero no requiere que el contacto físico llegue a producirse.',
        },
        {
          question: '¿Cómo se denomina la detención premeditada de una persona, sin su consentimiento ni autorización legal, que le impide moverse con libertad?',
          options: ['Difamación', 'Calumnia', 'Reclusión falsa', 'Imprudencia profesional'],
          correctIndex: 2,
          hint: 'Esta infracción intencionada no necesita fuerza física: basta con que la persona quede confinada en un espacio concreto por miedo a que se utilice la fuerza, mediante palabras, amenazas o gestos, sin justificación legal.',
        },
        {
          question: '¿Qué documento, firmado por un adulto competente, indica qué asistencia médica desea esa persona en el futuro, en caso de perder la capacidad de tomar decisiones?',
          options: ['Poder notarial perdurable', 'Orden de no reanimar', 'Testamento vital', 'Consentimiento constructivo'],
          correctIndex: 2,
          hint: 'Este documento es firmado por un adulto todavía competente y expresa la asistencia médica que esa persona desea recibir en el futuro; sus decisiones deben mantenerse incluso aunque, más adelante, pierda la capacidad de decidir por sí misma.',
        },
        {
          question: '¿Qué tipo de consentimiento se considera otorgado automáticamente cuando se necesita un tratamiento inmediato para salvar la vida de un paciente que no puede autorizarlo?',
          options: ['Consentimiento informado', 'Consentimiento constructivo (o tácito)', 'Consentimiento diferido', 'Consentimiento subsidiario'],
          correctIndex: 1,
          hint: 'Este tipo de consentimiento no requiere ser solicitado ni firmado: opera por sí solo cuando la urgencia de salvar una vida no permite obtenerlo del paciente ni de su representante legal autorizado.',
        },
      ],
    },
    {
      points: 20000,
      isCheckpoint: false,
      category: 'Mejora continua de la calidad',
      questions: [
        {
          question: '¿Qué autor aplicó a la asistencia sanitaria un modelo de evaluación de la calidad basado en estructura, procesos y resultados?',
          options: ['Donabedian', 'Berwick', 'Deming', 'Juran'],
          correctIndex: 0,
          hint: 'Este autor es conocido por trasladar a la asistencia sanitaria un modelo de tres componentes -estructura, procesos y resultados- para valorar sistemáticamente la calidad de la atención.',
        },
        {
          question: '¿Cuál es la diferencia principal entre un "incidente adverso" y un "semierror" (near miss), según las definiciones del capítulo?',
          options: [
            'No hay ninguna diferencia real entre ambos conceptos',
            'El semierror siempre involucra a personal sin formación',
            'El incidente adverso produce una lesión real; el semierror no llega a causar daño gracias a una intervención oportuna',
            'El incidente adverso nunca puede evitarse, a diferencia del semierror',
          ],
          correctIndex: 2,
          hint: 'Uno de estos dos conceptos describe una lesión ocasionada por un tratamiento médico que desemboca en una discapacidad cuantificable; el otro describe un incidente que podría haber dado lugar a un daño, pero que no llegó a producirse gracias a la suerte o a una intervención a tiempo.',
        },
        {
          question: 'Según el capítulo, ¿cuál es la causa más frecuente de los errores médicos comunicados?',
          options: ['Los errores de transporte de pacientes', 'Los errores relacionados con la medicación', 'Los errores de comunicación telefónica', 'Los errores en la historia clínica en papel'],
          correctIndex: 1,
          hint: 'El capítulo señala que gran parte de los errores médicos comunicados están relacionados con este ámbito de la asistencia, e identifica factores como la letra ilegible, las abreviaturas inadecuadas y la confusión entre fármacos de nombres similares.',
        },
        {
          question: '¿Cuál es la diferencia entre negligencia e imprudencia profesional, según el capítulo?',
          options: [
            'Son sinónimos exactos y se usan indistintamente',
            'La imprudencia profesional es negligencia cometida por una persona con formación especializada, en el ejercicio de sus funciones profesionales',
            'La negligencia solo puede cometerla el personal médico, nunca el de enfermería',
            'La imprudencia profesional no tiene consecuencias legales, a diferencia de la negligencia',
          ],
          correctIndex: 1,
          hint: 'La negligencia es la incapacidad de una persona cualquiera para actuar con la prudencia razonable que exige una situación; cuando esa misma falta de cuidado la comete alguien con una formación profesional específica en el ejercicio de sus responsabilidades, recibe un nombre más específico.',
        },
        {
          question: '¿Qué ley federal de 1990 exige a las instituciones sanitarias que reciben fondos de Medicare o Medicaid que informen por escrito a los pacientes sobre su derecho a tomar decisiones sanitarias?',
          options: ['HIPAA', 'COBRA', 'Patient Self-Determination Act', 'Omnibus Budget Reconciliation Act (OBRA)'],
          correctIndex: 2,
          hint: 'Esta ley federal obliga a las instituciones que reciben fondos públicos de estos dos programas a proporcionar información por escrito a los adultos sobre su derecho a tomar decisiones relativas a su propia asistencia sanitaria.',
        },
      ],
    },
  ],
};
