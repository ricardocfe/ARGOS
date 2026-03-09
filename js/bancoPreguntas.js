        const theoryBank = [
            {
                q: "¿Cuál es la regla fundamental sobre presentarse a laborar bajo los efectos del alcohol o drogas?",
                opts: [
                    { text: "Queda estrictamente prohibido y es causal de sanción o rescisión.", isCorrect: true },
                    { text: "Se permite si es una cantidad mínima y no voy a manejar.", isCorrect: false },
                    { text: "Solo está prohibido para el personal de líneas vivas.", isCorrect: false }
                ],
                exp: "Reglamento: Está estrictamente prohibido laborar o conducir bajo el influjo del alcohol o estupefacientes. [cite: 1299]"
            },
            {
                q: "Si te sientes enfermo o fatigado para realizar tu ruta de forma segura, ¿cuál es tu obligación?",
                opts: [
                    { text: "Avisar inmediatamente a tu jefe directo antes de iniciar tus labores.", isCorrect: true },
                    { text: "Salir a ruta y avanzar más despacio para cumplir la meta.", isCorrect: false },
                    { text: "Tomar medicamento y no decirle a nadie.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligación del trabajador reportar a su superior cualquier malestar o fatiga extrema que le impida laborar con seguridad. [cite: 1455]"
            },
            {
                q: "Para conducir un vehículo oficial de la CFE, el trabajador debe portar obligatoriamente:",
                opts: [
                    { text: "Licencia de manejo vigente y la Constancia de Aptitud que lo autorice.", isCorrect: true },
                    { text: "Su gafete de CFE únicamente.", isCorrect: false },
                    { text: "Solo su licencia de manejo estatal.", isCorrect: false }
                ],
                exp: "Reglamento: Ningún trabajador operará vehículos de CFE sin portar licencia vigente y la Constancia de Aptitud expedida por la empresa. [cite: 2829]"
            },
            {
                q: "¿Qué indica el reglamento sobre el uso de anillos, cadenas, relojes o accesorios metálicos en campo?",
                opts: [
                    { text: "Están prohibidos por representar riesgo de atrapamiento o contacto eléctrico.", isCorrect: true },
                    { text: "Se pueden usar si están cubiertos por la camisa.", isCorrect: false },
                    { text: "Solo están prohibidos si son de materiales conductores como el oro.", isCorrect: false }
                ],
                exp: "Reglamento: Prohibido portar accesorios metálicos (cadenas, relojes, anillos) durante los trabajos en campo. [cite: 1741]"
            },
            {
                q: "Para la protección contra fauna nociva (perros) durante la lectura, el trabajador debe portar:",
                opts: [
                    { text: "El ahuyentador de perros (gas pimienta) provisto por la empresa.", isCorrect: true },
                    { text: "Un palo, varilla o piedras para defenderse.", isCorrect: false },
                    { text: "Bocinas con sonidos fuertes.", isCorrect: false }
                ],
                exp: "Reglamento: El personal que realiza lectura/reparto está obligado a portar su repelente o ahuyentador de fauna (gas pimienta). [cite: 1908]"
            },
            {
                q: "El casco de seguridad reglamentario para los lecturistas en campo debe ser:",
                opts: [
                    { text: "Clase 'E' (Dieléctrico) ala completa y siempre utilizarse con el barboquejo.", isCorrect: true },
                    { text: "De cualquier tipo mientras tenga el logotipo de la CFE.", isCorrect: false },
                    { text: "Una gorra o sombrero para cubrirse del sol.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligatorio el uso de casco dieléctrico Clase E con ala completa y barboquejo para todas las maniobras de campo terrestre. [cite: 1658]"
            },
            {
                q: "Si aplicas las '6 A's' y detectas un cable pelado rozando un charco (Riesgo Inminente), debes:",
                opts: [
                    { text: "No tomar lectura, retirarte y reportar la condición insegura de inmediato.", isCorrect: true },
                    { text: "Tomar la lectura rápido sin pisar el charco.", isCorrect: false },
                    { text: "Intentar acomodar el cable con una rama seca.", isCorrect: false }
                ],
                exp: "Reglamento: Ante un riesgo inminente, se debe suspender la maniobra, alejarse del peligro y notificar al centro de control o supervisor. [cite: 1490]"
            },
            {
                q: "¿A qué prioridad se subordina la seguridad en la CFE?",
                opts: [
                    { text: "La seguridad es prioridad uno, NO se subordina a producción, costos ni decisiones personales.", isCorrect: true },
                    { text: "Se subordina a la producción para no afectar la cobranza.", isCorrect: false },
                    { text: "Se subordina a las órdenes del jefe inmediato.", isCorrect: false }
                ],
                exp: "Reglamento: En todos los niveles DEBEN CONSTITUIR SIEMPRE LA PRIORIDAD NÚMERO UNO, SIN SUBORDINARSE A LA PRODUCCIÓN. [cite: 1243]"
            },
            {
                q: "Al observar que un compañero no cumple con las reglas de seguridad, tu obligación es:",
                opts: [
                    { text: "Hacérselo saber de inmediato y reportarlo a tu jefe inmediato y comisión de seguridad.", isCorrect: true },
                    { text: "Ignorarlo, cada quien es responsable de sus actos.", isCorrect: false },
                    { text: "Solo decirle que tenga cuidado pero no reportarlo para no ser mal compañero.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligación de todos hacer cumplir las reglas y reportar incumplimientos. [cite: 1254]"
            },
            {
                q: "¿Cuál es el límite de carga manual permitido para un trabajador sin ayuda mecánica?",
                opts: [
                    { text: "No debe exceder de 25 kg.", isCorrect: true },
                    { text: "No debe exceder de 50 kg.", isCorrect: false },
                    { text: "El peso que el trabajador sienta que puede levantar.", isCorrect: false }
                ],
                exp: "Reglamento: El límite de carga manual para trabajadores... no exceda de 25 kg. [cite: 1502]"
            },
            {
                q: "¿Cuál es la forma correcta de levantar objetos pesados del suelo?",
                opts: [
                    { text: "Manteniendo la espalda recta y realizando el esfuerzo con brazos y piernas.", isCorrect: true },
                    { text: "Flexionando la espalda hacia adelante para agarrar impulso.", isCorrect: false },
                    { text: "Doblando el torso sin flexionar las rodillas.", isCorrect: false }
                ],
                exp: "Reglamento: Al levantar objetos manualmente, debe evitarse flexionar la espalda... Debe mantenerse la espalda recta. [cite: 1504, 1505]"
            },
            {
                q: "¿Hacia qué dirección debe estacionarse invariablemente todo vehículo oficial de CFE?",
                opts: [
                    { text: "Dirigiendo el frente hacia la salida.", isCorrect: true },
                    { text: "De frente hacia la banqueta para no estorbar el tráfico.", isCorrect: false },
                    { text: "Como resulte más cómodo para bajar el material.", isCorrect: false }
                ],
                exp: "Reglamento: Todo vehículo oficial de CFE debe estacionarse en los centros de trabajo dirigiendo el frente a la salida. [cite: 2825]"
            },
            {
                q: "Durante la conducción de vehículos oficiales, el uso del celular o radio de comunicación está:",
                opts: [
                    { text: "Estrictamente prohibido. Se debe estacionar en lugar seguro para contestar.", isCorrect: true },
                    { text: "Permitido si se usa en altavoz o manos libres.", isCorrect: false },
                    { text: "Permitido solo para asuntos oficiales de la ruta.", isCorrect: false }
                ],
                exp: "Reglamento: Queda estrictamente prohibido el uso de teléfono celular o radio de comunicación durante la conducción de vehículos oficiales. [cite: 2823]"
            },
            {
                q: "¿En qué momento deben colocarse el cinturón de seguridad los ocupantes de un vehículo oficial?",
                opts: [
                    { text: "Antes de que se inicie el movimiento del vehículo.", isCorrect: true },
                    { text: "Una vez que el vehículo se incorpora a una avenida principal.", isCorrect: false },
                    { text: "Solo cuando salgan a carretera.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligatorio usar los cinturones de seguridad por todos los ocupantes del vehículo, antes de que se inicie el movimiento. [cite: 2852]"
            },
            {
                q: "¿Cuál es el límite de velocidad para vehículos dentro de las instalaciones y estacionamientos de CFE?",
                opts: [
                    { text: "10 km/h", isCorrect: true },
                    { text: "20 km/h", isCorrect: false },
                    { text: "30 km/h", isCorrect: false }
                ],
                exp: "Reglamento: Todo el personal que ingrese a instalaciones y estacionamientos de CFE está obligado a respetar el límite de velocidad de 10 Km/h. [cite: 2850]"
            },
            {
                q: "¿Qué se debe hacer si encuentras cables caídos en la vía pública?",
                opts: [
                    { text: "Considerarlos energizados, acordonar con avisos preventivos y quedarse a vigilar.", isCorrect: true },
                    { text: "Moverlos con una rama seca hacia la banqueta y seguir la ruta.", isCorrect: false },
                    { text: "Ignorarlos, ya que es trabajo de la cuadrilla de mantenimiento.", isCorrect: false }
                ],
                exp: "Reglamento: Informará de la situación a su jefe, colocando avisos preventivos y quedándose a vigilar para controlar los riesgos. [cite: 1490]"
            },
            {
                q: "¿Cuál es la regla para apoyar correctamente una escalera portátil (Regla de 4 a 1)?",
                opts: [
                    { text: "Mantener un ángulo de 75 grados, separando la base 1 metro por cada 4 de altura.", isCorrect: true },
                    { text: "Apoyarla en un ángulo de 45 grados para mayor estabilidad.", isCorrect: false },
                    { text: "Separar la base 4 metros por cada metro de altura.", isCorrect: false }
                ],
                exp: "Reglamento: Debe apoyarse buscando un ángulo de 75 grados. Esto se logra mediante la regla del 4 a 1. [cite: 2012, 2013]"
            },
            {
                q: "¿Cómo se debe usar la ropa de trabajo proporcionada por CFE durante la jornada?",
                opts: [
                    { text: "Completamente abotonada y fajada.", isCorrect: true },
                    { text: "Desfajada por el calor, pero limpia.", isCorrect: false },
                    { text: "Desabotonada del pecho si la sensación térmica es extrema.", isCorrect: false }
                ],
                exp: "Reglamento: Durante toda la jornada de trabajo es obligatorio usar la camisa fajada y abotonada. [cite: 1858]"
            },
            {
                q: "¿Qué debes verificar en un tubo de recepción de acometida (mufa) antes de recargar tu escalera?",
                opts: [
                    { text: "Que esté firme mediante una prueba de esfuerzo con soga desde el piso.", isCorrect: true },
                    { text: "Que sea de metal galvanizado.", isCorrect: false },
                    { text: "Nada, todos los tubos soportan el peso de una escalera.", isCorrect: false }
                ],
                exp: "Reglamento: Los tubos no siempre tienen la resistencia, se debe realizar prueba de murete y tubo con soga desde el piso antes de ascender. [cite: 2148]"
            },
            {
                q: "¿Cómo deben pasarse las herramientas entre un trabajador en piso y uno en altura?",
                opts: [
                    { text: "Usando polea, soga mandadera, gancho y cubeta de lona.", isCorrect: true },
                    { text: "Aventándolas con cuidado y avisando '¡ahí va!'.", isCorrect: false },
                    { text: "Llevándolas en los bolsillos del pantalón al subir.", isCorrect: false }
                ],
                exp: "Reglamento: Queda prohibido lanzar las herramientas. Deben utilizarse cubeta de lona y soga mandadera. [cite: 1510, 1511]"
            },
            {
                q: "Si en tu ruta encuentras un registro o pozo de visita sin tapa en la banqueta, ¿qué debes hacer?",
                opts: [
                    { text: "Identificarlo con señales de peligro, acordonar y reportarlo.", isCorrect: true },
                    { text: "Brincarlo con cuidado.", isCorrect: false },
                    { text: "Buscar cartones o basura para taparlo y seguir la ruta.", isCorrect: false }
                ],
                exp: "Reglamento: Los hoyos y registros sin tapa deben identificarse con señales de peligro, avisos preventivos y acordonamiento. [cite: 1472]"
            },
            {
                q: "Al realizar trabajos en vías públicas con tránsito peatonal y vehicular, es obligatorio usar:",
                opts: [
                    { text: "Chaleco color fosforescente con tiras reflejantes o arnés normalizado.", isCorrect: true },
                    { text: "Solamente el uniforme de CFE bien limpio.", isCorrect: false },
                    { text: "Cinta perimetral amarrada a la cintura.", isCorrect: false }
                ],
                exp: "Reglamento: Los trabajadores de piso y en la vía pública deben usar chalecos fosforescentes con tiras reflejantes o arnés normalizado. [cite: 1465]"
            },
            {
                q: "¿Está permitido transportar a personas ajenas a CFE en un vehículo oficial?",
                opts: [
                    { text: "No, se prohíbe transportar personas ajenas en asuntos no oficiales.", isCorrect: true },
                    { text: "Sí, si van en el mismo rumbo.", isCorrect: false },
                    { text: "Sí, si se les cobra una cuota de recuperación para gasolina.", isCorrect: false }
                ],
                exp: "Reglamento: Se prohíbe transportar personas ajenas a C.F.E. en asuntos no oficiales. [cite: 2821]"
            },
            {
                q: "¿Qué se debe hacer con el vehículo si detectas fallas graves en frenos, dirección o llantas en tu revisión pre-ruta?",
                opts: [
                    { text: "El vehículo queda fuera de servicio hasta que se hagan las correcciones.", isCorrect: true },
                    { text: "Manejar a muy baja velocidad extremando precauciones.", isCorrect: false },
                    { text: "Hacer la ruta y al final del día llevarlo al taller.", isCorrect: false }
                ],
                exp: "Reglamento: Cualquier falla de estos sistemas motivará que el vehículo quede fuera de servicio hasta hacer las correcciones. [cite: 2836]"
            },
            {
                q: "¿Qué material es el único permitido para las escaleras portátiles en trabajos cerca de líneas eléctricas?",
                opts: [
                    { text: "Fibra de vidrio o madera (sin refuerzos metálicos).", isCorrect: true },
                    { text: "Aluminio con zapatas de goma.", isCorrect: false },
                    { text: "Acero galvanizado ligero.", isCorrect: false }
                ],
                exp: "Reglamento: Las escaleras portátiles deben ser de material dieléctrico (fibra de vidrio o madera) sin refuerzos metálicos. [cite: 2010, 2011]"
            },
            {
                q: "¿Está permitido alterar vehículos oficiales (ej. instalar luces xenón, estéreos potentes o polarizados oscuros)?",
                opts: [
                    { text: "Se prohíbe alterar las condiciones originales que pongan en riesgo la seguridad.", isCorrect: true },
                    { text: "Sí, siempre y cuando el trabajador lo pague de su bolsa.", isCorrect: false },
                    { text: "Solo se permite polarizado por el calor de la región.", isCorrect: false }
                ],
                exp: "Reglamento: Se prohíbe alterar las condiciones originales de los vehículos oficiales (luces xenón, polarizados fuera de norma, etc). [cite: 2844]"
            },
            {
                q: "¿Qué condición debe mantenerse siempre en la cabina del vehículo respecto a la limpieza?",
                opts: [
                    { text: "Libre de objetos sueltos (como botellas) que puedan caer debajo de los pedales.", isCorrect: true },
                    { text: "No importa si hay basura mientras no huela mal.", isCorrect: false },
                    { text: "Se pueden llevar herramientas sueltas en el asiento del copiloto.", isCorrect: false }
                ],
                exp: "Reglamento: Orden y Limpieza en cabina debiendo estar libre de objetos que pudieran caer debajo de los pedales de frenado. [cite: 2826]"
            },
            {
                q: "¿Qué elementos básicos debe tener obligatoriamente el vehículo para casos de emergencia?",
                opts: [
                    { text: "Botiquín de primeros auxilios y extintor en buenas condiciones.", isCorrect: true },
                    { text: "Cables pasa corriente y agua para el radiador.", isCorrect: false },
                    { text: "Comida enlatada y radio comercial.", isCorrect: false }
                ],
                exp: "Reglamento: En los vehículos deben tenerse botiquines equipados y extintor. [cite: 2842]"
            },
            {
                q: "Si en tu ruta vas a ingresar a una zona rural de alta maleza, ¿qué EPP adicional es recomendable usar?",
                opts: [
                    { text: "Botas tipo viboreras o polainas de protección.", isCorrect: true },
                    { text: "Repelente de mosquitos en aerosol.", isCorrect: false },
                    { text: "Tenis para correr más rápido en caso de ataque.", isCorrect: false }
                ],
                exp: "Reglamento: Protección contra ataque de animales: Debe requerirse botas tipo viboreras o polainas de protección. [cite: 1901, 1902, 1906]"
            },
            {
                q: "¿Qué debes hacer si la escalera portátil de madera tiene peldaños astillados y la pintura impide ver el daño?",
                opts: [
                    { text: "Las escaleras de madera no deben pintarse de colores, solo con material transparente. Debe ser retirada de uso.", isCorrect: true },
                    { text: "Pintarla de rojo para marcar el peligro.", isCorrect: false },
                    { text: "Enredarle cinta de aislar en el peldaño y usarla con cuidado.", isCorrect: false }
                ],
                exp: "Reglamento: Las escaleras de madera solo podrán ser pintadas con material transparente que no oculten daños. [cite: 2023]"
            },
            {
                q: "En la lectura de medidores, si un circuito de baja tensión está abierto desde su interruptor, ¿se puede tocar sin guantes?",
                opts: [
                    { text: "No, se debe verificar ausencia de potencial con voltímetro, ya que puede tener retornos de energía.", isCorrect: true },
                    { text: "Sí, el interruptor abierto garantiza que no hay energía.", isCorrect: false },
                    { text: "Sí, si se bajó el fusible del transformador.", isCorrect: false }
                ],
                exp: "Reglamento: Recuerde que hay circuitos de baja tensión interconectados o plantas de emergencia que pueden provocar retornos. [cite: 727]"
            },
            {
                q: "¿Es válido utilizar una gorra de tela en lugar del casco dieléctrico si el calor es extremo?",
                opts: [
                    { text: "Falso. Está prohibido el uso de gorras; el casco Clase E es obligatorio.", isCorrect: true },
                    { text: "Verdadero, si la ruta es 100% caminando en el sol.", isCorrect: false },
                    { text: "Verdadero, si se usa debajo del casco.", isCorrect: false }
                ],
                exp: "Reglamento: Prohibir el uso de gorras. Es obligatorio el uso de casco dieléctrico Clase E con ala completa. [cite: 1310, 1658]"
            },
            {
                q: "¿En qué condiciones puedes alterar las características originales de tu EPP (ej. recortar el ala del casco)?",
                opts: [
                    { text: "Bajo ninguna circunstancia está permitido alterar el EPP.", isCorrect: true },
                    { text: "Cuando estorba la visión periférica.", isCorrect: false },
                    { text: "Cuando el supervisor te dé permiso verbal.", isCorrect: false }
                ],
                exp: "Reglamento: Queda prohibido alterar las características originales del equipo de protección personal (EPP). [cite: 1654]"
            },
            {
                q: "Si encuentras un panal de abejas o avispas muy cerca del medidor, ¿qué debes hacer?",
                opts: [
                    { text: "Evitar el incidente, no tomar la lectura y reportar a las autoridades correspondientes.", isCorrect: true },
                    { text: "Echarle humo o gas pimienta para que se alejen y leer rápido.", isCorrect: false },
                    { text: "Golpear el panal con una pértiga para tirarlo.", isCorrect: false }
                ],
                exp: "Reglamento: En caso de detección de panales de abejas, el trabajador debe evitar cualquier incidente, reportando a autoridades para su control. [cite: 752]"
            },
            {
                q: "¿Qué debes hacer antes de mover tu vehículo de reversa si no tienes visibilidad completa?",
                opts: [
                    { text: "Solicitar ayuda de un compañero (vigía) y fijarme en los espejos.", isCorrect: true },
                    { text: "Acelerar fuerte para salir rápido de la zona ciega.", isCorrect: false },
                    { text: "Tocar el claxon ininterrumpidamente y avanzar.", isCorrect: false }
                ],
                exp: "Reglamento: Se debe mantener visibilidad clara. Si obstruye visibilidad, pedir ayuda. [cite: 990, 992]"
            },
            {
                q: "Al manejar herramientas cortantes o retirar sellos metálicos de medidores, ¿qué guantes debes usar?",
                opts: [
                    { text: "Guantes de cuero o piel.", isCorrect: true },
                    { text: "Guantes de hule dieléctricos clase 0.", isCorrect: false },
                    { text: "No usar guantes para tener mayor sensibilidad.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligación utilizar guantes de cuero para manejar material con aristas filosas, cortantes, abrasivas o punzantes. [cite: 1514]"
            },
            {
                q: "Si necesitas cruzar un tramo inundado o lodo espeso a pie, y traes el medidor en la mano, ¿qué regla aplica?",
                opts: [
                    { text: "Asegurar el terreno, no exponerse a resbalones o hundimientos y usar el calzado adecuado.", isCorrect: true },
                    { text: "Correr rápido para no hundirse.", isCorrect: false },
                    { text: "Quitarse las botas para no ensuciarlas.", isCorrect: false }
                ],
                exp: "Reglamento: Mantener la integridad física es prioridad. Se deben evitar actos inseguros como resbalones por terrenos no propicios. [cite: 2338]"
            },
            {
                q: "¿Qué haces si al inspeccionar tu equipo de protección (ej. guantes o casco) detectas que está dañado?",
                opts: [
                    { text: "No usarlo, reportarlo al jefe inmediato y solicitar su reposición.", isCorrect: true },
                    { text: "Repararlo con cinta de aislar para salir del apuro.", isCorrect: false },
                    { text: "Usarlo con mucho cuidado para no atrasar el trabajo.", isCorrect: false }
                ],
                exp: "Reglamento: De encontrarse en mal estado, no los debe utilizar y gestionará su reposición. [cite: 1646, 1647]"
            },
            {
                q: "Si en una inspección la escalera portátil de fibra de vidrio presenta rajaduras, debes:",
                opts: [
                    { text: "Reportarla y retirarla de uso; está prohibido repararla improvisadamente.", isCorrect: true },
                    { text: "Reforzar los largueros con placas metálicas atornilladas.", isCorrect: false },
                    { text: "Pegarla con resina epóxica y seguir usándola.", isCorrect: false }
                ],
                exp: "Reglamento: Evitar reparaciones improvisadas en escaleras. No deben reforzarse los largueros con partes metálicas. [cite: 2010, 2018]"
            },
            {
                q: "Al trabajar cerca del tránsito vehicular, la ubicación de conos o señales de precaución debe depender de:",
                opts: [
                    { text: "La topografía, configuración de la vía y la velocidad del tráfico.", isCorrect: true },
                    { text: "La cantidad de conos que traiga la camioneta.", isCorrect: false },
                    { text: "Siempre a exactamente 3 metros del vehículo.", isCorrect: false }
                ],
                exp: "Reglamento: Los preventivos deben estar a una distancia adecuada, considerando topografía, configuración de la vía y velocidad. [cite: 1471]"
            },
            {
                q: "¿Se permite llevar a cabo maniobras y reparaciones del vehículo oficial con el motor encendido?",
                opts: [
                    { text: "Debe evitarse. Si es inevitable, mantenerse alejado de partes móviles como el ventilador.", isCorrect: true },
                    { text: "Sí, es obligatorio para saber si el motor responde bien.", isCorrect: false },
                    { text: "Sí, siempre y cuando se ponga el freno de mano.", isCorrect: false }
                ],
                exp: "Reglamento: Debe evitarse efectuar reparaciones, ajustes o reposición de niveles con el motor encendido. [cite: 2837]"
            },
            {
                q: "¿Está permitido usar gafas de sol (lentes oscuros) para leer medidores durante la noche?",
                opts: [
                    { text: "No, se deben utilizar lentes claros para trabajos nocturnos y oscuros para trabajos diurnos.", isCorrect: true },
                    { text: "Sí, si hay mucha luz en las calles.", isCorrect: false },
                    { text: "Sí, para evitar el deslumbramiento de los faros de los carros.", isCorrect: false }
                ],
                exp: "Reglamento: A todo trabajador se le dotará de protección ocular, lentes claros para la noche y oscuros para el día. [cite: 1710]"
            },
            {
                q: "La limpieza y el orden de los lugares de trabajo, incluyendo la cabina del vehículo y las oficinas, es:",
                opts: [
                    { text: "Responsabilidad obligatoria del trabajador.", isCorrect: true },
                    { text: "Responsabilidad del personal de intendencia exclusivamente.", isCorrect: false },
                    { text: "Opcional, siempre y cuando se cumpla la meta de lectura.", isCorrect: false }
                ],
                exp: "Reglamento: Los vehículos deben mantenerse siempre en buen estado de funcionamiento, orden y limpieza. Es obligación de los conductores. [cite: 2831, 2832]"
            },
            {
                q: "Si en un medidor encuentras la tapa de cristal rota y filosa, debes:",
                opts: [
                    { text: "Utilizar guantes de piel/cuero para evitar cortaduras y reportar la anomalía.", isCorrect: true },
                    { text: "Retirarla con las manos desnudas con cuidado.", isCorrect: false },
                    { text: "Romper el cristal por completo con las pinzas.", isCorrect: false }
                ],
                exp: "Reglamento: Es obligación utilizar guantes de cuero para manejar materiales con aristas filosas, cortantes o abrasivas. [cite: 1713, 1714]"
            },
            {
                q: "Si sufres un incidente menor en campo (ej. tropiezo sin lesión grave), ¿estás obligado a reportarlo?",
                opts: [
                    { text: "Sí, se deben reportar todos los accidentes e incidentes para investigar y prevenir.", isCorrect: true },
                    { text: "No, solo se reportan incidentes que requieran incapacidad médica.", isCorrect: false },
                    { text: "No, para evitar un mal récord en el departamento.", isCorrect: false }
                ],
                exp: "Reglamento: Es responsabilidad de los trabajadores reportar tan pronto sea posible los accidentes o incidentes ocurridos. [cite: 1318, 1319]"
            },
            {
                q: "¿Cuál es la regla sobre correr o hacer bromas pesadas durante la jornada laboral?",
                opts: [
                    { text: "Están prohibidas, especialmente aquellas que puedan causar accidentes.", isCorrect: true },
                    { text: "Se permiten en la hora de comida.", isCorrect: false },
                    { text: "Son permitidas para aliviar el estrés térmico.", isCorrect: false }
                ],
                exp: "Reglamento: Impedir el juego y las bromas, en especial aquellas que puedan causar accidentes. Vigilar el trato respetuoso. [cite: 1301, 1302, 1303]"
            },
            {
                q: "¿Qué característica debe tener el calzado de seguridad del personal de campo?",
                opts: [
                    { text: "Debe ser dieléctrico, de protección y usarse con las agujetas atadas hasta la parte superior.", isCorrect: true },
                    { text: "Pueden ser tenis deportivos mientras tengan casquillo.", isCorrect: false },
                    { text: "Cualquier bota de trabajo es válida.", isCorrect: false }
                ],
                exp: "Reglamento: El calzado de seguridad deberá atar las agujetas hasta la parte superior, sujetándolas en todo momento adecuadamente. [cite: 1859]"
            },
            {
                q: "Si te asignan una ruta en una zona con caminos vecinales (terracería), ¿cuál es la velocidad máxima permitida?",
                opts: [
                    { text: "40 km/h, o menos si las condiciones del terreno son malas.", isCorrect: true },
                    { text: "60 km/h.", isCorrect: false },
                    { text: "La que indique el GPS.", isCorrect: false }
                ],
                exp: "Reglamento: ...40 km/hr en caminos vecinales, lo cual no significa respetar la máxima, sino disminuirla según el terreno. [cite: 2846]"
            },
            {
                q: "¿Está permitido usar reproductores de música con auriculares (audífonos) mientras conduces el vehículo oficial?",
                opts: [
                    { text: "No, no se debe hacer uso de auriculares al conducir.", isCorrect: true },
                    { text: "Sí, siempre y cuando se use en un solo oído.", isCorrect: false },
                    { text: "Sí, si el radio del vehículo no funciona.", isCorrect: false }
                ],
                exp: "Reglamento: No se debe hacer uso de cualquier tipo de reproductor de música con auricular cuando se esté manejando. [cite: 2824]"
            },
            {
                q: "¿Cómo debes verificar la ausencia de voltaje en una mufa de baja tensión?",
                opts: [
                    { text: "Con un voltímetro o equipo normalizado.", isCorrect: true },
                    { text: "Usando los dedos rápidamente.", isCorrect: false },
                    { text: "Con un desarmador buscando que salte una chispa.", isCorrect: false }
                ],
                exp: "Reglamento: Para el caso de baja tensión la detección de ausencia de potencial debe realizarse con voltímetro o equipo normalizado. Nunca con los dedos. [cite: 2606]"
            }
        ];

