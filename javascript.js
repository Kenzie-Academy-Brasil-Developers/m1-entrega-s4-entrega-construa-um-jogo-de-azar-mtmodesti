let crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","TECNOLOGIA","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]

let randomWords = []
function stringGenerator(){
for (let i = 0; i < 3; i++){
  let x = Math.random() * (19 - 1) + 1
  randomWords[i] = crossWords[Math.round(x)]
}
return randomWords
}
