export default class SelectionSort{
    constructor(){
        this.data = []
    }

    organizeSelectionSort(array){
        for(let i = 0 ; i < array.length ; i++){
            let smallest_element = i

            for(let j = i ; j < array.length ; j++){
                if(array[smallest_element] > array[j]){
                    smallest_element = j
                }
            }
            if(smallest_element != i){
                let aux = array[i]
                array[i] = array[smallest_element]
                array[smallest_element] = aux
            }
        }
        return array
    }
}