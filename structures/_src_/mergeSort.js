export default class MergeSort{
    constructor(){
        this.data = []
    }

    organizeMergeSort(array){
        if(array.length === 1){
            return array
        }

        const mid = Math.floor(array.length/2)
        const left = array.slice(0, mid)
        const right = array.slice(mid, array.length)

        return this.merge(this.organizeMergeSort(left), this.organizeMergeSort(right))
    }

    merge(left, right){
        let result = []
        let index_left = 0
        let index_right = 0

        while(index_left < left.length && index_right < right.length){
            if(left[index_left] < right[index_right]){
                result.push(left[index_left])
                index_left++
            }else{
                result.push(right[index_right])
                index_right++
            }
        }
        while(index_left < left.length){
            result.push(left[index_left])
            index_left++
        }
        while(index_right < right.length){
            result.push(right[index_right])
            index_right++
        }
        return result
    }

}