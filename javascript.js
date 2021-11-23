//Array de palavras
let crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","ORIGEM","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]
//Array que receberá as palavras
const randomWords = []
//Função para inserir as string na array
function stringGenerator(){
for (let i = 0; i < 3; i++){
  let x = Math.random() * (19 - 1) + 1
  randomWords[i] = crossWords[Math.round(x)]
}
return randomWords
}
document.onload = stringGenerator()

//gerador de string - O parâmetro é o número de caracteres que será gerado
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

//Função para gerar string aleatória
function geraStringAleatoria(tamanho) {    
  var stringAleatoria = '';
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return stringAleatoria;
}



let x = []     //  Criando array vazia para receber as palavras

  for (let linha = 1; linha <= 10; linha++){   
  x[linha] = []
  for (let coluna = 1; coluna <= 10; coluna++){  
  x[linha].push("")               
  }                                
  }



//inserindo primeira palavra

let linhaPalavraUm = Math.random() * (11 - 1) + 1                  
let colunaPalavraUm = Math.random() * (10 - 0) + 1



linhaPalavraUm = Math.trunc(linhaPalavraUm)
colunaPalavraUm = (Math.trunc(colunaPalavraUm))

do {
  colunaPalavraUm = Math.random() * (10 - 1) + 1  //definindo coluna da palavra 1 onde palavra se inicia
  colunaPalavraUm = (Math.trunc(colunaPalavraUm))  //tirando a virgula
}
while (colunaPalavraUm + randomWords[0].length > 10) 


if (colunaPalavraUm + randomWords[0].length > 10){   
  colunaPalavraUm = Math.random() * (10 - 1) + 1
}
colunaPalavraUm = (Math.trunc(colunaPalavraUm))
 

for (let i = 0; i < randomWords[0].length; i++){  //inserindo as letras no array
  x[linhaPalavraUm][colunaPalavraUm+i] = randomWords[0][i]
}


//inserindo segunda palavra

let linhaPalavraDois = Math.random() * (11 - 1) + 1
let colunaPalavraDois = Math.random() * (10 - 0) + 1

linhaPalavraDois = Math.trunc(linhaPalavraDois)
colunaPalavraDois = Math.trunc(colunaPalavraDois)
linhaPalavraDois = Math.trunc(linhaPalavraDois)
if (linhaPalavraDois === linhaPalavraUm){
  linhaPalavraDois = Math.random() * (10 - 1) + 1
}
linhaPalavraDois = Math.trunc(linhaPalavraDois)

do {
  colunaPalavraDois = Math.random() * (10 - 1) + 1
  colunaPalavraDois = (Math.trunc(colunaPalavraDois))
}
while (colunaPalavraDois + randomWords[1].length > 10)
 
if (colunaPalavraDois + randomWords[1].length > 10){
  colunaPalavraDois = Math.random() * (10 - 1) + 1
  colunaPalavraDois = Math.trunc(colunaPalavraDois)
}
for (let i = 0; i < randomWords[1].length; i++){
  x[linhaPalavraDois][colunaPalavraDois+i] = randomWords[1][i]
  
}
 
//inserindo terceira palavra

let linhaPalavraTres = Math.random() * (11 - 1) + 1
let colunaPalavraTres = Math.random() * (10 - 0) + 1

linhaPalavraTres = Math.trunc(linhaPalavraTres)
colunaPalavraTres = Math.trunc(colunaPalavraTres)
linhaPalavraTres = Math.trunc(linhaPalavraTres)
if (linhaPalavraTres === linhaPalavraDois || linhaPalavraTres === linhaPalavraUm ){
  linhaPalavraTres = Math.random() * (10 - 1) + 1
}
linhaPalavraTres = Math.trunc(linhaPalavraTres)

do {
  colunaPalavraTres = Math.random() * (10 - 1) + 1
  colunaPalavraTres = (Math.trunc(colunaPalavraTres))
}
while (colunaPalavraTres + randomWords[2].length > 10)
  
if (colunaPalavraTres + randomWords[2].length > 10){
  colunaPalavraTres = Math.random() * (10 - 1) + 1
  colunaPalavraTres = Math.trunc(colunaPalavraTres)
}
for (let i = 0; i < randomWords[2].length; i++){
  x[linhaPalavraTres][colunaPalavraTres+i] = randomWords[2][i]
}

console.table(x)