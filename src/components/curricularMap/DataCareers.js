const dataCareers = [
    {
        "id": 1,
        "content": {
            "color": "#1E5B19",
            "headOfDepartment": "Dr. César Valenzuela Encinas ",
            "email": "iforestal@unsij.edu.mx",
            "title": "Ingeniería Forestal",
            "mission": {
                "title": "Misión",
                "content": "Formar profesionistas con conocimientos técnicos y científicos que contribuyan al manejo" +
                    "sustentable de los ecosistemas forestales en beneficio de la sociedad, mediante una educación" +
                    "de calidad con base en principios éticos.",
            },
            "vision": {
                "title": "Visión",
                "content": "Consolidarse como un programa educativo líder a nivel nacional en la enseñanza" +
                    "de la ciencia forestal y en la formación de profesionales en el manejo sustentable de los ecosistemas forestales.",
            },
            "objective": {
                "title": "Objetivo",
                "content": "Formar profesionistas con conocimientos, habilidades, valores y aptitudes capaces de manejar" +
                    "los ecosistemas forestales y coadyuvar al desarrollo sustentable del sector forestal."
            },
            "admissionProfile": {
                "title": "Perfil de ingreso",
                "introduction": "El programa está dirigido a estudiantes que han concluido sus estudios de nivel medio superior." +
                    "Es deseable que el aspirante tenga:",
                "options": {
                    "1": "Interés por el manejo y conservación de los ecosistemas forestales.",
                    "2": "Afinidad para trabajar con comunidades.",
                    "3": "Vocación y disciplina en el estudio y resolución de problemas forestales y ambientales.",
                    "4": "Disposición a trabajar en equipos multidisciplinarios.",
                    "5": "Gusto por la innovación tecnológica aplicada a los recursos forestales."
                }
            },
            "graduateProfile": {
                "title": "Perfil de egreso",
                "introduction": "Quien egrese de ingeniería forestal tendrá las siguientes competencias:",
                "engineering": {
                    "1": "Elaborar, ejecutar y evaluar planes integrales de vanguardia que atiendan el manejo forestal, sistemas agroforestales, manejo de fauna silvestre y cuencas hidrográficas.",
                    "2": "Administrar el proceso de aprovechamiento forestal e impulsar estrategias de producción sostenible considerando las operaciones de su cadena productiva.",
                    "3": "Actuar bajo un enfoque inter y multidisciplinario en la gestión de los recursos forestales, la sostenibilidad y el desarrollo regional.",
                    "4": "Influir en la conservación de los ecosistemas forestales para lograr su protección, mejoramiento, rehabilitación y restauración.",
                    "5": "Promover la igualdad social y género en el ejercicio de profesión en los diferentes ámbitos de la sociedad",
                    "6": "Aplicar de forma efectiva en el desarrollo de su profesión y la investigación, tecnologías de vanguardia.",
                    "7": "Ingresar a posgrados de excelencia acreditados por el Sistema Nacional de Posgrados del Consejo Nacional de Humanidades, Ciencia y Tecnología en el país o en el extranjero.",
                    "8": "Ejercer en los diferentes sectores de la sociedad u organismos y niveles de gobierno, así como el desarrollo de su propia empresa."
                },
                "conservation": {
                    "title": "Quien egrese del área de manejo y conservación tendrá las siguientes competencias:",
                    "1": "Desempeñarse con responsabilidad social y ética en las áreas de manejo forestal sostenible y la conservación de los bosques para el desarrollo de las comunidades.",
                    "2": "Fortalecer las capacidades de las comunidades en el manejo de los recursos forestales, impulsando la sostenibilidad a largo plazo."
                },
                "industries": {
                    "title": "Quien egrese del área de industrias forestales tendrá las siguientes competencias:",
                    "1": "Desempeñarse con responsabilidad social y ética en áreas de industria forestal.",
                    "2": "Contribuir con conocimientos técnicos para fortalecer la cadena de valor en el sector forestal, mejorando los procesos de transformación y comercialización, garantizando un aprovechamiento sostenible de los bosques para obtener productos forestales maderables."
                }
            },
            "fieldOfAction": {
                "title": "Campo de acción",
                "public": {
                    "title": "Sector Público",
                    "1": "En las secretarías, subsecretarías y programas sectoriales en los diferentes niveles de gobierno; federal (SEMARNAT, CONAFOR, PROFEPA, INIFAP, CONANP, CONABIO, Etc.), estatal y municipal."
                },
                "private": {
                    "title": "Sector privado",
                    "1": "Empresas dedicadas a los servicios técnicos forestales y ambientales.",
                    "2": "La transformación, industrialización y comercialización.",
                    "3": "La enseñanza, capacitación e investigación."
                },
                "social": {
                    "title": "Sector Social",
                    "1": "Ejidos y comunidades",
                    "2": "Sociedades rurales",
                    "3": "Asociaciones civiles",
                    "4": "Fundaciones civiles"
                },
                "international": {
                    "title": "Organismos Internacionales",
                    "1": "En programas sectoriales de las organizaciones tales como: la FAO, WWF, OMIT entre otros."
                },
                "independent": {
                    "title": "Forma independiente",
                    "1": "Brindando servicios de consultoría profesional.",
                    "2": "Generando nuevas fuentes de empleo en áreas forestales."
                },
                "education": {
                    "title": "Instituciones educativas",
                    "1": "Impartiendo clases a niveles medio superior y superior.",
                    "2": "Desarrollando investigación."
                }
            },
            "planEstudios":
            {
                "title": "Tira de materias",
                "firstSemester": {
                    "title": "Primer semestre",
                    "content": [
                        "Fundamentos de matemáticas",
                        "Química",
                        "Física",
                        "Ingeniería forestal y los recursos naturales",
                        "Ecología",
                        "Historia del Pensamiento Filosófico"
                    ]
                },
                "secondSemester": {
                    "title": "Segundo semestre",
                    "content": [
                        "Matemáticas",
                        "Bioquímica",
                        "Ecofisiología forestal",
                        "Botánica Forestal",
                        "Ecosistemas forestales",
                        "Teoría General de Sistemas"
                    ]
                },
                "thirdSemester": {
                    "title": "Tercer semestre",
                    "content": [
                        "Métodos estadísticos",
                        "Suelos forestales",
                        "Forestería Comunitaria y comunicación",
                        "Dendrometría",
                        "Semillas y viveros forestales",
                        "Economía de los recursos forestales"
                    ]
                },
                "fourthSemester": {
                    "title": "Cuarto semestre",
                    "content": [
                        "Muestreo e inventario forestal",
                        "Principios de topografía",
                        "Restauración de ecosistemas forestales",
                        "Silvicultura de bosques templados",
                        "Genética forestal",
                        "Política y legislación forestal"
                    ]
                },
                "fifthSemester": {
                    "title": "Quinto semestre",
                    "content": [
                        "Diseños experimentales",
                        "Geomática",
                        "Anatomía y tecnología de la madera",
                        "Silvicultura tropical",
                        "Mejoramiento genético forestal",
                        "Recursos forestales no maderables"
                    ]
                },
                "sixthSemester": {
                    "title": "Sexto semestre",
                    "content": [
                        "Liderazgo y emprendimiento forestal",
                        "Plantaciones forestales",
                        "Sistemas agroforestales",
                        "Epidometría",
                        "Industrias forestales",
                        "Abastecimiento y caminos forestales"
                    ]
                },
                "conservation": {
                    "title": "Manejo y Conservación",
                    "seventhSemester": {
                        "title": "Séptimo semestre",
                        "content": [
                            "Formulación y evaluación de proyectos",
                            "Percepción remota y tecnología espacial",
                            "Manejo forestal sostenible",
                            "Evaluación de impacto ambiental",
                            "Manejo de Fauna Silvestre",
                            "Protección Forestal"
                        ]
                    },
                    "eightSemester": {
                        "title": "Octavo semestre",
                        "content": [
                            "Administración de empresas forestales",
                            "Manejo de cuencas hidrográficas",
                            "Ciencia de datos e inteligencia artificial en el manejo forestal",
                            "Taller de programas de manejo",
                            "Metodología de la investigación",
                            "Cambio climático y servicios ecosistémicos"
                        ]
                    }
                },
                "industries": {
                    "title": "industrias forestales",
                    "eightSemester": {
                        "title": "Séptimo semestre",
                        "content": [
                            "Formulación y evaluación de proyectos",
                            "Secado de la Madera",
                            "Manejo forestal sostenible",
                            "Procesamiento primario de la madera",
                            "Manejo de Fauna Silvestre",
                            "Industria del mueble"
                        ]
                    },
                    "ninthSemester": {
                        "title": "Octavo semestre",
                        "content": [
                            "Administración de empresas forestales",
                            "Manejo de cuencas hidrográficas",
                            "Dendroenergía",
                            "Taller de programas de manejo",
                            "Metodología de la investigación",
                            "Uso de la madera en la construcción"
                        ]
                    }
                },
                "ninthSemester": {
                    "title": "Noveno semestre",
                    "content": [
                        "Estancia profesional",
                        "Seminario de Titulación"
                    ]
                }
            }
        }
    },
    {
        "id": 2,
        "content": {
            "color": "#E39868",
            "headOfDepartment": "M.C. Arturo Félix Hernández Díaz",
            "email": "biologia@unsij.edu.mx",
            "title": "Licenciatura en Biología",
            "mission": {
                "title": "Misión",
                "content": "Formar de manera integral profesionales bajo estándares de excelencia en el campo de la biología," +
                    "altamente capacitados para liderar la generación de conocimiento a través del análisis, comprensión y argumentación" +
                    "orientados a la utilización y conservación de los recursos naturales. Fomentar la responsabilidad socio ambiental," +
                    "la promoción de valores, innovación social, así como, la equidad social y de género y el respeto desde la interculturalidad" +
                    "para contribuir de manera significativa al desarrollo sustentable de la región, el estado y el país."
            },
            "vision": {
                "title": "Visión",
                "content": "Posicionarse como un programa educativo reconocido por su excelencia académica y la formación del pensamiento" +
                    "crítico en sus estudiantes y graduados. Este reconocimiento se respalda en el destacado desempeño profesional de los egresados," +
                    "resultado de la promoción de la interculturalidad, el respeto y cuidado al medio ambiente, así como el uso responsable de" +
                    "tecnologías asociadas con las líneas de generación y aplicación del conocimiento en los ámbitos científico, tecnológico y social," +
                    "orientadas al manejo sustentable de los recursos naturales."
            },
            "objective": {
                "title": "Objetivo",
                "content": "La Licenciatura en Biología tiene como objetivo fundamental formar profesionistas altamente calificados en el conocimiento" +
                    "de los seres vivos y su entorno, con una base científica y una perspectiva interdisciplinar, capaces de generar nuevos conocimientos a" +
                    "través de la investigación y proponer soluciones a las problemáticas relacionadas con la conservación, preservación, restauración y" +
                    "la gestión de los recursos naturales a nivel local, regional y nacional."
            },
            "admissionProfile": {
                "title": "Perfil de ingreso",
                "introduction": "Quien aspira a ingresar a la Licenciatura en Biología, debe ser egresado de cualquier institución de" +
                    "nivel medio superior a nivel nacional, con un gran sentido de responsabilidad y compromiso, así como tener:",
                "options": {
                    "1": "Interés por la investigación científica y el conocimiento de los recursos naturales",
                    "2": "Conocimientos básicos de biología, matemáticas, física y química.",
                    "3": "Disposición para trabajar en equipo de manera colaborativa, comprometida y tolerante.",
                    "4": "Disposición para trabajar en campo y laboratorio.",
                    "5": "Interés para adquirir nuevos conocimientos en un sentido amplio."
                }
            },
            "graduateProfile": {
                "title": "Perfil de egreso",
                "introduction": "Quien egresa de la Licenciatura en Biología estará capacitado para realizar investigación," +
                    "generar y aplicar el conocimiento científico de vanguardia para solucionar problemas y atender necesidades desde" +
                    "una perspectiva interdisciplinaria e intercultural en las áreas de Desarrollo Biocultural, Biodiversidad, Ecología del Medio ambiente" +
                    "e interacciones biológicas, con un enfoque de sustentabilidad de los recursos naturales, sentido ético, humanista; se le genera una visión" +
                    "de emprendedurismo y se promueve un alto contenido de responsabilidad social." +
                    "Las competencias de quien egresa de la Licenciatura en Biología serán:",
                "options": {
                    "1": "Contar con un profundo conocimiento en los conceptos naturales básicos, mediante la comprensión de procesos de mantenimiento y cambio desde el nivel genético y celular hasta el nivel integrativo de la biosfera.",
                    "2": "Tener la habilidad para desarrollar investigaciones y generar conocimiento básico y aplicado, así como contar con las habilidades para difundir el conocimiento en el ámbito académico y la divulgación hacia la sociedad.",
                    "3": "Ofrecer alternativas para el uso, manejo y protección de los recursos naturales a nivel local, nacional e internacional.",
                    "4": "Incorporarse en distintas áreas para aportar sus conocimientos en la docencia, investigación e instituciones públicas y privadas.",
                    "5": "Conocer las áreas de oportunidad y plantear estrategias para salvaguardar y difundir el patrimonio biocultural de nuestro país.",
                    "6": "Diseñar e/o implementar proyectos de investigación interdisciplinarios aplicando metodologías propias para cada tema de estudio, y tener las destrezas necesarias para los trabajos en el campo laboratorio y oficina, además de tener las bases para generar conocimientos innovadores e incidir en políticas públicas ambientales.",
                    "7": "Identificar y reconocer los organismos que forman parte de la diversidad biológica con base en los caracteres morfológicos y/o genéticos.",
                    "8": "Desarrollar proyectos de emprendimiento orientado al manejo sustentable de los recursos naturales que contribuyan significativamente en el fortalecimiento y desarrollo de las economías locales y regionales.",
                    "9": "Realizar estudios para la gestión, diseño, conservación y mantenimiento de áreas naturales protegidas y reservas naturales, así como de especies vegetales y animales amenazadas o en peligro de extinción.",
                    "10": "Realizar inventarios, evaluaciones de los recursos naturales, así como estudios de impacto ambiental y ordenamiento ecológico del territorio.",
                    "11": "Contar con las habilidades digitales y el uso responsable de tecnologías de la información, así como la capacidad de integrar los elementos de la Industria 4.0 para abordar los desafíos en los campos de investigación y resolución de problemas ambientales y educativos.",
                    "12": "Capacidad para el trabajo colaborativo, pensamiento ético, analítico y crítico, socialización y empatía en la resolución de problemas socio ambientales."
                }
            },
            "fieldOfAction": {
                "title": "Campo de acción",
                "introduction": "El campo de acción de quien egresa de la Licenciatura en Biología es vasto y diverso, ofreciendo oportunidades en una amplia gama de áreas, ya que los biólogos desempeñan un papel fundamental en el entendimiento, conservación y aprovechamiento sustentable de los recursos naturales, es así que pueden ingresar en diferentes áreas del sector público o privado.",
                "conservation": {
                    "title": "Conservación de la biodiversidad",
                    "1": "México alberga una increíble variedad de ecosistemas, desde selvas tropicales hasta desiertos, lo que convierte al país en uno de los más biodiversos del mundo.",
                    "2": "Los biólogos trabajan en la protección de especies en peligro de extinción, la restauración de hábitats degradados y la promoción de prácticas de manejo sostenible de recursos naturales."
                },
                "scientific": {
                    "title": "Investigación científica",
                    "1": "Los biólogos pueden trabajar en laboratorios académicos, instituciones de investigación o empresas privadas, investigando temas que van desde la genética hasta la ecología.",
                    "2": "La investigación biomédica es especialmente relevante, con instituciones dedicadas al estudio de enfermedades, biotecnología y medicina tradicional."
                },
                "environmental": {
                    "title": "Gestión ambiental y desarrollo sustentable",
                    "1": "Agencias gubernamentales, organizaciones no gubernamentales y empresas privadas trabajan para evaluar el impacto ambiental de proyectos de desarrollo, diseñar estrategias de conservación y promover prácticas que minimicen el impacto humano en los ecosistemas."
                },
                "education": {
                    "title": "Educación y divulgación científica",
                    "1": "Pueden trabajar como profesores en instituciones educativas, tanto a nivel medio superior como superior.",
                    "2": "Como comunicadores científicos en museos, centros de ciencia o medios de comunicación, ayudando a aumentar la conciencia pública sobre temas de biología y medio ambiente."
                },
                "entrepreneurship": {
                    "title": "Emprendimiento",
                    "1": "Desarrollo de tecnología y productos biotecnológicos, esto podría implicar la creación de una empresa para comercializar estos productos o colaborar con empresas existentes en la industria biotecnológica.",
                    "2": "Pueden establecer empresas de consultoría ambiental para ayudar a empresas y agencias gubernamentales a evaluar y mitigar su impacto ambiental.",
                    "3": "Ofreciendo servicios relacionados con la observación de la vida silvestre, excursiones ecoturísticas, o guías especializados en áreas naturales protegidas.",
                    "4": "Desarrollando soluciones innovadoras para problemas específicos en áreas como la agricultura, la salud, la conservación o la biotecnología."
                },
                "postgraduate": {
                    "title": "Estudios de posgrado",
                    "1": "Un biólogo puede continuar su formación académica a nivel de posgrado, permitiendo profundizar en áreas específicas de la biología y desarrollar habilidades avanzadas en investigación, enseñanza o aplicación práctica de conocimientos."
                }
            },
            "planEstudios":
            {
                "title": "Tira de materias",
                "firstSemester": {
                    "title": "Primer semestre",
                    "content": [
                        "Biomatemáticas",
                        "Biología Celular",
                        "Química General",
                        "Expresión Oral y Escrita",
                        "Técnicas de Muestreo en Campo y Laboratorio",
                        "Historia del Pensamiento Filosófico"
                    ]
                },
                "secondSemester": {
                    "title": "Segundo semestre",
                    "content": [
                        "Bioestadística",
                        "Biología de procariotas y virus",
                        "Teoría General de Sistemas",
                        "Bioquímica",
                        "Ciencias de la Tierra",
                        "Comunicación y Divulgación Científica"
                    ]
                },
                "thirdSemester": {
                    "title": "Tercer semestre",
                    "content": [
                        "Estadística",
                        "Embriología animal",
                        "Biología Molecular",
                        "Biología de Protozoa y Chromista",
                        "Patrimonio Biocultural",
                        "Climatología y Ciencias del Agua"
                    ]
                },
                "fourthSemester": {
                    "title": "Cuarto semestre",
                    "content": [
                        "Bioinformática y Ciencias de Datos",
                        "Genética",
                        "Invertebrados I (No Artrópodos)",
                        "Anatomía Animal Comparada",
                        "Biología de Briofitas a gimnospermas",
                        "Sociedad, Género y Ambiente"
                    ]
                },
                "fifthSemester": {
                    "title": "Quinto semestre",
                    "content": [
                        "Ecología básica y de poblaciones",
                        "Histología animal",
                        "Invertebrados II (Artrópodos)",
                        "Formulación de Proyectos y emprendimiento",
                        "Biología de Hongos",
                        "Angiospermas y Taxonomía Vegetal"
                    ]
                },
                "sixthSemester": {
                    "title": "Sexto semestre",
                    "content": [
                        "Ecología de comunidades y ecosistemas",
                        "Biología de cordados",
                        "Fisiología vegetal",
                        "Fisiología Animal",
                        "Legislación e Impacto Ambiental",
                        "Sistemática"
                    ]
                },
                "seventhSemester": {
                    "title": "Séptimo semestre",
                    "content": [
                        "Manejo y Conservación de Recursos Naturales",
                        "Biogeografía",
                        "Temas Selectos de Biotecnología",
                        "Sistemas de Información Geográfica",
                        "Optativa I",
                        "Optativa II"
                    ]
                },
                "eighthSemester": {
                    "title": "Octavo semestre",
                    "content": [
                        "Biología de la Conservación",
                        "Evolución",
                        "Biología de campo",
                        "Seminario de investigación",
                        "Optativa III",
                        "Optativa IV"
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
                        "Biodiversidad de Oaxaca",
                        "Restauración ecológica",
                        "Microbiología ambiental",
                        "Etnobiología",
                        "Fauna silvestre",
                        "Economía de los Recursos Naturales"
                    ]
                }
            }
        }
    },
    {
        "id": 3,
        "content": {
            "color": "#174485",
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
                "introduction": "Se propone cursar las siguientes asignaturas en el curso propedéutico:",
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
    },
    {
        "id": 4,
        "content": {
            "color": "#6E76E6",
            "headOfDepartment": "M.I.A. Miguel Ángel Curiel Olivera",
            "email": "ambiental@unsij.edu.mx",
            "title": "Licenciatura en ciencias ambientales para el desarrollo comunitario",
            "mission": {
                "title": "Misión",
                "content": "Ser una licenciatura de excelencia en el ámbito local y nacional, a partir de un plan de estudios integral" +
                    "e intercultural de acuerdo a las necesidades actuales integrando contenidos éticos, democráticos y humanísticos." +
                    "Contando con una planta académica de calidad, que permita la formación de estudiantes aptos para favorecer el desarrollo" +
                    "sostenible en sus entornos de vida y de influencia, a través de líneas de investigación que aborden los problemas socioambientales y" +
                    "fomenten el Desarrollo Comunitario."
            },
            "vision": {
                "title": "Visión",
                "content": "Formar profesionales en el área de Ciencias Ambientales para el Desarrollo Comunitario, a través de los procesos" +
                    "integrales desarrollados en el currículo que se fundamenta en los ejes de docencia, investigación, promoción al desarrollo y" +
                    "difusión de la cultura, con un enfoque intercultural; promoviendo la adquisición de conocimientos, actitudes, habilidades y destrezas" +
                    "con un alto nivel de responsabilidad y de excelencia, que permita a los egresados trabajar en equipos transdisciplinarios y multidisciplinarios," +
                    "en un contexto ético, democrático y humanista para la prevención, análisis, evaluación e implementación de soluciones creativas e innovadoras" +
                    "a los problemas socioambientales, con el propósito de lograr el desarrollo sostenible local y nacional."
            },
            "objective": {
                "title": "Objetivo",
                "content": "Formar profesionales con una visión integral en las Ciencias Ambientales para el Desarrollo Comunitario, que adquieran" +
                    "los conocimientos en diversas disciplinas científicas, sociales, humanísticas y de gestión, que les permita abordar de manera holística" +
                    "la problemática ambiental, y sean capaces de generar soluciones alternativas, propuestas de manejo y uso sostenible de los recursos naturales."
            },
            "admissionProfile": {
                "title": "Perfil de ingreso",
                "introduction": "El programa educativo está dirigido a estudiantes que concluyeron su bachillerato general o equivalente," +
                    "además es deseable que el aspirante tenga:",
                "options": {
                    "1": "Interés por encontrar soluciones a la problemática ambiental actual.",
                    "2": "Interés por colaborar con las comunidades para contribuir con el desarrollo sostenible.",
                    "3": "Interés y gusto por consolidar su formación profesional en las ciencias ambientales.",
                    "4": "Capacidad de análisis de textos y de comprensión.",
                    "5": "Disposición para realizar trabajo en equipo de manera colaborativa.",
                    "6": "Disposición para el trabajo de campo y de laboratorio en las diversas áreas de las Ciencias Ambientales.",
                    "7": "Disposición para el trabajo académico, en forma cooperativa y participativa, dentro y fuera del aula de clases.",
                    "8": "Iniciativa y competencia en su desempeño escolar.",
                    "9": "Actitud emprendedora.",
                    "10": "Interés por el aprendizaje de otros idiomas."
                }
            },
            "graduateProfile": {
                "title": "Perfil de egreso",
                "introduction": "Quien egresa de esta licenciatura tendrá un enfoque interdisciplinario e intercultural para identificar," +
                    "conocer, analizar, critica y creativamente los aspectos socioambientales de una comunidad, siendo capaz de planificar, aplicar" +
                    "y ejecutar mecanismos y estrategias de política ambiental para el desarrollo comunitario sostenible." +
                    "Competencias de quien egresa de la Licenciatura:",
                "options": {
                    "1": "Diseñar e implementar programas de educación ambiental comunitaria.",
                    "2": "Diseñar y evaluar planes de desarrollo, de evaluación de riesgos, ordenamientos y cambio climático a nivel comunitario y municipal.",
                    "3": "Vincular los conocimientos adquiridos con los conocimientos locales en el abordaje de problemas socioambientales (Ciencia ciudadana).",
                    "4": "Atender, respetar y valorar distintos ámbitos comunitarios para alcanzar y lograr una cultura de paz y promover la participación de actores con perspectiva de género.",
                    "5": "Proponer y acompañar mediante técnicas, métodos y procedimientos para solucionar problemáticas socioambientales (Suelo, agua, aire y biodiversidad).",
                    "6": "Elaborar criterios de responsabilidad social de las cooperativas y empresas comunitarias."
                }
            },
            "fieldOfAction": {
                "title": "Campo de acción",
                "introduction": "El Licenciado en Ciencias Ambientales para el Desarrollo Comunitario podrá incorporarse en diversas áreas del sector público o privado, donde podrá desempeñar una gran variedad de actividades y funciones, entre las cuáles puede destacarse en:",
                "public": {
                    "title": "Áreas de incidencia del sector público",
                    "1": "Vinculación y colaboración con Instituciones gubernamentales Estatales (SEMARNAT, PROFEPA, CONAGUA, CONABIO, entre otras).",
                    "2": "Vinculación y colaboración con Instituciones gubernamentales Federales (Secretaría del Medio Ambiente Biodiversidad, Energías y Sostenibilidad, Secretaría del Bienestar, Tequio e Inclusión, Secretaría de Fomento agroalimentario y Desarrollo Rural, Comisión Estatal Forestal, entre otras).",
                    "3": "Vinculación y colaboración con Instituciones Municipales, Regidurías municipales, Agencias Municipales, Localidades, entre otras."
                },
                "private": {
                    "title": "Áreas de incidencia del sector privado",
                    "1": "Consultorías ambientales.",
                    "2": "Empresas privadas para implementar sistemas de Gestión Ambiental.",
                    "3": "Asesor de empresas comunitarias."
                },
                "independent": {
                    "title": "Forma independiente",
                    "1": "Consultor Ambiental.",
                    "2": "Asesor Ambiental.",
                    "3": "Emprendedor Ambiental."
                },
                "education": {
                    "title": "Instituciones educativas",
                    "1": "Incorporación como docente en niveles medio superior y superior."
                },
                "postgraduate": {
                    "title": "Estudios de posgrado",
                    "1": "Incorporación a Estudios de Posgrado en Ciencias Ambientales u otras áreas afines."
                }
            },
            "planEstudios":
            {
                "title": "Tira de materias",
                "firstSemester": {
                    "title": "Primer semestre",
                    "content": [
                        "Razonamiento Lógico Matemático",
                        "Introducción a la Química Ambiental",
                        "Física",
                        "Ecología",
                        "Historia del Pensamiento Filosófico",
                        "Cultura Comunidad y Medio Ambiente"
                    ]
                },
                "secondSemester": {
                    "title": "Segundo semestre",
                    "content": [
                        "Matemáticas Aplicadas al Medio Ambiente",
                        "Química Ambiental",
                        "Geografías Culturales",
                        "Teoría General de Sistemas",
                        "Estadística",
                        "Fundamentos de Investigación"
                    ]
                },
                "thirdSemester": {
                    "title": "Tercer semestre",
                    "content": [
                        "Diagnóstico Comunitarios",
                        "Bioprocesos Ambientales",
                        "Sistemas de Información Geográfica",
                        "Administración",
                        "Legislación y Gobernanza Ambiental",
                        "Etnociencias"
                    ]
                },
                "fourthSemester": {
                    "title": "Cuarto semestre",
                    "content": [
                        "Gestión Ambiental Comunitaria",
                        "Geopolítica y Territorios",
                        "Ordenamiento Territorial Comunitario",
                        "Innovación y Emprendimientos Socioambientales",
                        "Monitoreo Ambiental",
                        "Género y Medio Ambiente"
                    ]
                },
                "fifthSemester": {
                    "title": "Quinto semestre",
                    "content": [
                        "Cambio Climático y Territorios",
                        "Educación Ambiental Comunitaria",
                        "Economía Ecológica y Solidaria",
                        "Optativa Ambiental",
                        "Optativa Social",
                        "Procesos Dinámicos de la Tierra"
                    ]
                },
                "sixthSemester": {
                    "title": "Sexto semestre",
                    "content": [
                        "Comunidades Virtuales",
                        "Impacto y Riesgo Socioambiental",
                        "Desarrollo Integral Comunitario",
                        "Instrumentos de Política Ambiental",
                        "Manejo Integral de Cuencas",
                        "Salud y Medio Ambiente"
                    ]
                },
                "seventhSemester": {
                    "title": "Séptimo semestre",
                    "content": [
                        "Servicios Ambientales",
                        "Conflictos Socioambientales",
                        "Gestión de Residuos Sólidos",
                        "Sociología Rural",
                        "Optativa",
                        "Bioética y Sostenibilidad"
                    ]
                },
                "eighthSemester": {
                    "title": "Octavo semestre",
                    "content": [
                        "Seminario de Tesis",
                        "Energías Renovables",
                        "Permacultura",
                        "Introducción a las Tecnologías Ambientales",
                        "Optativa",
                        "Microbiología Ambiental"
                    ]
                },
                "ninthSemester": {
                    "title": "Noveno semestre",
                    "content": [
                        "Estancia Profesional",
                        "Seminario de Titulación"
                    ]
                },
                "electives": {
                    "title": "Optativas",
                    "content": [
                        "Biotecnología",
                        "Restauración Ecológica",
                        "Tecnologías del Tratamiento de Aguas",
                        "Patrimonio Biocultural",
                        "Seguridad e Higiene en el Trabajo"
                    ]
                }
            }
        }
    },
    {
        "id": 5,
        "content": {
            "color": "#6ED2E6",
            "headOfDepartment": "Dr. Félix Pérez Garnica",
            "email": "turismo@unsij.edu.mx",
            "title": "Licenciatura en Administración Turística",
            "mission": {
                "title": "Misión",
                "content": "Consolidar profesionales de manera integral capaces de incidir en el desarrollo turístico" +
                    "sostenible de la región, del estado y del país con una perspectiva intercultural y con un alto compromiso social."
            },
            "vision": {
                "title": "Visión",
                "content": "Ser referente en la excelencia académica, la innovación en la enseñanza y el compromiso con la gestión responsable del turismo."
            },
            "objective": {
                "title": "Objetivo",
                "content": "Formar profesionales que adquieran conocimientos, habilidades, actitudes y valores que serán promovidos y ejecutados en las organizaciones turísticas."
            },
            "admissionProfile": {
                "title": "Perfil de ingreso",
                "introduction": "El aspirante a la Licenciatura en Administración Turística deberá poseer las siguientes características:",
                "options": {
                    "1": "Habilidad para expresarse de forma oral y escrita",
                    "2": "Interés por el conocimiento de la cultura y la naturaleza",
                    "3": "Disposición para trabajar en equipo",
                    "4": "Ser proactivo y propositivo",
                    "5": "Interés por la gestión y administración de empresas",
                    "6": "Responsable y tener actitud de servicio",
                    "7": "Interés por desarrollar habilidades creativas",
                    "8": "Disposición por resolución de problemas",
                    "9": "Interés por desarrollar habilidades culinarias",
                    "10": "Afinidad para el manejo de grupos humanos",
                    "11": "Interés por desarrollar relaciones humanas",
                    "12": "Gusto por el estudio de las dinámicas de viajes",
                    "13": "Interés por la sostenibilidad y la vinculación comunitaria"
                }
            },
            "graduateProfile": {
                "title": "Perfil de egreso",
                "introduction": "Los egresados del programa de Licenciatura en Administración Turística serán profesionales capaces de:",
                "options": {
                    "1": "Generar y difundir conocimiento sobre las diversas áreas vinculadas al turismo.",
                    "2": "Promover, planificar, organizar y gestionar proyectos de turismo, ya sean convencionales o alternativos.",
                    "3": "Actuar de manera crítica, consciente y eficiente, guiados por los principios de sostenibilidad, equidad e interculturalidad.",
                    "4": "Orientar el turismo hacia prácticas más justas y sostenibles, reconociendo la complejidad de este fenómeno en su contexto social, ambiental y económico, contribuyendo así al desarrollo.",
                    "5": "Desempeñarse tanto en el sector público como en el privado y social."
                }
            },
            "fieldOfAction": {
                "title": "Campo de acción",
                "introduction": "El egresado de la Licenciatura en Administración Turística podrá desempeñarse en:",
                "options": {
                    "1": "Empresas de alimentos y bebidas",
                    "2": "Empresas de hospedaje",
                    "3": "Agencias de viaje, transportadoras, operadoras y guías de turista",
                    "4": "Animación y recreación turística",
                    "5": "Emprendimientos y negocios",
                    "6": "Organización de eventos",
                    "7": "Gestión comunitaria",
                    "8": "Asesoría y consultoría",
                    "9": "Formulación y evaluación de proyectos (economía social y solidaria)",
                    "10": "Administración pública",
                    "11": "Organizaciones e instituciones públicas y no gubernamentales",
                    "12": "Docencia e investigación",
                    "13": "Difusión y divulgación del patrimonio biocultural"
                }
            },
            "planEstudios":
            {
                "title": "Tira de materias",
                "firstSemester": {
                    "title": "Primer semestre",
                    "content": [
                        "Historia del pensamiento filosófico",
                        "Técnicas de comunicación",
                        "TIC",
                        "Gestión administrativa",
                        "Matemáticas financieras",
                        "Turismo I"
                    ]
                },
                "secondSemester": {
                    "title": "Segundo semestre",
                    "content": [
                        "Teoría general de sistemas",
                        "Derecho laboral",
                        "TIC aplicadas al turismo",
                        "Gestión del talento humano",
                        "Geografía del turismo",
                        "Turismo II"
                    ]
                },
                "thirdSemester": {
                    "title": "Tercer semestre",
                    "content": [
                        "Historia de la cultura",
                        "Legislación turística",
                        "Sociología",
                        "Economía",
                        "Contabilidad general",
                        "Administración de servicios de hospedaje"
                    ]
                },
                "fourthSemester": {
                    "title": "Cuarto semestre",
                    "content": [
                        "Patrimonio",
                        "Estadística",
                        "Sociología del turismo",
                        "Economía social y solidaria",
                        "Costos",
                        "Administración de servicios de hospedaje II"
                    ]
                },
                "fifthSemester": {
                    "title": "Quinto semestre",
                    "content": [
                        "Historia del Arte de Oaxaca",
                        "Sostenibilidad y turismo",
                        "Psicología aplicada al turismo",
                        "Mercadotecnia General",
                        "Finanzas turísticas",
                        "Administración de empresas de alimentos y bebidas"
                    ]
                },
                "sixthSemester": {
                    "title": "Sexto semestre",
                    "content": [
                        "Turismo cultural",
                        "Turismo alternativo",
                        "Planeación turística",
                        "Mercadotecnia turística",
                        "Recreación turística",
                        "Técnicas culinarias"
                    ]
                },
                "seventhSemester": {
                    "title": "Séptimo semestre",
                    "content": [
                        "Administración de agencias y servicios de viaje",
                        "Calidad en los servicios turísticos",
                        "Optativa",
                        "Formulación y evaluación de proyectos",
                        "Enología y Mixología",
                        "Habilidades blandas"
                    ]
                },
                "eighthSemester": {
                    "title": "Octavo semestre",
                    "content": [
                        "Tendencias del turismo",
                        "Seminario de tesis",
                        "Turismo de reuniones",
                        "Formulación y evaluación de proyectos turísticos",
                        "Estrategias Turísticas"
                    ]
                },
                "ninthSemester": {
                    "title": "Noveno semestre",
                    "content": [
                        "Estancias profesionales",
                        "Seminario de titulación"
                    ]
                },
                "electives": {
                    "title": "Optativas",
                    "content": [
                        "Patrimonio Biocultural",
                        "Gestión comunitaria",
                        "Temas selectos de gastronomía",
                        "Gestión pública y turismo"
                    ]
                }
            }
        }
    }
];

export default dataCareers;