class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = {}
    }      
}
    function tipoAtaque(){   
    let ataque;
    if(tipo = "mago"){
            ataque = "magia";
        }else if(tipo = "guerreiro"){
            ataque = "espada";
        }else if(tipo = "monge"){
            ataque = "artes marciais";
        }else{
            ataque = "shuriken";
        }
        return ataque;
}


    let jogador1 = new heroi("Kenji", 28, "mago");
    let jogador2 = new heroi("Venom", 32, "monge");
    

    console.log ("O " + jogador1.nome + " atacou usando " + tipoAtaque())
