//Array que receberá as palavras
const randomWords = []
//Função para inserir as string na array
function stringGenerator(){
  const crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","ORIGEM","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]
  for(let i = 0; i < 3; i++) {
    let x = Math.random() * crossWords.length
    let removed = crossWords.splice(Math.round(x), 1)
    randomWords[i] = removed[0]
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


let x = []     //  Criando array vazia para receber as palavras

  for (let linha = 1; linha <= 10; linha++){   
  x[linha] = []
  for (let coluna = 1; coluna <= 10; coluna++){  
  x[linha].push("")               
  }                                
  }

//inserindo primeira palavra
function addWords(){
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
//COLOCAR LETRAS ALEATORIAS NOS ESPAÇOS VAZIOS
  return preencher(x)
}

function preencher(arr){
  let letras = randomLetters(100)
  for(let linha = 1; linha <= 10; linha++) {
    for(let coluna = 0; coluna < 10; coluna++){
    let indiceLetra = Math.random() * (100 - 1) + 1
    if(arr[linha][coluna] == ''){
      arr[linha][coluna] = letras[Math.floor(indiceLetra)]
    }
    }
  }
  return arr
}
//EVENTOS DOM 
const body = document.getElementById('body')

body.addEventListener('click', choicedWord)

function choicedWord(event){
  let escolhido = event.target
  for(let i = 1; i <= 3; i++){   
  let palavra = "palavra" + i    //se não der certo, tentar converte o I para string com o to string
  if (escolhido.className === palavra){
    let chance = document.getElementsByClassName(palavra)
    for(let i = 0; i < chance.length; i++){
      chance[i].className.add = "escolhido"
    }
  }
}
}

const botao = document.getElementsByClassName('jogo')
const main = document.getElementById('main')

botao[0].addEventListener('click', load)

function load(){
  //RETIRAR BOTÕES
  main.style.display = 'none'

  //CRIAR ELEMENTOS
  const div = document.getElementById('div')
  const section = document.createElement('section')
  body.appendChild(section)

  //INSERIR LETRAS
  addWords()
  for(let linha = 1; linha <= 10; linha++){
    for(let coluna = 0; coluna < 10; coluna++) {
      const tabela = document.createElement('table')
      tabela.setAttribute('linha', linha)
      tabela.setAttribute('coluna', coluna)
      section.appendChild(tabela)
      tabela.innerText = x[linha][coluna]
    }
  }
}

body.addEventListener('click', checkWin)

let palavra = ''
let palavrasEncontradas = 0

const p = document.getElementById('p')
p.innerText = 
'Palavras encontradas: '


//VER O VENCEDOR
function checkWin(event) {
  const crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","ORIGEM","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]
  let target = event.target
  const letra = document.getElementsByTagName('table')

  if(target.tagName === 'TABLE'){
    let escolha = target.innerText
    target.classList.add('escolhida')
    palavra += escolha
    console.log(palavra)
    for(let i = 0; i < crossWords.length; i++) {
      if(anagram(palavra, crossWords[i]) == true){
        let pao = document.getElementsByClassName('escolhida')
        alert('Palavra encontrada')
        palavrasEncontradas += 1
        console.log(palavrasEncontradas)
        palavra = ''
      }
    }
  }
  if(palavrasEncontradas === 3){
    alert('Parabéns, você ganhou!')
    alert('A página sera recarregada, obrigado por jogar')
    location.reload()
  }
}


function anagram(s, t) {
  let strS = {}
  if (s.length !== t.length) return false
  for (let char of s){
    strS[char] = (strS[char] || 0) + 1
  }
  for (let char of t){
    if (!strS[char]) return false
    strS[char] --
  }
  return true
}




