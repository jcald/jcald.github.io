console.log('RecVoz: index.js');
const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;
console.log('Recognition: ', recognition);

recognition.onresult = (event) => {
    const results = event.results;
    console.log(results);
    const frase = results[results.length - 1][0].transcript;
    console.log('frase: ' ,frase)
    texto.value += frase;
}

btnStartRecord.addEventListener('click', () => {
    console.log('btnStartRecord');
    recognition.start();
});

btnStopRecord.addEventListener('click', () => {
    console.log('btnStartRecord');
    recognition.abort();
});
