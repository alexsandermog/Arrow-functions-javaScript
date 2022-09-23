import PromptSync = require('prompt-sync')
const prompt = PromptSync()

    const imc = (peso: number, alt: number) => { return peso / (Math.pow(alt, 2));
}
    console.log('Informe seu peso: ')
    const peso = Number(prompt(`--> `));

    console.log('Informe sua altura: ')
    const alt = Number(prompt(`--> `));

    const Resultadoimc = imc(peso, alt)
    console.log(`Seu IMC é: ${Resultadoimc}`)