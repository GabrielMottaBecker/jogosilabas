// Sílaba e palavras corretas
const syllables = document.querySelectorAll('.syllable');
const formedWordInput = document.getElementById('formed-word');
const checkWordButton = document.getElementById('check-word');
const clearWordButton = document.getElementById('clear-word');
const resultDiv = document.getElementById('result');

const correctWords = ['casa', 'sola', 'pala'];
let formedWord = '';

syllables.forEach(button => {
    button.addEventListener('click', () => {
        formedWord += button.textContent;
        formedWordInput.value = formedWord;
    });
});

checkWordButton.addEventListener('click', () => {
    if (correctWords.includes(formedWord)) {
        resultDiv.textContent = `Parabéns! Você formou a palavra correta: ${formedWord}`;
        playAudio(formedWord); // Reproduz o áudio da palavra
        animateSuccess();
    } else {
        resultDiv.textContent = "Palavra incorreta. Tente novamente.";
    }
});

clearWordButton.addEventListener('click', () => {
    formedWord = '';
    formedWordInput.value = '';
    resultDiv.textContent = '';
});

// Simula a reprodução de áudio
function playAudio(word) {
    const audio = new Audio(`audio/${word}.mp3`);
    audio.play();
}

// Animação simples de sucesso
function animateSuccess() {
    formedWordInput.style.backgroundColor = "#dff0d8";
    setTimeout(() => {
        formedWordInput.style.backgroundColor = "";
    }, 1000);
}