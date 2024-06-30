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
        const rigth = array.slice(mid, array.length)

        return this.merge(this.organizeMergeSort(left), this.organizeMergeSort(rigth))
    }

    merge(left, rigth){
        let result = []
        let index_left = 0
        let index_rigth = 0

        while(index_left < left.length && index_rigth < rigth.length){
            if(left[index_left] < rigth[index_rigth]){
                result.push(left[index_left])
                index_left++
            }else{
                result.push(rigth[index_rigth])
                index_rigth++
            }
        }
        while(index_left < left.length){
            result.push(left[index_left])
            index_left++
        }
        while(index_rigth < rigth.length){
            result.push(rigth[index_rigth])
            index_rigth++
        }
        return result
    }

}