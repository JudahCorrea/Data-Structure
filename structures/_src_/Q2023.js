export default class Q2023{
    constructor(){
        this.array = []
        this.size = 0
    }
    add(data){
        if(this.has(data)) return
        this.array.push(data)
    }
    has(data){
        if(this.size === 0) return false

        for(let a in this.array){
            if(a === data) return true
        }
        return false
    }
    union(setB){
        let set_aux = []

        for(let b in setB){
            set_aux.push(b)
        }
        for(let a in this.array){
            set_aux.push(a)
        }
        return set_aux
    }
    intersection(setB){
        let aux_set = []
        for(let b in setB){
            if(this.has(b)) aux_set.push(b)
        }
        return aux_set
    }
    difference(setB){
        let aux_set = []
        for(let b in setB){
            if(!this.has(b)) aux_set.push(b)
        }
        return aux_set
    }
    contains(setB){
        for(let b in setB){
            if(!this.has(b)){
                return false
            }
        }
        return true
    }
    isEqual(setB){
        return this.contains(setB) && setB.contains(this)
    }


}