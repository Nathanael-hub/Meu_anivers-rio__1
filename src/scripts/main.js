console.log('AOS vai iniciar...');
AOS.init({
    once: false,
    mirror: true
});

const dataDoAniversario = new Date("jul 26, 2026 19:00:00");
const timeStopAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStopAgora = agora.getTime();

    const distanciaAteOAniversario = timeStopAniversario - timeStopAgora;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 *60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diasEmMS);
    const horaAteOAniversario = Math.floor((distanciaAteOAniversario % diasEmMS) / horasEmMS);
    const minutosAteOAniversario =  Math.floor((distanciaAteOAniversario % horasEmMS) / minutosEmMS);
    const segundosAteOAniversario =  Math.floor((distanciaAteOAniversario % minutosEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horaAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if(distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Só ano que vem';
    }
}, 1000);