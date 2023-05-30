const os = require('os');
const cpus = os.cpus();
const networkInterfaces = os.networkInterfaces();
cpuInformes(...cpus);

function cpuInformes(cpu){
    const {model, speed} = cpu;
    console.log(informeModelCpu(model));
    console.log(informeInfoSpeed(speed))

}


function informeModelCpu(model){
    return `O modelo de cpu é: ${model}`;
}
function informeInfoSpeed(speed){
    return  `Velocidade da cpu1: ${(speed)}`
}

