const theoryBank = [
    {
        q: "¿Quién debe tomar la decisión y qué procedimiento seguir si surge un caso no previsto en el Reglamento de Seguridad e Higiene?",
        opts: [
            { text: "El trabajador de mayor experiencia, informando al Sindicato.", isCorrect: false },
            { text: "El Jefe Inmediato, con base a un análisis normativo, informando a la Comisión de Seguridad y al Depto. Divisional.", isCorrect: true },
            { text: "El Superintendente de Zona, suspendiendo la maniobra.", isCorrect: false },
            { text: "El Supervisor de Seguridad mediante bitácora electrónica.", isCorrect: false }
        ],
        exp: "El Jefe Inmediato decidirá con base a un análisis normativo, haciéndolo del conocimiento de la CSH y del Departamento Divisional [Sección 101 - B]."
    },
    {
        q: "Si un contratista necesita invadir un Área de Trabajo propia de CFE, ¿cuál es su obligación?",
        opts: [
            { text: "Acordonar con cinta roja e iniciar sus trabajos.", isCorrect: false },
            { text: "Desenergizar la instalación por su cuenta.", isCorrect: false },
            { text: "Informar oportunamente al responsable del Centro de Trabajo para que personal experto de CFE realice los trabajos en esa área.", isCorrect: true },
            { text: "Llenar un permiso de alto riesgo en la bitácora.", isCorrect: false }
        ],
        exp: "Debe informar oportunamente al responsable de CFE para precisar la forma de realizar los trabajos mediante personal experto [Sección 101 - F.5]."
    },
    {
        q: "¿Qué lineamiento es obligatorio para todo el personal respecto a la Reunión de Inicio de Jornada (RIJ)?",
        opts: [
            { text: "Es opcional para el personal de confianza.", isCorrect: false },
            { text: "Debe realizarse solo los lunes.", isCorrect: false },
            { text: "Todo personal con mando debe cumplir con la RIJ todos los días laborales.", isCorrect: true },
            { text: "Se debe realizar únicamente si hay maniobras de alto riesgo.", isCorrect: false }
        ],
        exp: "Todo personal con mando debe cumplir con la Reunión de Inicio de Jornada (RIJ) todos los días laborales [Sección 102 - B.1]."
    },
    {
        q: "¿Cuál es la restricción sobre el uso de teléfonos celulares durante el desarrollo de maniobras de mantenimiento u operación?",
        opts: [
            { text: "Solo pueden usarse en altavoz.", isCorrect: false },
            { text: "Está prohibido su uso para el personal que ejecuta las maniobras.", isCorrect: true },
            { text: "Pueden usarse si el liniero está embandolado.", isCorrect: false },
            { text: "El supervisor es el único que no puede usarlo.", isCorrect: false }
        ],
        exp: "Se prohíbe el uso de teléfonos celulares al personal que ejecuta las maniobras durante el desarrollo de las mismas [Sección 102 - B.16]."
    },
    {
        q: "Si las maniobras o el equipo a utilizar pueden presentar la posibilidad de fallar (quebrarse o doblarse), ¿cuándo debe tomarse en cuenta esta posibilidad?",
        opts: [
            { text: "Al ocurrir el accidente.", isCorrect: false },
            { text: "Al redactar el reporte de fin de turno.", isCorrect: false },
            { text: "Durante la planeación de los trabajos.", isCorrect: true },
            { text: "Solo cuando se trabaje con contratistas.", isCorrect: false }
        ],
        exp: "Al planear los trabajos, debe tomarse en cuenta la posibilidad de que los materiales o herramientas fallen al ser sujetos a esfuerzos [Sección 103 - A.3]."
    },
    {
        q: "¿Cómo deben manejarse las reparaciones provisionales en las instalaciones?",
        opts: [
            { text: "Se pueden dejar hasta el próximo mantenimiento anual.", isCorrect: false },
            { text: "Deben evitarse en lo posible, reportarse por escrito, colocar avisos preventivos y programar su corrección.", isCorrect: true },
            { text: "Son la norma en situaciones de restablecimiento rápido.", isCorrect: false },
            { text: "Solo requieren aviso verbal al Centro de Control.", isCorrect: false }
        ],
        exp: "Deben evitarse en lo posible, reportarse al jefe inmediato/centro de control, y colocar avisos preventivos para su corrección [Sección 103 - E]."
    },
    {
        q: "En el desarrollo de trabajos en campo, el flujo de peatones y vehículos es un riesgo alto. ¿Qué medida obligatoria establece el reglamento?",
        opts: [
            { text: "Trabajar más rápido para despejar la zona.", isCorrect: false },
            { text: "Colocar un letrero en el camión.", isCorrect: false },
            { text: "Extremar medidas de control con barreras físicas para impedir la circulación dentro del área.", isCorrect: true },
            { text: "Gritar advertencias a los peatones.", isCorrect: false }
        ],
        exp: "Se deben extremar medidas de control con barreras físicas para impedir la circulación dentro del área de trabajo [Sección 104 - C.4]."
    },
    {
        q: "¿Bajo qué única condición puede un trabajador ejecutar maniobras si no cuenta con la constancia de habilidades laborales?",
        opts: [
            { text: "Si firma un deslinde de responsabilidades.", isCorrect: false },
            { text: "Si el trabajo es de baja tensión exclusivamente.", isCorrect: false },
            { text: "Si se realiza en capacitación tutelar, bajo la dirección y supervisión atenta de una persona experimentada.", isCorrect: true },
            { text: "Nunca.", isCorrect: false }
        ],
        exp: "En caso de realizarlas en capacitación tutelar, lo hará bajo la dirección de una persona experimentada que permanezca en el lugar [Sección 104 - A]."
    },
    {
        q: "Durante el día, si un hoyo, cepa o registro debe dejarse abierto, ¿cómo se protege?",
        opts: [
            { text: "Con lámparas destellantes.", isCorrect: false },
            { text: "Con avisos preventivos, acordonamiento, conos fosforescentes o barreras.", isCorrect: true },
            { text: "Basta con atravesar el vehículo oficial.", isCorrect: false },
            { text: "Se cubre con ramas.", isCorrect: false }
        ],
        exp: "Los hoyos o registros sin tapa deben identificarse con señales de peligro como avisos, acordonamiento, conos o barreras [Sección 105 - A.4]."
    },
    {
        q: "Si un trabajador encuentra conductores caídos que representan peligro, ¿cuándo dejarán de considerarse energizados?",
        opts: [
            { text: "A los 5 minutos de haberse caído.", isCorrect: false },
            { text: "Cuando el Centro de Control confirme la apertura del circuito.", isCorrect: false },
            { text: "Se considerarán energizados mientras no se coloque una tierra física en el lugar de la falla.", isCorrect: true },
            { text: "Al dejar de producir chispas.", isCorrect: false }
        ],
        exp: "Los conductores caídos se considerarán energizados mientras no se coloque una tierra física en el lugar de la falla [Sección 105 - C.3]."
    },
    {
        q: "¿Qué peso establece el reglamento como límite de carga manual para un trabajador sin ayuda mecánica?",
        opts: [
            { text: "20 kg", isCorrect: false },
            { text: "25 kg", isCorrect: true },
            { text: "30 kg", isCorrect: false },
            { text: "35 kg", isCorrect: false }
        ],
        exp: "El límite de carga manual no debe exceder de 25 kg para un solo trabajador físicamente apto [Sección 106 - A.1]."
    },
    {
        q: "¿Cuál es la regla fundamental para pasar herramientas o materiales entre niveles diferentes?",
        opts: [
            { text: "Lanzarlos con cuidado avisando '¡Va!'.", isCorrect: false },
            { text: "Llevarlos todos en el cinturón portaherramientas.", isCorrect: false },
            { text: "Queda prohibido lanzarlos; se debe usar polea con soga mandadera, gancho y cubeta de lona.", isCorrect: true },
            { text: "Bajarlos usando el cable de la canastilla.", isCorrect: false }
        ],
        exp: "Queda prohibido lanzar las herramientas; debe usarse polea con soga mandadera, gancho y cubeta de lona [Sección 106 - B]."
    },
    {
        q: "¿Qué tipo de guantes es obligatorio utilizar durante toda estancia y trabajo en canastillas o plataformas en líneas energizadas?",
        opts: [
            { text: "Guantes de carnaza.", isCorrect: false },
            { text: "Guantes de algodón puro.", isCorrect: false },
            { text: "Guantes y mangas dieléctricos de la clase adecuada.", isCorrect: true },
            { text: "Guantes resistentes a cortes.", isCorrect: false }
        ],
        exp: "Durante todo el tiempo que el liniero permanezca en la canastilla o plataforma, debe usar mangas y guantes dieléctricos [Sección 107 - G.3]."
    },
    {
        q: "¿Qué indica el reglamento sobre cómo debe llevarse la ropa de trabajo durante la jornada?",
        opts: [
            { text: "Fajada pero con las mangas remangadas si hace calor.", isCorrect: false },
            { text: "La camisa debe ir fajada y abotonada tanto de mangas como del pecho.", isCorrect: true },
            { text: "Es opcional mientras se use el casco.", isCorrect: false },
            { text: "Solo es obligatorio abotonarla al subir al poste.", isCorrect: false }
        ],
        exp: "Durante toda la jornada es obligatorio usar la camisa fajada y abotonada, tanto de mangas como del pecho [Sección 107 - K.2]."
    },
    {
        q: "¿Cómo deben transportarse las herramientas manuales mientras se trabaja?",
        opts: [
            { text: "En los bolsillos si son pequeñas.", isCorrect: false },
            { text: "Enganchadas directamente al arnés.", isCorrect: false },
            { text: "En los dispositivos establecidos (fundas, cartucheras, cubeta portaherramienta), nunca en los bolsillos.", isCorrect: true },
            { text: "Sueltas en el piso de la canastilla.", isCorrect: false }
        ],
        exp: "Ningún tipo de herramienta debe transportarse en los bolsillos, se debe utilizar funda o cubeta [Sección 108 - A.5]."
    },
    {
        q: "¿Qué acción de seguridad debe ejecutarse inmediatamente cuando se termine de usar una máquina soldadora o se deje desatendida?",
        opts: [
            { text: "Bajar el amperaje a cero.", isCorrect: false },
            { text: "Apagarla y desconectarla.", isCorrect: true },
            { text: "Cubrirla con una lona resistente al fuego.", isCorrect: false },
            { text: "Retirar los cables de tierra.", isCorrect: false }
        ],
        exp: "Toda máquina soldadora que deja de utilizarse o es dejada desatendida, debe apagarse y desconectarse [Sección 116 - C.3 y Sec 108]."
    },
    {
        q: "¿Cómo debe estacionarse obligatoriamente todo vehículo oficial de CFE en los centros de trabajo?",
        opts: [
            { text: "De lado para ahorrar espacio.", isCorrect: false },
            { text: "Con el frente dirigido hacia la salida.", isCorrect: true },
            { text: "Cerca de los extintores.", isCorrect: false },
            { text: "No hay una regla específica.", isCorrect: false }
        ],
        exp: "Todo vehículo oficial de CFE debe estacionarse dirigiendo el frente a la salida [Sección 114 - A.5]."
    },
    {
        q: "¿Qué prohíbe el reglamento hacer con el motor encendido de un vehículo oficial?",
        opts: [
            { text: "Encender las luces de advertencia.", isCorrect: false },
            { text: "Efectuar reparaciones, ajustes o reposición de niveles de líquidos.", isCorrect: true },
            { text: "Utilizar el radio de comunicación.", isCorrect: false },
            { text: "Subir las ventanas.", isCorrect: false }
        ],
        exp: "Debe evitarse efectuar reparaciones, ajustes o reposición de niveles de líquidos con el motor encendido [Sección 114 - C.3]."
    },
    {
        q: "En trabajos dentro de espacios confinados (bóvedas, transformadores), ¿con qué equipo obligatorio de rescate se debe contar?",
        opts: [
            { text: "Un arnés y una cuerda común.", isCorrect: false },
            { text: "Tripie con todos sus accesorios para rescate y salvamento.", isCorrect: true },
            { text: "Una camilla marina.", isCorrect: false },
            { text: "Soga mandadera de 1/2 pulgada.", isCorrect: false }
        ],
        exp: "Se debe estar capacitado en técnicas de rescate y contar con el equipo de rescate (tripie con todos sus accesorios) [Sección 115 - B.3]."
    },
    {
        q: "Si un trabajador mueve un extintor de su lugar pero no lo usa, ¿cuál es su responsabilidad?",
        opts: [
            { text: "Dejarlo donde terminó el trabajo.", isCorrect: false },
            { text: "Entregarlo al guardia de seguridad.", isCorrect: false },
            { text: "Colocarlo nuevamente en su mismo lugar.", isCorrect: true },
            { text: "Llevarlo al almacén.", isCorrect: false }
        ],
        exp: "Todo trabajador que retire un extintor tiene la obligación de colocarlo nuevamente en su lugar de no haberlo utilizado [Sección 115 - F.2]."
    },
    {
        q: "¿Cómo deben manejarse los transformadores de corriente respecto a su secundario cuando están energizados?",
        opts: [
            { text: "Se pueden abrir si la carga es mínima.", isCorrect: false },
            { text: "Se deben aislar con cinta de aislar.", isCorrect: false },
            { text: "Nunca debe abrirse el secundario; antes debe cortocircuitarse con puentes.", isCorrect: true },
            { text: "Solo pueden abrirse con pinzas de punta aislada.", isCorrect: false }
        ],
        exp: "Nunca debe abrirse el secundario energizado; debe antes cortocircuitarse con puentes provisionales [Sección 117 - D]."
    },
    {
        q: "Si un gabinete o caja metálica que contiene equipo eléctrico NO está aterrizado, ¿cómo debe ser considerado?",
        opts: [
            { text: "Desenergizado por ser el chasis.", isCorrect: false },
            { text: "Energizado a 110 V.", isCorrect: false },
            { text: "Energizado a la tensión más alta de los circuitos que contenga.", isCorrect: true },
            { text: "Peligroso solo en época de lluvias.", isCorrect: false }
        ],
        exp: "Las cajas metálicas no aterrizadas se considerarán energizadas a la tensión más alta de los circuitos que contengan [Sección 117 - B.7]."
    },
    {
        q: "Al finalizar la jornada en oficinas, ¿cuál es la técnica correcta exigida para desconectar un equipo?",
        opts: [
            { text: "Jalar el cable rápidamente.", isCorrect: false },
            { text: "Jalar directamente de la clavija y no del cable.", isCorrect: true },
            { text: "Bajar el interruptor (breaker) general.", isCorrect: false },
            { text: "Dejar conectado si tiene regulador.", isCorrect: false }
        ],
        exp: "Se deben apagar y desconectar jalando directamente de la clavija y no del cable [Sección 123 - D.3]."
    },
    {
        q: "En el ensamble de andamios, ¿qué está estrictamente prohibido usar para compensar los desniveles del piso?",
        opts: [
            { text: "Sujetadores atornillados.", isCorrect: false },
            { text: "Bloques de madera.", isCorrect: true },
            { text: "Placas de acero.", isCorrect: false },
            { text: "Niveladores de rosca.", isCorrect: false }
        ],
        exp: "Nunca compensar los desniveles del piso con bloques de madera; se deben usar sujetadores atornillados [Sección 123 - G.1.a]."
    },
    {
        q: "¿Qué deben hacer los trabajadores sindicalizados o de confianza si observan que un compañero omite reglas de seguridad o está intoxicado?",
        opts: [
            { text: "Hacer caso omiso si no es de su cuadrilla.", isCorrect: false },
            { text: "Advertirle verbalmente y dejarlo a su criterio.", isCorrect: false },
            { text: "Es obligación hacérselo saber y reportarlo a su jefe inmediato, sindicato y CSH; si no lo hace será sancionado.", isCorrect: true },
            { text: "Solo reportarlo si ocurre un accidente.", isCorrect: false }
        ],
        exp: "Es obligación reportarlo. Si el trabajador que lo observa no lo reporta, él mismo podrá ser sancionado [Sección 101 - E]."
    },
    {
        q: "A quiénes está expresamente prohibido que desarrollen trabajos dentro de las instalaciones operativas de CFE?",
        opts: [
            { text: "A trabajadores de otras zonas.", isCorrect: false },
            { text: "A personal practicante y/o visitante.", isCorrect: true },
            { text: "A ingenieros recién egresados.", isCorrect: false },
            { text: "A cuadrillas de mantenimiento civil.", isCorrect: false }
        ],
        exp: "Es responsabilidad del mando prohibir que personal practicante y/o visitante desarrollen trabajos en las instalaciones [Sección 102 - B.12]."
    },
    {
        q: "Si al planear y ejecutar una maniobra en el sitio se identifica un peligro adicional NO contemplado en el aula, ¿qué procede?",
        opts: [
            { text: "Continuar y reportarlo al finalizar.", isCorrect: false },
            { text: "Deberá replantearse para establecer los controles necesarios.", isCorrect: true },
            { text: "Llamar al superintendente para que decida.", isCorrect: false },
            { text: "Asumir el riesgo si la falla es crítica.", isCorrect: false }
        ],
        exp: "Si se identifica un riesgo no contemplado inicialmente, deberá replantearse la maniobra para establecer controles [Sección 103 - A.3]."
    },
    {
        q: "¿Qué requisito deben cumplir las instrucciones de trabajo para su ejecución?",
        opts: [
            { text: "Ser largas y detalladas.", isCorrect: false },
            { text: "Ser claras, precisas y contar con la autorización de su área.", isCorrect: true },
            { text: "Imprimirse en color.", isCorrect: false },
            { text: "Estar firmadas por el Sindicato.", isCorrect: false }
        ],
        exp: "Las instrucciones de trabajo deben ser claras, precisas y contar con la autorización de su área [Sección 104 - E]."
    },
    {
        q: "En trabajos dentro de subestaciones, para evitar confusiones al intervenir secciones múltiples semejantes (como tableros PCyM), ¿qué acción es obligatoria?",
        opts: [
            { text: "Apagar la iluminación general.", isCorrect: false },
            { text: "Marcar la sección correcta con gis.", isCorrect: false },
            { text: "Acordonar con cinta delimitadora la parte frontal y posterior del tablero seleccionado.", isCorrect: true },
            { text: "Solo permitir el paso al jefe de área.", isCorrect: false }
        ],
        exp: "Se deberá acordonar las secciones necesarias del tablero PCyM mediante cinta en la parte frontal y posterior [Sección 105 - B.4]."
    },
    {
        q: "¿Cuál es la regla para el enganche de remolques a los vehículos de CFE?",
        opts: [
            { text: "Usar un perno grueso sin seguro.", isCorrect: false },
            { text: "Amarrarlos con estrobos de acero.", isCorrect: false },
            { text: "Deben acoplarse con cadenas de seguridad con ganchos y pasadores de suficiente resistencia.", isCorrect: true },
            { text: "Engancharlos solo del tirón principal de bola.", isCorrect: false }
        ],
        exp: "Solo podrán trasladarse cuando se acoplen cadenas de seguridad de suficiente resistencia [Sección 106 - I.2]."
    },
    {
        q: "Al utilizar la bandola y detectar que aparece la 'cinta roja' de advertencia en su tejido, ¿cuál es el procedimiento?",
        opts: [
            { text: "Forrarla con cinta de aislar.", isCorrect: false },
            { text: "Usarla solo para trabajos a baja altura.", isCorrect: false },
            { text: "Debe cortarse y desecharse inmediatamente.", isCorrect: true },
            { text: "Reportarla para mantenimiento y costura.", isCorrect: false }
        ],
        exp: "Al aparecer la cinta roja de la bandola, ésta debe cortarse y desecharse [Sección 107 - L.1]."
    },
    {
        q: "¿Qué restricción de vestimenta aplica al operar máquinas herramientas (rotativas/oscilatorias)?",
        opts: [
            { text: "No usar guantes de hule.", isCorrect: false },
            { text: "No traer la ropa suelta, cabello suelto o joyas para evitar atrapamientos.", isCorrect: true },
            { text: "Usar obligatoriamente chaleco salvavidas.", isCorrect: false },
            { text: "Llevar las mangas arriba del codo.", isCorrect: false }
        ],
        exp: "Asegurarse de no traer ropa suelta, cabello suelto o pulseras para evitar atrapamientos [Sección 108 - C.1]."
    },
    {
        q: "¿Qué obligación tiene el conductor antes de salir a carretera respecto a su vehículo oficial?",
        opts: [
            { text: "Lavar la unidad.", isCorrect: false },
            { text: "Hacer una inspección de seguridad conforme a la lista de verificación (frenos, llantas, luces, botiquín, etc.).", isCorrect: true },
            { text: "Quitar el limitador de velocidad.", isCorrect: false },
            { text: "Encender la torreta todo el viaje.", isCorrect: false }
        ],
        exp: "Antes de salir a carretera debe hacerse una inspección de seguridad como lo marca la lista de verificación [Sección 114 - D.1]."
    },
    {
        q: "¿Dónde deben tenerse los números telefónicos y direcciones de atención a emergencias (médicos, bomberos, Cruz Roja)?",
        opts: [
            { text: "Solo en el Centro de Control.", isCorrect: false },
            { text: "En el manual de usuario del vehículo.", isCorrect: false },
            { text: "En todo lugar de trabajo, incluyendo los vehículos, de manera visible y accesible.", isCorrect: true },
            { text: "En la oficina del Sindicato.", isCorrect: false }
        ],
        exp: "En todo lugar de trabajo, incluyendo vehículos, se tendrá en lugar visible y accesible el directorio de emergencias [Sección 115 - C.1 y E]."
    },
    {
        q: "Para probar ausencia o presencia de tensión en un circuito de baja tensión, ¿qué método prohíbe el reglamento?",
        opts: [
            { text: "Usar multímetro.", isCorrect: false },
            { text: "Usar probador de neón.", isCorrect: false },
            { text: "Usar los dedos.", isCorrect: true },
            { text: "Revisarlo de noche.", isCorrect: false }
        ],
        exp: "Nunca se usarán los dedos para verificar tensión eléctrica; se determinará con un voltímetro [Sección 117 - B.3]."
    },
    {
        q: "Durante el trabajo nocturno en cercanías de equipo energizado, si la visión no es clara, ¿qué debe hacer el trabajador?",
        opts: [
            { text: "Avanzar palpando las estructuras.", isCorrect: false },
            { text: "Usar guantes doble capa y avanzar.", isCorrect: false },
            { text: "No efectuar ningún movimiento hasta que pueda ver perfectamente todos los conductores que le rodean.", isCorrect: true },
            { text: "Lanzar una cuerda para ver si hay chispa.", isCorrect: false }
        ],
        exp: "No efectuar ningún movimiento hasta que pueda ver perfectamente todos los conductores que le rodean [Sección 123 - A.2]."
    },
    {
        q: "¿Qué documento DEBE entregarse al contratista y dejar constancia en bitácora antes de iniciar una obra?",
        opts: [
            { text: "Planos arquitectónicos.", isCorrect: false },
            { text: "Un ejemplar del Reglamento Capítulo 100 y el Reglamento de Seguridad para Contratistas.", isCorrect: true },
            { text: "El contrato colectivo del SUTERM.", isCorrect: false },
            { text: "Vales de gasolina.", isCorrect: false }
        ],
        exp: "Entregar un ejemplar impreso o electrónico del Reglamento Capítulo 100 y de Contratistas, dejando constancia [Sección 101 - F.3]."
    },
    {
        q: "En una rampa o pendiente, ¿hacia dónde debe operar SIEMPRE el brazo hidráulico de la grúa?",
        opts: [
            { text: "Hacia abajo de la pendiente.", isCorrect: false },
            { text: "Hacia el lado más despejado.", isCorrect: false },
            { text: "Siempre hacia la parte de arriba de la pendiente.", isCorrect: true },
            { text: "Perpendicular al chasis del camión.", isCorrect: false }
        ],
        exp: "El brazo hidráulico debe operarse siempre hacia la parte de arriba de la pendiente para mantener la estabilidad [Sección 106 - J.12]."
    },
    {
        q: "¿Qué ocurre si un guante dieléctrico de hule presenta daños como grietas o astillas, aunque pase la prueba dieléctrica?",
        opts: [
            { text: "Se usa solo como guante protector interno.", isCorrect: false },
            { text: "Debe destruirse y mutilarse parcialmente (cortar un dedo) para evitar su uso.", isCorrect: true },
            { text: "Se vulcaniza en el taller.", isCorrect: false },
            { text: "Se reserva para líneas de baja tensión.", isCorrect: false }
        ],
        exp: "El guante debe destruirse aun cuando pase las pruebas dieléctricas, mutilándose para evitar su uso por equivocación [Sección 107 - H.2 y 9]."
    },
    {
        q: "Para transportar cargas pesadas y voluminosas (ej. carretes de cable) en vehículos de CFE, ¿qué establece la norma?",
        opts: [
            { text: "Colocarlas en el centro exacto de la batea sin amarrar.", isCorrect: false },
            { text: "Sujetarlas firmemente al vehículo, acuñándose y/o amarrándose con medios adecuados para soportar la carga.", isCorrect: true },
            { text: "Poner a un ayudante a sostener la carga durante el viaje.", isCorrect: false },
            { text: "Desinflar un poco las llantas para ganar agarre.", isCorrect: false }
        ],
        exp: "Se sujetarán firmemente al vehículo, acuñándose y/o amarrándose con medios adecuados para evitar desplazamientos [Sección 106 - D]."
    }
];
