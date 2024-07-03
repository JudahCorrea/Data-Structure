export default class SequentialSearch{
    constructor(){
        this.data = []
    }

    sequentialSearch(key, array){
        for(let i = 0 ; i < array.length ; i++){
            if(array[i] == key){
                return array[i]
            }
        }
        return -1
    }
}