export default class QuickSort{
    constructor(){
        this.data = []
    }

    organizeQuickSort(array, inferiorArray = 0, superiorArray = (array.length - 1)){
        let pivo_pos
        let inferior = inferiorArray
        let superior = superiorArray

        if(inferior < superior){
            let pivo = array[superior]
            let i = inferior - 1
            let j

            for(j = inferior ; j <= superior - 1 ; j++){
                if(array[j] <= pivo){
                    i++
                    let aux = array[i]
                    array[i] = array[j]
                    array[j] = aux
                }
            }
            let aux = array[i + 1]
            array[i + 1] = array[superior]
            array[superior] = aux

            pivo_pos = i + 1
            this.organizeQuickSort(array, inferior, pivo_pos - 1)
            this.organizeQuickSort(array, pivo_pos + 1, superior)
        }
        return array
    }
}