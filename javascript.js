

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

const body = document.getElementById('body')
body.addEventListener('click', choicedWord)

function choicedWord(event){
  let escolhido = event.target
  for(let i = 1; i <= 3; i++){
  let palavra = "palavra" + i 
  if (escolhido.className === palavra){
    let chance = document.getElementsByClassName(palavra)
    for(let i = 0; i < chance.length; i++){
      chance[i].className.add = "escolhido"
    }
  }
}
}



let music = document.createElement('button')
music.id = 'botãoMusical'
music.innerText = "Play Music"
body.appendChild(music)
music.addEventListener('click',function(){
  let audio = document.getElementById('som')
  audio.play()
})

let stopMusic = document.createElement('button')
stopMusic.id = "stopMusic"
stopMusic.innerHTML = "Stop Music"
body.appendChild(stopMusic)

stopMusic.addEventListener("click", function(){
  let audio = document.getElementById('som')
  audio.pause()
})




const botao = document.getElementsByClassName('jogo')
const main = document.getElementById('main')



botao[0].addEventListener('click', load)





function load(){
  //MUDAR BACKGROUND IMAGE
  let html = document.querySelector('html')
  html.style.backgroundImage = 'url(./thumb-1920-596242.jpg)'
  //RETIRAR BOTÕES
  main.style.display = 'none'
  let exitH1 = document.getElementById("ola")
  exitH1.remove()

  //CRIAR ELEMENTOS
  const div = document.getElementById('div')
  const section = document.createElement('section')
  body.appendChild(section)

  //MODAL
  modals("Encontre 3 palavras que estão em linhas horizontais diferente. Basta clicar em todas as letras. Você tem 30 segundos. Boa Sorte!", 'FECHAR', 'fecharModal')

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
        palavrasEncontradas += 1
        let header = document.createElement('header')
        let p = document.createElement('p')
        p.innerText = 'Palavras encontradas:' + palavrasEncontradas
        header.appendChild(p)
        body.appendChild(header)
      }
    }
  }
  if(palavrasEncontradas === 3){
    modals('Voce encontrou todas as palavras. Parabéns :D', '', '')
    setInterval(restartPage, 5000)
  }else{
    setInterval(derrota, 45000)
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



let cardPedra = document.getElementsByClassName("cardPedra")
let cardPapel = document.getElementsByClassName("cardPapel")
let cardTesoura = document.getElementsByClassName("cardTesoura")
let player = 0

//Sorteando o valor da máquina

botao[1].addEventListener('click',addElements)

function reload(event) {
  let target = event.target
  if(target.id == 'reiniciar'){
    location.reload()
  }
}
body.addEventListener('click', reload)

function addElements(event) {
  //MUDAR BACKGROUND
  let html = document.querySelector('html')
  html.style.backgroundImage = 'url(./thumb-1920-596243.jpg)'
  //
  let target = event.target

  body.style.justifyContent = 'space-betwen'

  /* Inserindo botão de reload */

  let retornar = document.createElement('button')
  retornar.innerHTML = "Tela Inicial"
  retornar.id = "reiniciar"
  body.appendChild(retornar)

  main.style.display = 'none'
  let exitH1 = document.getElementById('ola')
  exitH1.remove()

  let button1 = document.createElement('button')
  button1.id = 'buttonMusic'
  button1.classList.add('button')
  button1.innerText = 'Play audio'

  let button2 = document.createElement('button')
  button2.id = 'pauseMusic'
  button2.classList.add('button')
  button2.innerText = 'Pause music'

  let div1 = document.createElement('div')
  div1.classList.add('cardPedra')
  let primeiroH1 = document.createElement('h1')
  primeiroH1.innerText = 'Escolha 1'
  let p1 = document.createElement('p')
  p1.innerText = 'Pedra'
  p1.className = 'textoPedra'

  let div2 = document.createElement('div')
  div2.classList.add('cardPapel')
  let segundaH1 = document.createElement('h1')
  segundaH1.innerText =  'Escolha 2'
  let p2 = document.createElement('p')
  p2.innerText = 'Papel'
  p2.className = 'textoPapel'

  let div3 = document.createElement('div')
  div3.classList.add('cardTesoura')
  let terceiraH1 = document.createElement('h1')
  terceiraH1.innerText = 'Escolha 3'
  let p3 = document.createElement('p')
  p3.innerText = 'Tesoura'
  p3.className = 'textoTesoura'

  div1.appendChild(primeiroH1)
  div1.appendChild(p1)
  body.appendChild(div1)

  div2.appendChild(segundaH1)
  div2.appendChild(p2)
  body.appendChild(div2)

  div3.appendChild(terceiraH1)
  div3.appendChild(p3)
  body.appendChild(div3)

  let restart = document.createElement('button')
  restart.innerHTML = "Tela Inicial"
  restart.id = "reiniciar"
  body.appendChild(restart)
  document.getElementById("reiniciar").addEventListener("click", function(){
    location.reload()
  })

  let dicas = document.createElement('button')
  dicas.innerHTML = 'Dicas'
  dicas.id = 'dicas'
  //body.appendChild(dicas)
  
    modals("Escolha sua jogada clicando em algum botão. O computador escolherá automaticamente. O resultado será anunciado no fim do clique", 'FECHAR', 'fecharModal')
  






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



//PEDRA
function pedraEscolher (event) {
  let target = event.target;
  if(target.className == 'cardPedra' || target.className == 'textoPedra'){
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
  if(target.className == 'cardPapel' || target.className == 'textoPapel'){
    alert("Você escolheu papel")
    player.id = "papel"
    player = "Papel"
    let machine = machineValue()
    alert(`A máquina escolheu ${machine}`)
    whoWins(player, machine)
  }
}
body.addEventListener('click', papelEscolher)

//TESOURA
function tesouraEscolher(event) {
  let target = event.target;
  if(target.className == 'cardTesoura' || target.className == 'textoTesoura'){
    alert("Você escolheu tesoura")
    player.id = "tesoura"
    player = "Tesoura"
    let machine = machineValue()
    alert(`A máquina escolheu ${machine}`)
    whoWins(player, machine)
  }
}

body.addEventListener('click', tesouraEscolher)

let playerWins = 0
let empate = 0
let machineWins = 0
function whoWins(player, machine){
if ((player === "Pedra" && machine === "Tesoura") ||
    (player === "Papel" && machine === "Pedra") ||
    (player === "Tesoura" && machine === "Papel")){
      alert("Você venceu!")
      playerWins += 1
    } 
if ((machine === "Pedra" && player === "Tesoura") ||
   (machine === "Papel" && player === "Pedra") ||
   (machine === "Tesoura" && player === "Papel")){
     machineWins += 1
     alert("Você perdeu!")
   } 
if (player === machine){
    empate += 1
    alert("Empate!")
  }

  let divText = document.createElement('div')
  divText.classList.add('placar')

  let playerText = document.createElement('p')
  let empateText = document.createElement('p')
  let machineText = document.createElement('p')

  playerText.innerText = 'Vitórias: ' + playerWins
  empateText.innerText = 'Empates: ' + empate
  machineText.innerText = 'Derrotas: ' + machineWins

  divText.appendChild(playerText)
  divText.appendChild(empateText)
  divText.appendChild(machineText)

  body.appendChild(divText)

}

//CRIAR MODAL
function modals(str, spanText, spanId){
  let modal = document.createElement('div')
  let modalText = document.createElement('p')
  
  let fundoPreto = document.createElement('div')
  let span = document.createElement('span')
  span.id = spanId
  span.innerText = spanText

  modal.id = 'dicasPalavras'
  fundoPreto.id = 'fundoPreto'
  modalText.innerText = str
  
  modal.appendChild(modalText)
  modal.appendChild(span)
  body.appendChild(modal)
  body.append(fundoPreto)
}

//REINICIAR A PAGINA
function restartPage() {
  location.reload()
}
//TEMPO ACABOU 
function derrota(){
  modals('O tempo acabou. Quem sabe na próxima :(', '', '')
  setInterval(restartPage, 5000)
};
//VOCE VENCEU
//SAIR DO MODAL
function exitModal(event){
  let target =  event.target
  let exit = document.getElementById("fecharModal")
  let modal = document.getElementById('dicasPalavras')
  let tirarFundoPreto = document.getElementById('fundoPreto')
  if (exit === target){
    modal.style.display = 'none'
    exit.style.display = 'none'
    tirarFundoPreto.style.display = 'none'
  }
}
body.addEventListener("click", exitModal)

