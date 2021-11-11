function microondas(pratoPreferido, duracao){
  let comida = pratoPreferido
  let tempo = 0
  let frase = "Bom apetite!"

switch (comida){
  case "pipoca":
      tempo = 10
  break
  case "macarrão":
      tempo = 8
  break
  case "carne":
      tempo = 15
  break
  case "feijão":
      tempo = 12
  break
  case "brigadeiro":
      tempo = 8
  break
  default:
      return "Prato não encontrado. Não se esqueça das acentuações!"

}
return duracao >= 0 && duracao < tempo ? "Tempo insuficiente!" + "\n" + frase 
:duracao >= tempo && duracao < (tempo*2) ? "Prato pronto!" + "\n" + frase
:duracao >= (tempo*2) && duracao < (tempo*3) ? "A comida queimou!" + "\n" + frase
:duracao >= (tempo*3) ? "KABUMMMM!" : frase
}

console.log(microondas("feijão", 12))