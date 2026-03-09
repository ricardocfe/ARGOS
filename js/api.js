async function enviarResultadosAn8n(porcentaje, correctas, totales) {
    const webhookUrl = "" // Pega aca el url del nodo webhook

    const payload = {
        fecha: new Date().toISOString(),
        nombre: userData.name,
        rpe: userData.rpe,
        modalidad: isPracticeMode ? 'Práctica' : 'Evaluación',
        calificacion: porcentaje,
        aciertos: correctas,
        preguntasTotales: totales
    };

    try {
        if (!webhookUrl) return; // Si no hay url entonces solo termina

        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log('Resultados guardados exitosamente en n8n');
    } catch (error) {
        console.error('Error al enviar resultados: ', error);
    }
}
