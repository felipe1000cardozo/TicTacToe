const casas = document.querySelectorAll(".casa")
var msg = document.querySelector("#msg")

const jv =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 
var jogadores = ["X","O"]
var jogadorAtual = jogadores[Math.floor(Math.random() * 2)]
var temVencedor = false;
msg.innerText = `Vez de ${jogadorAtual}`

function jogada(c){
    if(casas[c].innerText === "" && !temVencedor){
        casas[c].innerHTML = jogadorAtual
        if (verificaVencedor()){
            msg.innerText = `O jogador ${jogadorAtual} Venceu!`
        }else{
            trocaJogador();
        }
    }
}

function trocaJogador(){
    jogadorAtual = jogadorAtual==="O"? "X" : "O"
    msg.innerText = `Vez de ${jogadorAtual}`
}

function verificaVencedor(){
    for(let i=0; i<jv.length; i++){
        
        let j0 = jv[i][0];
        let j1 = jv[i][1];
        let j2 = jv[i][2];

        if(casas[j0].innerText === casas[j1].innerText && casas[j1].innerText === casas[j2].innerText && casas[j2].innerText != ""){
            temVencedor = true;
            casas[j0].style = "background-color: #08d608;"
            casas[j1].style = "background-color: #08d608;"
            casas[j2].style = "background-color: #08d608;"
            return true;
        }
    }
}

function reset(){
    jogadorAtual = jogadores[Math.floor(Math.random() * 2)]
    temVencedor = false;
    trocaJogador();
    for(let i=0; i<casas.length; i++){
        casas[i].innerText = "";
        casas[i].style = "background-color: #fff;"
    }
}