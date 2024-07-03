export default class BinarySearch{
    constructor(data){
        this.ms = new MergeSort()
        this.data = this.ms.organizeMergeSort(data)
    }

    binarySearch(key, array){
        let left = - 1
        let right = array.length

        while(left < right - 1){
            let midle = Math.floor(left + right)/2
            if(array[midle] < key){
                left = midle
            }else{
                right = midle
            }
        }
        if(array[right] != key ){
            return - 1
        }else{
            return array[right]
        }
    }
}

import MergeSort from "./mergeSort"