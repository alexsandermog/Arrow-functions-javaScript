"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (peso, alt) {
    return peso / (Math.pow(alt, 2));
};
console.log('Informe seu peso: ');
var peso = Number(prompt("--> "));
console.log("Informe sua altura: ");
var alt= Number(prompt("--> "));
var resultadoimc = imc(peso, alt);
console.log("Seu IMC \u00E9 ".concat(resultadoimc));
