let isPracticeMode = false;
let selectedModule = 'classic';
let currentActiveModule = '';
let isFieldMode = false;
let isRutaMode = false;

let userData = { name: '', rpe: '' };
let stats = { total: 10, current: 0, correct: 0 };

let currentReading = 0;
let isAnomalyCurrent = false;
let currentNumDials = 5;
let currentAnomDial = -1;

let digiInterval;
let digiTarget = "";
let impCorrectCode = "";
let audValues = [0, 0, 0, 0, 0];
let audTarget = 0;

let qTimerInterval;
let qTimeLeft = 7;
let justDidTransit = false;

const transitEvents = [
    { q: "Vas conduciendo el vehículo oficial y suena tu celular personal. ¿Qué haces?", opts: [{ text: "Contestar rápido.", isCorrect: false }, { text: "Estacionarme en lugar seguro para contestar.", isCorrect: true }], exp: "Prohibido usar celular conduciendo." },
    { q: "Llegas a la colonia y te estacionas. ¿Cómo lo haces?", opts: [{ text: "De frente a la banqueta.", isCorrect: false }, { text: "De reversa, frente a la salida.", isCorrect: true }], exp: "Todo vehículo debe estacionarse con el frente a la salida." },
    { q: "Notas botellas sueltas en el piso de la cabina.", opts: [{ text: "Las dejo ahí.", isCorrect: false }, { text: "Las recojo.", isCorrect: true }], exp: "Cabina libre de objetos que obstruyan pedales." },
    { q: "Terminaste la ruta y te subes al vehículo.", opts: [{ text: "Arranco rápido por la presión del tiempo.", isCorrect: false }, { text: "Me coloco el cinturón de seguridad antes de arrancar.", isCorrect: true }], exp: "Obligatorio usar cinturón de seguridad antes de iniciar el movimiento." }
];

// CHECKLIST
function checkChecklist() {
    let allChecked = true;
    for (let i = 1; i <= 7; i++) { if (!document.getElementById('chk' + i).checked) allChecked = false; }
    const btn = document.getElementById('btnStartRoute');
    btn.disabled = !allChecked; btn.style.opacity = allChecked ? 1 : 0.5;
}
for (let i = 1; i <= 7; i++) { document.getElementById('chk' + i).addEventListener('change', checkChecklist); }

function startTest(practice) {
    isPracticeMode = practice;
    userData.name = document.getElementById('inputName').value.trim();
    userData.rpe = document.getElementById('inputRPE').value.trim();

    if (!userData.name || !userData.rpe) return alert("⚠️ Completa Nombre y RPE.");

    selectedModule = document.getElementById('moduleSelect').value;
    isFieldMode = document.getElementById('fieldModeCheck').checked;
    isRutaMode = document.getElementById('rutaCheck').checked;

    document.getElementById('loginScreen').classList.add('hidden');
    for (let i = 1; i <= 7; i++) { document.getElementById('chk' + i).checked = false; }
    checkChecklist();
    document.getElementById('checklistScreen').classList.remove('hidden');
}

function startRoute() {
    document.getElementById('checklistScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    stats.current = 0; stats.correct = 0;
    generateQuestion();
}

function startQuestionTimer() {
    clearInterval(qTimerInterval);
    document.getElementById('qTimerDisplay').classList.add('hidden');

    // EL TIMER SE PAUSA SI ES PREGUNTA TEÓRICA
    if (!isRutaMode || currentActiveModule === 'theory') return;

    document.getElementById('qTimerDisplay').classList.remove('hidden');
    qTimeLeft = 7;
    document.getElementById('qTimerText').innerText = qTimeLeft + "s";

    qTimerInterval = setInterval(() => {
        qTimeLeft--;
        document.getElementById('qTimerText').innerText = qTimeLeft + "s";
        if (qTimeLeft <= 0) {
            clearInterval(qTimerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    document.getElementById('userReading').disabled = true;
    showFeedback(false, "¡TIEMPO AGOTADO!", "En campo debes ser más rápido.");
}

function triggerTransitEvent() {
    const overlay = document.getElementById('transitOverlay');
    const sit = document.getElementById('transitSituation');
    const opts = document.getElementById('transitOptions');
    let ev = transitEvents[Math.floor(Math.random() * transitEvents.length)];

    sit.innerText = ev.q; opts.innerHTML = '';
    ev.opts.forEach(o => {
        let btn = document.createElement('button'); btn.className = 'btn-outline'; btn.innerText = o.text;
        btn.onclick = () => evalTransit(o.isCorrect, ev.exp);
        opts.appendChild(btn);
    });
    overlay.style.display = 'flex';
}

function evalTransit(isCorrect, exp) {
    document.getElementById('transitOverlay').style.display = 'none';
    if (isCorrect) showFeedback(true, "BUENA DECISIÓN", "Conducción segura. Avanzando...");
    else showFeedback(false, "VIOLACIÓN DE SEGURIDAD", "Has cometido una falta grave.", exp);
}

function generateQuestion() {
    clearInterval(digiInterval);
    if (isPracticeMode) { document.getElementById('qCountText').innerText = stats.current + 1; }
    else {
        document.getElementById('qCountText').innerText = (stats.current + 1) + "/" + stats.total;
        if (stats.current >= stats.total) { finishTest(); return; }
    }

    if (selectedModule === 'random') {
        const mods = ['classic', 'auditor', 'digital', 'impediment', 'theory'];
        currentActiveModule = mods[Math.floor(Math.random() * mods.length)];
    } else { currentActiveModule = selectedModule; }

    hideAllModules();
    document.getElementById('inlineFeedback').classList.add('hidden');

    if (currentActiveModule === 'classic') setupClassic();
    else if (currentActiveModule === 'auditor') setupAuditor();
    else if (currentActiveModule === 'digital') setupDigital();
    else if (currentActiveModule === 'impediment') setupImpediment();
    else if (currentActiveModule === 'theory') setupTheory();

    startQuestionTimer();
}

function hideAllModules() {
    document.getElementById('mod-electromecanico').classList.add('hidden');
    document.getElementById('mod-digital').classList.add('hidden');
    document.getElementById('mod-impedimento').classList.add('hidden');
    document.getElementById('mod-theory').classList.add('hidden');
    document.getElementById('generalControls').classList.add('hidden');
    document.getElementById('auditorControls').classList.add('hidden');
    document.getElementById('auditorTarget').classList.add('hidden');
    document.getElementById('btnAnomaly').style.display = 'none';
}

function applyFieldMode() {
    const meterCont = document.getElementById('meterDisplay');
    const digitalCont = document.getElementById('digitalScreenContainer');
    if (isFieldMode) { meterCont.classList.add('field-mode-active'); digitalCont.classList.add('field-mode-active'); }
    else { meterCont.classList.remove('field-mode-active'); digitalCont.classList.remove('field-mode-active'); }
}

/* ================= MÓDULO 1: CLÁSICO ================= */
function setupClassic() {
    document.getElementById('mod-electromecanico').classList.remove('hidden');
    document.getElementById('generalControls').classList.remove('hidden');
    document.getElementById('userReading').classList.remove('hidden');
    document.getElementById('btnAnomaly').style.display = 'block';
    applyFieldMode();

    isAnomalyCurrent = (Math.random() < 0.15);
    currentNumDials = (Math.random() < 0.15) ? 4 : 5;
    currentAnomDial = isAnomalyCurrent ? Math.floor(Math.random() * (currentNumDials - 2)) + 1 : -1;

    createDials();
    let input = document.getElementById('userReading');
    input.maxLength = currentNumDials; input.placeholder = currentNumDials === 4 ? "0000" : "00000";
    input.value = ''; input.disabled = false; input.focus();

    currentReading = Math.floor(Math.random() * (currentNumDials === 5 ? 99999 : 9999));
    renderHands(currentReading, isAnomalyCurrent);
}

/* ================= MÓDULO 2: AUDITOR ================= */
function setupAuditor() {
    document.getElementById('mod-electromecanico').classList.remove('hidden');
    document.getElementById('auditorControls').classList.remove('hidden');
    document.getElementById('auditorTarget').classList.remove('hidden');
    document.getElementById('generalControls').classList.remove('hidden');
    document.getElementById('userReading').classList.add('hidden');
    applyFieldMode();

    currentNumDials = 5; audTarget = Math.floor(Math.random() * 99999); audValues = [0, 0, 0, 0, 0];
    document.getElementById('auditorTarget').innerHTML = `🎯 Objetivo: <b>${audTarget.toString().padStart(5, '0')}</b>`;
    createDials(); buildAuditorControls(); renderHands(0, false);
}
function buildAuditorControls() {
    let container = document.getElementById('auditorControls'); container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let col = document.createElement('div'); col.className = 'aud-col';
        col.innerHTML = `<button class="aud-btn" onclick="audChange(${i}, 1)">▲</button><div class="aud-val" id="audV-${i}">0</div><button class="aud-btn" onclick="audChange(${i}, -1)">▼</button>`;
        container.appendChild(col);
    }
}
function audChange(i, dir) {
    audValues[i] += dir; if (audValues[i] > 9) audValues[i] = 0; if (audValues[i] < 0) audValues[i] = 9;
    document.getElementById(`audV-${i}`).innerText = audValues[i];
    renderHands(parseInt(audValues.join('')), false);
}

/* ================= MÓDULO 3: DIGITALES ================= */
function setupDigital() {
    document.getElementById('mod-digital').classList.remove('hidden');
    document.getElementById('generalControls').classList.remove('hidden');
    document.getElementById('userReading').classList.remove('hidden');
    applyFieldMode();

    let input = document.getElementById('userReading');
    input.maxLength = 5; input.placeholder = "00000"; input.value = ''; input.disabled = false; input.focus();

    digiTarget = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
    let phases = ["88.8.8.8.8", "08-03-26", "15:42:00", `${digiTarget} kWh`, `${Math.floor(Math.random() * 99999).toString().padStart(5, '0')} kVARh`, `00.12 kW`];
    let mixed = phases.slice(1).sort(() => Math.random() - 0.5);
    let finalPhases = [phases[0], ...mixed];
    let step = 0;

    document.getElementById('digital-text').innerText = finalPhases[0];
    digiInterval = setInterval(() => { step++; document.getElementById('digital-text').innerText = finalPhases[step % finalPhases.length]; }, 1800);
}

/* ================= MÓDULO 4: IMPEDIMENTOS ================= */
function setupImpediment() {
    document.getElementById('mod-impedimento').classList.remove('hidden');
    const sc = [
        { t: "El medidor está dentro de una reja y hay un perro pastor alemán suelto ladrando.", c: "perro" },
        { t: "Llegas al domicilio y el portón está cerrado con candado. Nadie atiende.", c: "cerrado" },
        { t: "El cristal del medidor está completamente blanco y quemado por el sol.", c: "opaco" },
        { t: "En la base del medidor solo cuelgan los cables, el equipo no está.", c: "retirado" }
    ];
    let r = sc[Math.floor(Math.random() * sc.length)];
    document.getElementById('impText').innerText = `"${r.t}"`;
    impCorrectCode = r.c;
}

/* ================= MÓDULO 5: TEORÍA (CAP 100) ================= */
function setupTheory() {
    document.getElementById('mod-theory').classList.remove('hidden');
    let item = theoryBank[Math.floor(Math.random() * theoryBank.length)];

    document.getElementById('theoryQuestionText').innerText = item.q;
    let optsCont = document.getElementById('theoryOptionsContainer');
    optsCont.innerHTML = '';

    let shuffledOpts = [...item.opts].sort(() => Math.random() - 0.5);

    shuffledOpts.forEach(o => {
        let btn = document.createElement('button');
        btn.className = 'btn-theory';
        btn.innerText = o.text;
        btn.onclick = () => evalTheory(o.isCorrect, item.exp);
        optsCont.appendChild(btn);
    });
}

function evalTheory(isCorrect, exp) {
    if (isCorrect) stats.correct++;
    showFeedback(isCorrect, isCorrect ? "RESPUESTA CORRECTA" : "RESPUESTA INCORRECTA", isCorrect ? "Dominas el reglamento." : "Debes repasar el Capítulo 100.", exp);
}

/* LOGICA DIALES */
function createDials() {
    const container = document.getElementById('meterDisplay'); container.innerHTML = '';
    for (let i = currentNumDials - 1; i >= 0; i--) {
        let dial = document.createElement('div'); dial.className = 'dial';
        let isClockwise = (i % 2 === 0);
        dial.innerHTML = `<div class="dir-arrow">${isClockwise ? '↻' : '↺'}</div><div class="dial-label">x${Math.pow(10, i)}</div>`;
        for (let n = 0; n < 10; n++) {
            let num = document.createElement('div'); num.className = 'number'; num.innerText = n;
            let radian = ((isClockwise ? (n * 36) : (360 - (n * 36))) - 90) * (Math.PI / 180);
            num.style.left = `calc(${50 + 36 * Math.cos(radian)}% - 3px)`; num.style.top = `calc(${50 + 36 * Math.sin(radian)}% - 4px)`;
            dial.appendChild(num);
        }
        dial.innerHTML += `<div class="hand" id="hand-${i}"></div><div class="center-dot"></div>`;
        container.appendChild(dial);
    }
}

function renderHands(val, anomalia) {
    let readingStr = val.toString().padStart(currentNumDials, '0');
    for (let i = 0; i < currentNumDials; i++) {
        let power = (currentNumDials - 1) - i;
        let digit = parseInt(readingStr[i]);
        let nextValues = val % Math.pow(10, power);
        let percentage = power === 0 ? 0 : nextValues / Math.pow(10, power);
        let exactValue = digit + percentage;
        if (anomalia && power === currentAnomDial) exactValue = digit + ((percentage + 0.5) % 1);
        let isClockwise = (power % 2 === 0);
        document.getElementById('hand-' + power).style.transform = `rotate(${isClockwise ? (exactValue * 36) : (360 - (exactValue * 36))}deg)`;
    }
}

/* VERIFICACIÓN CENTRAL */
function checkAnswer() {
    let input = document.getElementById('userReading');
    if (currentActiveModule === 'classic') {
        if (input.value === "") return;
        input.disabled = true;
        let realStr = currentReading.toString().padStart(currentNumDials, '0');
        if (isAnomalyCurrent) return showFeedback(false, "OMITISTE UNA ANOMALÍA", ``, `La lectura era <b>${realStr}</b>, pero el Reloj estaba físicamente alterado. ¡Debiste reportarlo!`);
        let isCorrect = (parseInt(input.value) === currentReading);
        if (isCorrect) stats.correct++;
        showFeedback(isCorrect, isCorrect ? "¡CORRECTO!" : "ERROR DE LECTURA", isCorrect ? "Excelente lectura." : `Ingresaste: <b>${input.value}</b><br>Correcta: <b>${realStr}</b>`, isCorrect ? "" : "Recuerda tomar siempre el número menor y confirmar con el reloj de la derecha.");
    }
    else if (currentActiveModule === 'auditor') {
        let userVal = parseInt(audValues.join('')); let isCorrect = (userVal === audTarget);
        if (isCorrect) stats.correct++;
        showFeedback(isCorrect, isCorrect ? "¡CORRECTO!" : "ERROR DE CALIBRACIÓN", isCorrect ? "Acomodaste los engranes perfectamente." : "Los engranes no coinciden.");
    }
    else if (currentActiveModule === 'digital') {
        if (input.value === "") return;
        let isCorrect = (parseInt(input.value) === parseInt(digiTarget));
        if (isCorrect) stats.correct++;
        showFeedback(isCorrect, isCorrect ? "¡CORRECTO!" : "ERROR DE CAPTURA", isCorrect ? "Atrapaste los kWh." : `El consumo era <b>${digiTarget} kWh</b>.`);
    }
}

function reportAnomaly() {
    clearInterval(qTimerInterval); document.getElementById('userReading').disabled = true;
    if (isAnomalyCurrent) {
        stats.correct++; showFeedback(true, "¡ANOMALÍA DETECTADA!", "Excelente observación.", `La lectura indicaba <b>${currentReading.toString().padStart(currentNumDials, '0')}</b>, pero notaste el desfase a tiempo.`);
    } else { showFeedback(false, "FALSA ALARMA", "El medidor estaba perfecto."); }
}

function checkImpediment(code) {
    clearInterval(qTimerInterval); let isCorrect = (code === impCorrectCode);
    if (isCorrect) stats.correct++;
    showFeedback(isCorrect, isCorrect ? "¡CORRECTO!" : "ERROR DE CLAVE", isCorrect ? "Clave aplicada." : "Usaste una clave incorrecta.");
}

/* FEEDBACK INLINE */
function showFeedback(isCorrect, titleText, msg, explanationHTML = "") {
    clearInterval(digiInterval); clearInterval(qTimerInterval);
    document.getElementById('generalControls').classList.add('hidden');
    document.getElementById('auditorControls').classList.add('hidden');
    document.getElementById('mod-impedimento').classList.add('hidden');
    document.getElementById('mod-theory').classList.add('hidden');

    const feedCard = document.getElementById('inlineFeedback');
    const feedExp = document.getElementById('feedExplanation');

    feedCard.className = isCorrect ? "inline-feedback correct" : "inline-feedback incorrect";
    feedCard.classList.remove('hidden');
    document.getElementById('feedIcon').innerText = titleText === "¡TIEMPO AGOTADO!" ? "⏳" : (isCorrect ? "✅" : "❌");
    document.getElementById('feedText').className = isCorrect ? "text-feed correct-feed" : "text-feed incorrect-feed";
    document.getElementById('feedText').innerText = titleText;
    document.getElementById('feedSub').innerHTML = msg;

    if (explanationHTML) {
        feedExp.innerHTML = explanationHTML; feedExp.style.display = "block"; feedExp.style.borderLeftColor = isCorrect ? "#2e7d32" : "#c62828";
    } else { feedExp.style.display = "none"; }
}

function nextQuestion() {
    document.getElementById('inlineFeedback').classList.add('hidden');
    if (!justDidTransit && Math.random() < 0.35 && stats.current > 0) {
        justDidTransit = true; triggerTransitEvent(); return;
    }
    justDidTransit = false; stats.current++; generateQuestion();
}

function finishTest() {
    clearInterval(digiInterval); clearInterval(qTimerInterval);
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    let pct = stats.current > 0 ? Math.round((stats.correct / stats.current) * 100) : 0;
    document.getElementById('finalScore').innerText = pct + "%";
    enviarResultadosAn8n(pct, stats.correct, stats.current);
    document.getElementById('finalScore').style.color = (pct >= 80) ? "#2e7d32" : "#c62828";
    document.getElementById('resName').innerText = userData.name;
    document.getElementById('resRPE').innerText = userData.rpe;
    document.getElementById('resTotal').innerText = stats.current;
    document.getElementById('resCorrect').innerText = stats.correct;
    document.getElementById('resMod').innerText = isPracticeMode ? "Práctica" : "Evaluación";
}
/* ================= MÓDULO RIM ================= */
function openRimTraining() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('rimTrainingScreen').classList.remove('hidden');
    // Reset selects y resultado
    document.getElementById('rimProb').value = "";
    document.getElementById('rimCons').value = "";
    document.getElementById('rimResultBox').style.display = 'none';
}

function closeRimTraining() {
    document.getElementById('rimTrainingScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
}

function calculateRimRisk() {
    const prob = document.getElementById('rimProb').value;
    const cons = document.getElementById('rimCons').value;

    if (!prob || !cons) return;

    let riskName = "";
    let riskClass = "";
    let riskAction = "";

    if (prob === "Baja" && cons === "Ligeramente Dañino") {
        riskName = "TRIVIAL"; riskClass = "risk-trivial"; riskAction = "No requiere acción específica.";
    } else if (prob === "Media" && cons === "Ligeramente Dañino") {
        riskName = "TOLERABLE"; riskClass = "risk-tolerable"; riskAction = "No se necesita mejorar la acción preventiva.";
    } else if (prob === "Alta" && cons === "Ligeramente Dañino") {
        riskName = "MODERADO"; riskClass = "risk-moderado"; riskAction = "Se deben hacer esfuerzos para reducir el riesgo.";
    } else if (prob === "Baja" && cons === "Dañino") {
        riskName = "TOLERABLE"; riskClass = "risk-tolerable"; riskAction = "No se necesita mejorar la acción preventiva.";
    } else if (prob === "Media" && cons === "Dañino") {
        riskName = "MODERADO"; riskClass = "risk-moderado"; riskAction = "Se deben hacer esfuerzos para reducir el riesgo.";
    } else if (prob === "Alta" && cons === "Dañino") {
        riskName = "IMPORTANTE"; riskClass = "risk-importante"; riskAction = "No comenzar el trabajo hasta que se haya reducido el riesgo.";
    } else if (prob === "Baja" && cons === "Extremadamente Dañino") {
        riskName = "MODERADO"; riskClass = "risk-moderado"; riskAction = "Se deben hacer esfuerzos para reducir el riesgo.";
    } else if (prob === "Media" && cons === "Extremadamente Dañino") {
        riskName = "IMPORTANTE"; riskClass = "risk-importante"; riskAction = "No comenzar el trabajo hasta que se haya reducido el riesgo.";
    } else if (prob === "Alta" && cons === "Extremadamente Dañino") {
        riskName = "INTOLERABLE"; riskClass = "risk-intolerable"; riskAction = "Prohibido iniciar el trabajo.";
    }

    const resultBox = document.getElementById('rimResultBox');
    resultBox.className = "rim-result-box " + riskClass;
    resultBox.style.display = 'block';

    document.getElementById('rimRiskLevel').innerText = riskName;
    document.getElementById('rimRiskAction').innerText = riskAction;
}
/* ================= ESCUELA RIM (PASO A PASO) ================= */
const rimTutorialData = [
    {
        scenario: "Llegas al domicilio y el cliente tiene un perro pastor alemán suelto en la cochera, justo donde está el medidor.",
        step1: { options: ["Riesgo eléctrico por cables", "Peligro por fauna agresiva", "Riesgo de caída a nivel"], answer: 1, exp: "Correcto. El peligro principal aquí es la fauna." },
        step2: { options: ["Tomar lectura rápido corriendo", "Pedir al cliente que amarre al perro y preparar gas pimienta", "Darle comida al perro"], answer: 1, exp: "Correcto. Control administrativo y EPP listo." },
        step3: { options: ["TRIVIAL", "TOLERABLE", "IMPORTANTE", "INTOLERABLE"], answer: 1, exp: "Correcto. Perro amarrado = riesgo TOLERABLE." },
        step4: { options: ["Firmar RIM y tomar lectura", "Suspender trabajo e irme"], answer: 0, exp: "¡Excelente! Como el riesgo es Tolerable, la maniobra procede." }
    },
    {
        scenario: "Encuentras la mufa caída, el tubo roto y los cables de baja tensión tocando la lámina del techo del cliente.",
        step1: { options: ["Peligro ergonómico", "Peligro de fauna", "Peligro eléctrico (Contacto directo/indirecto)"], answer: 2, exp: "Correcto. Energía expuesta en superficie conductora." },
        step2: { options: ["Mover el cable con un palo", "Ninguno, no manipular líneas vivas sin equipo", "Usar guantes de cuero y acomodarlo"], answer: 1, exp: "Correcto. No interactuar con el cable." },
        step3: { options: ["TRIVIAL", "MODERADO", "IMPORTANTE", "INTOLERABLE"], answer: 3, exp: "Correcto. Probabilidad alta + consecuencia letal = INTOLERABLE." },
        step4: { options: ["Intentar leer el medidor de lejos", "Prohibir maniobra, acordonar y reportar"], answer: 1, exp: "¡Bien hecho! Ante riesgo intolerable, se suspende la actividad." }
    },
    {
        scenario: "El medidor está en una avenida transitada, no hay banqueta y los carros pasan muy cerca de tu espalda.",
        step1: { options: ["Peligro por tránsito vehicular (Atropellamiento)", "Peligro eléctrico", "Radiación solar"], answer: 0, exp: "Correcto. El flujo vehicular es la amenaza." },
        step2: { options: ["Pegarse a la pared y leer rápido", "Usar chaleco reflejante, conos preventivos y/o pedir vigía", "Estacionar moto tapando carril"], answer: 1, exp: "Correcto. Señalización y chaleco obligatorios." },
        step3: { options: ["TRIVIAL", "MODERADO", "IMPORTANTE", "INTOLERABLE"], answer: 1, exp: "Correcto. Con controles, el nivel baja a MODERADO." },
        step4: { options: ["Firmar RIM y proceder con precaución", "Suspender la maniobra"], answer: 0, exp: "¡Correcto! Es seguro trabajar vigilando el entorno." }
    },
    {
        scenario: "Adentro de la base del medidor hay un panal de abejas o avispas activo.",
        step1: { options: ["Peligro biológico (Picaduras)", "Peligro químico", "Riesgo de corte"], answer: 0, exp: "Correcto. Fauna nociva." },
        step2: { options: ["Echarles insecticida", "Golpear el medidor para que se vayan", "No interactuar y alejarse del área"], answer: 2, exp: "Correcto. Evitar provocar el ataque." },
        step3: { options: ["TOLERABLE", "MODERADO", "IMPORTANTE", "INTOLERABLE"], answer: 3, exp: "Correcto. Riesgo de shock anafiláctico = INTOLERABLE." },
        step4: { options: ["Tomar foto rápida y correr", "Suspender lectura y reportar"], answer: 1, exp: "¡Correcto! Actividad prohibida hasta que se retire el enjambre." }
    },
    {
        scenario: "El medidor está a 3 metros. Traes escalera, pero el piso abajo es terracería con desnivel pronunciado.",
        step1: { options: ["Peligro eléctrico", "Caída a distinto nivel por inestabilidad", "Peligro de fauna"], answer: 1, exp: "Correcto. Piso irregular desestabiliza la escalera." },
        step2: { options: ["Poner una piedra en la pata", "Nivelar, calzar seguro y pedir apoyo (Regla 4 a 1)", "Subir rápido"], answer: 1, exp: "Correcto. Asegurar la base de la escalera." },
        step3: { options: ["TRIVIAL", "TOLERABLE", "IMPORTANTE", "INTOLERABLE"], answer: 2, exp: "Correcto. Riesgo IMPORTANTE: No comenzar hasta nivelar." },
        step4: { options: ["Asegurar escalera, firmar y proceder", "No leerlo nunca"], answer: 0, exp: "¡Correcto! Riesgo reducido, puedes trabajar." }
    },
    {
        scenario: "El cristal del medidor está roto a la mitad con bordes muy afilados. Necesitas limpiar el polvo de la carátula.",
        step1: { options: ["Peligro químico", "Peligro eléctrico", "Peligro mecánico (Cortes)"], answer: 2, exp: "Correcto. Vidrio roto = peligro de corte severo." },
        step2: { options: ["Limpiar con la manga", "Usar guantes de piel/cuero obligatorios", "Soplarle de cerca"], answer: 1, exp: "Correcto. El Cap. 100 exige guantes de cuero para aristas filosas." },
        step3: { options: ["TRIVIAL", "TOLERABLE", "IMPORTANTE", "INTOLERABLE"], answer: 1, exp: "Correcto. Con guantes puestos, probabilidad baja a TOLERABLE." },
        step4: { options: ["Suspender por el vidrio", "Proceder usando guantes y reportar anomalía"], answer: 1, exp: "¡Excelente! Tomas lectura protegido y reportas daño." }
    },
    {
        scenario: "Llovió toda la noche. Tienes que cruzar un patio de tierra hecho lodo espeso y resbaladizo.",
        step1: { options: ["Caída a un mismo nivel (Resbalón)", "Radiación solar", "Tránsito"], answer: 0, exp: "Correcto. El lodo compromete la tracción." },
        step2: { options: ["Caminar de puntitas", "Asegurar terreno, usar botas de seguridad y paso firme", "Quitarse botas"], answer: 1, exp: "Correcto. Calzado de seguridad es el mejor control." },
        step3: { options: ["TRIVIAL", "MODERADO", "IMPORTANTE", "INTOLERABLE"], answer: 1, exp: "Correcto. Riesgo MODERADO, requiere atención constante." },
        step4: { options: ["Firmar RIM y caminar con precaución", "Suspender ruta e irse"], answer: 0, exp: "¡Correcto! Con cuidado y EPP, se cumple la maniobra." }
    },
    {
        scenario: "Día soleado, calle pavimentada. Medidor en la banqueta a altura perfecta y sin obstáculos.",
        step1: { options: ["Riesgo eléctrico oculto", "Ningún peligro significativo identificado", "Ataque extraterrestre"], answer: 1, exp: "Correcto. Condiciones óptimas." },
        step2: { options: ["Usar EPP básico (casco, botas, gafas, fajado)", "Traje encapsulado", "Pedir permiso a tránsito"], answer: 0, exp: "Correcto. El EPP básico siempre es obligatorio." },
        step3: { options: ["TRIVIAL", "MODERADO", "IMPORTANTE", "INTOLERABLE"], answer: 0, exp: "Correcto. Sin factores externos, nivel es TRIVIAL." },
        step4: { options: ["Proceder con lectura rutinaria", "Pedir apoyo a supervisor"], answer: 0, exp: "¡Correcto! Evaluación de rutina perfecta." }
    }
];

let currentTutIndex = 0;

function startRimTutorial() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('rimTutorialScreen').classList.remove('hidden');
    loadRimTutorialCase();
}

function closeRimTutorial() {
    document.getElementById('rimTutorialScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
}

function loadRimTutorialCase() {
    // Reset UI
    [1, 2, 3, 4].forEach(i => {
        document.getElementById('rimTutOpts' + i).innerHTML = '';
        if (i > 1) document.getElementById('rimTutStep' + i).classList.add('hidden');
    });
    document.getElementById('rimTutFeedback').classList.add('hidden');

    // Elige escenario aleatorio
    currentTutIndex = Math.floor(Math.random() * rimTutorialData.length);
    let data = rimTutorialData[currentTutIndex];
    document.getElementById('rimTutScenario').innerText = data.scenario;

    renderTutStep(1, data.step1);
}

function renderTutStep(stepNum, stepData) {
    let container = document.getElementById('rimTutOpts' + stepNum);
    container.innerHTML = '';
    stepData.options.forEach((optText, index) => {
        let btn = document.createElement('button');
        btn.className = 'btn-rim-opt';
        btn.innerText = optText;
        btn.onclick = () => evalTutStep(stepNum, index, stepData.answer, stepData.exp, btn);
        container.appendChild(btn);
    });
    document.getElementById('rimTutStep' + stepNum).classList.remove('hidden');
}

function evalTutStep(stepNum, selectedIdx, correctIdx, exp, btnElement) {
    let container = document.getElementById('rimTutOpts' + stepNum);
    let buttons = container.getElementsByTagName('button');
    // Deshabilitar botones de este paso
    for (let b of buttons) { b.disabled = true; }

    let feedbackBox = document.getElementById('rimTutFeedback');
    feedbackBox.classList.remove('hidden');

    if (selectedIdx === correctIdx) {
        btnElement.classList.add('correct');
        feedbackBox.style.backgroundColor = '#e8f5e9';
        feedbackBox.style.color = '#2e7d32';
        feedbackBox.innerText = "✅ " + exp;

        // Cargar siguiente paso si existe
        if (stepNum < 4) {
            let nextStepData = rimTutorialData[currentTutIndex]["step" + (stepNum + 1)];
            setTimeout(() => { renderTutStep(stepNum + 1, nextStepData); }, 1500);
        } else {
            setTimeout(() => {
                feedbackBox.innerText = "🎉 CASO COMPLETADO. Cargando nuevo escenario...";
                setTimeout(loadRimTutorialCase, 3000);
            }, 2000);
        }
    } else {
        btnElement.classList.add('incorrect');
        buttons[correctIdx].classList.add('correct'); // Mostrar la correcta
        feedbackBox.style.backgroundColor = '#ffebee';
        feedbackBox.style.color = '#c62828';
        feedbackBox.innerText = "❌ ERROR: Reiniciando caso para reforzar aprendizaje.";
        setTimeout(loadRimTutorialCase, 3500);
    }
}
