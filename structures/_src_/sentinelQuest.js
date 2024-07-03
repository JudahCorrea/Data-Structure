export default class SentinelQuest{
    constructor(){
        this.data = []
    }

    sentinelQuest(key, array){
        let size = array.length
        array[size] = key
        let i

        for(i = 0 ; key != array[i] ; i++){}

        if(array[i] == key && i != size){
            return array[i]
        }
        return -1
    }
}