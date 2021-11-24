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
      //tabela.setAttribute('id', 'letra')
      section.appendChild(tabela)
      tabela.innerText = x[linha][coluna]
    }
  }
}

body.addEventListener('click', checkWin)


//VER O VENCEDOR
let palavrasEncontradas = 0
//NAO MEXER 
function checkWin(event) {
  const crossWords = ["LASER","NEON","SABRE","PORTAL","ROBÔ","TECH","FUTURO","ORIGEM","FICÇÃO","ESPAÇO","ALIEN","FOGUETE","PROPULSOR","ASTRO","MATRIX","MÁQUINA","TEMPO","AMANHÃ","SCIFI","DESTINO"]
  let target = event.target
  const letra = document.getElementsByTagName('table')

  let palavraEscolhida = ''

  if(target.tagName === 'TABLE' ){
    target.classList.toggle('escolhida')

    let escolhidos = document.getElementsByClassName('escolhida')
    for(let i = 0; i < escolhidos.length; i++){
      palavraEscolhida += escolhidos[i].innerText
    }
    
   
    for(let i = 0; i < crossWords.length; i++) {
      if(anagram(palavraEscolhida, crossWords[i]) == true){
        console.log(palavraEscolhida.length)
        for(let indice = 0; indice < palavraEscolhida.length; indice++){
          console.log(indice)
          console.log(escolhidos[indice])
          escolhidos[0].className = 'palavraCerta'
        }
        alert('Palavra encontrada')
        palavrasEncontradas += 1
        console.log(palavrasEncontradas)
        console.log(palavraEscolhida)
      }
    }
  }
  if(palavrasEncontradas === 3){
    alert('Parabéns, você ganhou!')
    alert('Obrigado por jogar')
    location.reload()
  }
}

//NAO MEXER

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

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

let cardPedra = document.getElementsByClassName("cardPedra")
let cardPapel = document.getElementsByClassName("cardPapel")
let cardTesoura = document.getElementsByClassName("cardTesoura")
let player = 0

//Sorteando o valor da máquina

botao[1].addEventListener('click',addElements)

function addElements(event) {
  let target = event.target

  main.style.display = 'none'

  let header = document.createElement('header')
  header.id = 'menulateral'

  let button1 = document.createElement('button')
  button1.id = 'buttonMusic'
  button1.classList.add('button')
  button1.innerText = 'Play audio'

  let button2 = document.createElement('button')
  button2.id = 'pauseMusic'
  button2.classList.add('button')
  button2.innerText = 'Pause music'

  let button3 = document.createElement('button')
  button3.id = 'reload'
  button3.classList.add('button')
  button3.innerText = 'Retornar a página inicial'

  let div1 = document.createElement('div')
  div1.classList.add('cardPedra')
  let primeiroH1 = document.createElement('h1')
  primeiroH1.innerText = 'Escolha 1'
  let p1 = document.createElement('p')
  p1.innerText = 'Pedra'

  let div2 = document.createElement('div')
  div2.classList.add('cardPapel')
  let segundaH1 = document.createElement('h1')
  segundaH1.innerText =  'Escolha 2'
  let p2 = document.createElement('p')
  p2.innerText = 'Papel'

  let div3 = document.createElement('div')
  div3.classList.add('cardTesoura')
  let terceiraH1 = document.createElement('h1')
  terceiraH1.innerText = 'Escolha 3'
  let p3 = document.createElement('p')
  p3.innerText = 'Tesoura'

  //APPENDCHILD

  header.appendChild(button1)
  header.appendChild(button2)
  header.appendChild(button3)
  body.appendChild(header)

  div1.appendChild(primeiroH1)
  div1.appendChild(p1)
  body.appendChild(div1)

  div2.appendChild(segundaH1)
  div2.appendChild(p2)
  body.appendChild(div2)

  div3.appendChild(terceiraH1)
  div3.appendChild(p3)
  body.appendChild(div3)
}

function machineValue(){
let machine = Math.random() * (4 - 1) + 1
machine = Math.trunc(machine)
if (machine === 1){
  machine = "Pedra"
}
if (machine === 2){
  machine = "Papel"
}
if (machine === 3){
  machine = "Tesoura"
}
console.log(machine)
return machine
}
//Escolhendo o valor do player

let pedra = document.getElementsByClassName('cardPedra')
let papel = document.getElementsByClassName('cardPapel')
let tesoura = document.getElementsByClassName('cardTesoura')

//VOLTAR A PAGINA INICIAL

body.addEventListener('click', reload)
function reload(event) {
  let button = document.getElementById('reload')
  let target =  event.target


  if(button === target){
    location.reload()
  }
}

//PEDRA
function pedraEscolher (event) {
  let target = event.target;
  if(target.className == 'cardPedra'){
    alert("Você escolheu pedra")
    player.id = "pedra"
    player = "Pedra"
    let machine = machineValue()
    alert(`A máquina escolheu ${machine}`)
    whoWins(player, machine)
  }
}
body.addEventListener('click', pedraEscolher)

//PAPEL
function papelEscolher(event) {
  let target = event.target;
  if(target.className == 'cardPapel'){
    alert("Você escolheu pedra")
    player.id = "pedra"
    player = "Pedra"
    let machine = machineValue()
    alert(`A máquina escolheu ${machine}`)
    whoWins(player, machine)
  }
}
body.addEventListener('click', papelEscolher)

//TESOURA
function tesouraEscolher(event) {
  let target = event.target;
  if(target.className == 'cardTesoura'){
    alert("Você escolheu tesoura")
    player.id = "tesoura"
    player = "Tesoura"
    let machine = machineValue()
    alert(`A máquina escolheu ${machine}`)
    whoWins(player, machine)
  }
}

body.addEventListener('click', tesouraEscolher)


function whoWins(player, machine){
if ((player === "Pedra" && machine === "Tesoura") ||
    (player === "Papel" && machine === "Pedra") ||
    (player === "Tesoura" && machine === "Papel")){
      alert("Player wins!")
    } 
if ((machine === "Pedra" && player === "Tesoura") ||
   (machine === "Papel" && player === "Pedra") ||
   (machine === "Tesoura" && player === "Papel")){
     alert("Você perdeu!")
   } 
if (player === machine){
    alert("Empate")
  }
}
const button = document.querySelector('button')
button.addEventListener("click",function(){
  const audio = document.querySelector('audio')
  audio.volume = 0.02
  audio.play()
  button.style.backgroundColor = "#CCFF33"
})
let pauseMusic = document.getElementById("pauseMusic")
pauseMusic.addEventListener("click",function(){
  const audio = document.querySelector('audio')
  audio.pause()
  pauseMusic.style.backgroundColor = "#CCFF33"
})