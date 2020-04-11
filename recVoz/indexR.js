console.log('RecVoz: index.js');
const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const btnPlayText = document.getElementById('btnPlayText')
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;
// console.log('Recognition: ', recognition);

recognition.onresult = (event) => {
    console.log('onresult -------------------------');
    const results = event.results;
    console.log('results: results')
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
    console.log('frase: ', frase);
}

recognition.onend = (event) => {
    console.log('El microfono deja de escuchar');
}

recognition.onerror = (event) => {
    console.log('Error: ' ,event.error);
}

btnStartRecord.addEventListener('click', () => {
    console.log('btnStartRecord');
    recognition.start();
});

btnStopRecord.addEventListener('click', () => {
    console.log('btnStopRecord');
    recognition.abort();
});

function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volumen = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}