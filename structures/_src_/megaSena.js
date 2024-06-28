import Sets from "./sets";

export default class megaSena{
    constructor(){
        this.jogadores = []
        this.megasena_resu = new Sets()
    }

    add(ficha){
        this.jogadores.push(ficha)
    }
    sorteio(){
        for(;
        this.megasena_resu.length() < 6;
        this.megasena_resu.add(Math.floor(Math.random() * 60) + 1)) {
        }
    }

    vencedor(){
        for(let jogador of this.jogadores){
            let win = true
            for(let numero of jogador){
                if(!this.megasena_resu.has(numero)){
                    win = false
                }
            }
            if(win){
                return 'há vencedor!'
            }
        }
        return 'Não há vencendor!'
    }
}
