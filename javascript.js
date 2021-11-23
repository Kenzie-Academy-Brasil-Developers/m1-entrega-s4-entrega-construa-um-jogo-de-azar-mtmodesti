/*let crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","TECNOLOGIA","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]

let randomWords = []
function stringGenerator(){
for (let i = 0; i < 3; i++){
  let x = Math.random() * (19 - 1) + 1
  randomWords[i] = crossWords[Math.round(x)]
}
return randomWords
}*/

function randomLetters(n) {
  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
  'S','T','U','V', 'W','X','Y','Z']
  let random = []
  for(let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * letters.length)
    random.push(letters[x])
  }
  return random
}


const randomWords = []
function stringGenerator(){
  const crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","TECNOLOGIA","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]
  for(let i = 0; i < 3; i++) {
    let x = Math.random() * crossWords.length
    let removed = crossWords.splice(Math.round(x), 1)
    randomWords[i] = removed[0]
  }
return randomWords
}