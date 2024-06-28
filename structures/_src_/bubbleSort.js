export default class BubbleSort{
    constructor(){
        this.data=[]
    }

    organizeBubbleSort(array){
        for(let i = 0 ; i < array.length ; i++){ // percorre toda a sequencia atravez de um indice(array)
            for(let j = i + 1; j < array.length ; j++){ // cria um indice auxiliar para verificar a proxima posição e comparar com a anterior
                if(array[i] > array[j]){ // realizaa permutação dos dados para haver ordenação
                    let aux = array[j]
                    array[j] = array[i]
                    array[i] = aux
                }
            }
        }
        return array
    }

    //outra forma de escrever o bubble sort
    otherBubbleSort(array){
        for(let i = 0 ; i < array.length ; i++){
            for(let j = 0 ; j < array.length - 1 ; j++){
                if(array[j] > array[j + 1]){
                    let aux = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = aux
                }
            }
        }
        return array
    }
}