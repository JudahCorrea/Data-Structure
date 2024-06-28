export default class InserionSort{
    constructor(){
        this.data = []
    }

    organizeInsertionSort(array){
        let j
        let chosen
        for(let i = 1 ; i < array.length ; i++){
            chosen = array[i]
            j = i - 1

            while(j >= 0 && array[j] > chosen){
                array[j + 1] = array[j]
                j = j - 1
            }
            array[j + 1] = chosen
        }
        return array
    }
}