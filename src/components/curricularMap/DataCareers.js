const dataCareers = [
        {
            "id": 3,
            "content": {
                "color":"#174485",
                "headOfDepartment": "M.C. Juan Gabriel Ruiz Ruiz ",
                "email": "informatica@unsij.edu.mx",
                "title": "Ingeniería en Desarrollo de Software y Sistemas Inteligentes",
                "mission": {
                    "title": "Misión",
                    "content": "Formar profesionistas altamente competitivos en el área de desarrollo de software y " +
                        "sistemas inteligentes comprometidos con el bienestar de la sociedad, capaces de detectar, proponer y " +
                        "desarrollar soluciones efectivas e innovadoras, que impulsen el desarrollo social, brindando a los " +
                        "estudiantes una educación superior inclusiva de excelencia, promoviendo el desarrollo científico, tecnológico y " +
                        "social a través de proyectos en la región, en el estado y del país.",
                },
                "vision": {
                    "title": "Visión",
                    "content": "Consolidarse como un programa educativo de vanguardia reconocido por el excelente nivel académico de sus alumnos, " +
                        "egresados y cuerpo docente, con capacidad de innovación, compromiso ético y social, liderazgo transformador y el manejo " +
                        "responsable de la información; demostrando ser un programa generador de profesionales comprometidos con las necesidades de " +
                        "su entorno y capaces de mejorar la situación económica, social y tecnológica de la región, sin descuidar el ambiente y la " +
                        "cultura, ayudando a los egresados a integrarse en diferentes ámbitos del campo laboral.",
                },
                "objective": {
                    "title": "Objetivo",
                    "content": "Formar ingenieros en desarrollo de software y sistemas inteligentes, líderes, analíticos, críticos, creativos y " +
                        "emprendedores, con una sólida preparación científica, tecnológica y humanista, con la capacidad y habilidad para analizar, " +
                        "desarrollar e implementar sistemas, colaborando activamente dando respuesta a las problemáticas y necesidades que se detecten " +
                        "en materia de software, actuando como agentes de cambio en el desarrollo de la región, del estado y del país."
                },
                "admissionProfile": {
                    "title": "Perfil de ingreso",
                    "introduction": "El programa educativo está dirigido a estudiantes que concluyeron su bachillerato general o equivalente, además " +
                        "es deseable que el aspirante tenga:",
                    "options": {
                        "1": "Interés general por las Tecnologías de la Información y Comunicación.",
                        "2": "Conocimientos básicos de computación.",
                        "3": "Conocimientos de ciencias básicas.",
                        "4": "Capacidad de razonamiento lógico principalmente para la resolución de problemas.",
                        "5": "Ser creativo, para innovar en el diseño, gestión y creación de sistemas de información.",
                        "6": "Gusto y habilidad por la investigación sobre tópicos relacionados con técnicas relacionadas con el tratamiento de conjuntos de datos para la extracción automática de información.",
                        "7": "Disposición para trabajar en equipo de manera colaborativa, comprometida y tolerante.",
                        "8": "Disposición para trabajo de campo y en laboratorios afines a la carrera.",
                        "9": "Actitud emprendedora.",
                        "10": "Interés para aprender nuevos idiomas.",
                        "11": "Interés y disciplina en el estudio para su mayor aprovechamiento."
                    }
                },
                "graduateProfile": {
                    "title": "Perfil de egreso",
                    "introduction": "Las competencias de quien egresa de la Ingeniería en Desarrollo de Software y Sistemas Inteligentes serán las siguientes:",
                    "options": {
                        "1": "Validar los requerimientos para diseñar, construir, implantar y dirigir proyectos de software que permitan resolver problemas reales.",
                        "2": "Identificar áreas de oportunidad para proponer, desarrollar e implementar técnicas de Inteligencia Artificial eficientes y robustas para resolver problemas relacionados con aprendizaje automático, visión por computadora y análisis predictivo.",
                        "3": "Aplicar principios matemáticos y estadísticos para desarrollar algoritmos y modelos que respaldan la toma de decisiones y la resolución de problemas complejos.",
                        "4": "Utilizar técnicas de ciencia de datos para extraer información valiosa de grandes conjuntos de datos e identificar patrones.",
                        "5": "Comprender la importancia de la innovación social, los hábitos de trabajo en equipo, el liderazgo y las habilidades de comunicación, adaptándose a entornos de trabajo dinámicos, interculturales y de equidad social, identificando soluciones efectivas en el desarrollo de software.",
                        "6": "Identificar oportunidades y convertir ideas innovadoras en proyectos de desarrollo de software, contribuyendo así a la generación de valor en el ámbito tecnológico y social.",
                    },
                    "conclusion": "A lo largo de su formación académica, el egresado adquirirá actitudes y valores que le permiten conducirse como agente de cambio en diferentes contextos y con principios éticos y morales al ejercer su profesión."
                },
                "fieldOfAction": {
                    "title": "Campo de acción",
                    "introduction": "El Ingeniero en Desarrollo de Software y Sistemas Inteligentes puede desempeñarse en diversas áreas del sector público o privado, donde podrá desempeñar una gran variedad de actividades y funciones, entre las cuáles puede destacarse en:",
                    "companies": {
                        "title": "Empresas de desarrollo de software",
                        "1": "Desarrollando proyectos de software, de acuerdo con estándares de calidad definidos. ",
                        "2": "Dirigiendo y colaborando en grupos multi e interdisciplinarios para alcanzar objetivos comunes. ",
                        "3": "Integrando conocimientos de programación, Ingeniería de software, multimedia y comunicaciones para la creación de sistemas informáticos en ambientes de red y de sistemas distribuidos. ",
                        "4": "Desarrollando sistemas para el análisis y procesamiento de grandes volúmenes de datos, basados en técnicas de inteligencia artificial que permitan una mayor eficacia en la toma de decisiones acorde a los objetivos de las organizaciones.",
                        "5": "Brindando experiencia y conocimientos técnicos para el desarrollo de software bajo estándares de nuevas tecnologías que resuelvan las problemáticas con mayor eficacia, que puedan darles una ventaja competitiva en el mercado."
                    },
                    "sector": {
                        "title": "Unidades de Informática del sector público o privado",
                        "1": "Apoyando con el desarrollo de software que contribuya con el logro de los objetivos de la organización. ",
                        "2": "Seleccionando y administrando los recursos informáticos y humanos en una organización con eficiencia, eficacia, productividad y calidad. ",
                        "3": "Realizando estudios de factibilidad, eficiencia operativa, técnica y económica para proyectos informáticos. ",
                        "4": "Administrando redes de cómputo en organizaciones, cuidando la integridad, confidencialidad y disponibilidad de la información.",
                        "5": "Siendo agente de conocimiento y experiencia en nuevas tecnologías para el desarrollo de sistemas que aporten información a la toma de decisiones con base en el análisis de datos. "
                    },
                    "independent": {
                        "title": "Forma independiente",
                        "1": "Brindando servicios de consultoría profesional y soporte técnico en el área de Desarrollo de Software y Sistemas Inteligentes. ",
                        "2": "Desarrollando el emprendimiento empresarial, para generar nuevas fuentes de empleo relacionadas con el área tecnológica, contribuyendo al desarrollo económico y social de la región.",
                        "3": "Desarrollando soluciones de software a la medida, abordando las necesidades de su entorno para resolver problemáticas de impacto social."
                    },
                    "education": {
                        "title": "Instituciones educativas",
                        "1": "Impartiendo clases a niveles medio superior y superior en áreas de físico matemático o técnico en informática y desarrollo de software.",
                        "2": "Desarrollando investigación en áreas como Ingeniería de Software e Inteligencia artificial.",
                        "3": "Proponiendo y actualizando líneas de conocimiento con relevancia tecnológica para el desarrollo vanguardista de la preparación académica."
                    },
                    "postgraduate": {
                        "title": "Estudios de postgrado",
                        "1": "Continuando sus estudios de posgrado en áreas de Ingeniería de Software, Tecnologías de la Información y Comunicación, Sistemas de Información, Inteligencia Artificial, Ciencias de Datos, Matemáticas Aplicadas o de otras áreas afines.",
                    }
                },
                "planEstudios":
                    {
                        "title": "Tira de materias",
                        "introduction":
                            "Se propone cursar las siguientes asignaturas en el curso propedéutico:",
                        "preparatoryCourse": {
                            "title": "Curso propedéutico",
                            "content": [
                                "Álgebra",
                                "Física Básica",
                                "Diseño Estructurado de Algoritmos",
                                "Introducción a la Informática y Sistemas Inteligentes",
                                "Técnicas de Estudio"
                            ]
                        },
                        "firstSemester": {
                            "title": "Primer semestre",
                            "content": [
                                "Programación Estructurada",
                                "Lógica Matemática",
                                "Cálculo I",
                                "Física I",
                                "Metodología de la Investigación",
                                "Administración",
                                "Historia del Pensamiento Filosófico"
                            ]
                        },
                        "secondSemester": {
                            "title": "Segundo semestre",
                            "content": [
                                "Estructura de Datos",
                                "Fundamentos de Electrónica",
                                "Interacción Humano Computadora",
                                "Matemáticas Discretas",
                                "Cálculo II",
                                "Álgebra Lineal",
                                "Teoría General de Sistemas"
                            ]
                        },
                        "thirdSemester": {
                            "title": "Tercer semestre",
                            "content": [
                                "Paradigmas de Programación I",
                                "Electrónica Digital",
                                "Base de Datos I",
                                "Teoría de Autómatas",
                                "Ecuaciones Diferenciales",
                                "Probabilidad y Estadística",
                                "Contabilidad y Finanzas"
                            ]
                        },
                        "fourthSemester": {
                            "title": "Cuarto semestre",
                            "content": [
                                "Paradigmas de Programación II",
                                "Programación de Sistemas",
                                "Diseño Web",
                                "Arquitectura de Computadoras",
                                "Base de Datos II",
                                "Métodos Numéricos",
                                "Gestión y Desarrollo Social"
                            ]
                        },
                        "fifthSemester": {
                            "title": "Quinto semestre",
                            "content": [
                                "Programación de Dispositivos Móviles",
                                "Fundamentos de Sistemas Operativos",
                                "Tecnologías Web I",
                                "Redes I",
                                "Ingeniería de Software I",
                                "Fundamentos de IA",
                                "Emprendimiento e Innovación"
                            ]
                        },
                        "sixthSemester": {
                            "title": "Sexto semestre",
                            "content": [
                                "Bases de Datos Avanzadas",
                                "Sistemas Operativos de Red",
                                "Tecnologías Web II",
                                "Redes II",
                                "Ingeniería de Software II",
                                "Ciencia de Datos",
                                "Liderazgo y Desarrollo Personal"
                            ]
                        },
                        "seventhSemester": {
                            "title": "Séptimo semestre",
                            "content": [
                                "Calidad de Software",
                                "Sistemas Distribuidos",
                                "Redes Neuronales",
                                "Algoritmos de Optimización",
                                "Investigación de Operaciones",
                                "Derecho y Legislación en Informática",
                                "Liderazgo y Equipos de Alto Desempeño"
                            ]
                        },
                        "eightSemester": {
                            "title": "Octavo semestre",
                            "content": [
                                "Proyectos de Tecnologías de la Información",
                                "Ciberseguridad",
                                "Modelos predictivos",
                                "Seminario de tesis",
                                "Optativa I",
                                "Optativa II"
                            ]
                        },
                        "ninthSemester": {
                            "title": "Noveno semestre",
                            "content": [
                                "Estancia profesional",
                                "Seminario de Titulación"
                            ]
                        },
                        "electives": {
                            "title": "Optativas",
                            "content": [
                                "Arquitecturas de Software",
                                "Administración de Proyectos de Software con Enfoque Ágil",
                                "Procesamiento del Lenguaje Natural",
                                "Programación de Robots Móviles",
                                "Reconocimiento de Patrones",
                                "Visión por Computadora y Realidad Aumentada",
                                "Aplicaciones de Inteligencia Artificial en Sistemas Embebidos"
                            ]
                        }
                    }
            }
        }
    ]
;

export default dataCareers;
