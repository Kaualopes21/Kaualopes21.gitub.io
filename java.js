// Função para atualizar a hora
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Adiciona zero à esquerda se for necessário
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Atualiza o conteúdo da taskbar com a hora atual
    document.querySelector('.taskbar-time').textContent = `${hours}:${minutes}`;
}

// Atualiza a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio quando a página carrega
document.addEventListener('DOMContentLoaded', updateClock);

// Função para tocar som ao clicar no botão Iniciar
document.querySelector('.start-btn').addEventListener('click', function() {
    const startSound = document.getElementById('startSound');
    startSound.play();
});

// Controle do mute/unmute da música de fundo
const muteBtn = document.getElementById('mute-btn');
const backgroundMusic = document.getElementById('backgroundMusic');

muteBtn.addEventListener('click', function() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteBtn.textContent = '🔊';  // Atualiza o ícone para som ligado
    } else {
        backgroundMusic.muted = true;
        muteBtn.textContent = '🔇';  // Atualiza o ícone para som desligado
    }
});


document.getElementById('playMusic').addEventListener('click', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(error => {
        console.error('Erro ao tentar tocar a música de fundo:', error);
    });
});
