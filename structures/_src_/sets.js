import List_double_linked from "./double_linked_list";

export default class Sets{
    constructor(){
        this.elements = new List_double_linked()
    }
    add(data){
        if(this.has(data)) return   
        this.elements.add(data)
     }
    delete(data){
        this.elements.removeAt(data)
    }
    has(data){
        return this.elements.search(data)
    }
    clear(){
        this.elements.clear()
    }
    length(){
        return this.elements.length()
    }
    values(){
        return this.elements.asArray()
    }

    isEqual(set){
        return this.contains(set) && set.contains(this)
    }

    contains(set){
        let values = set.values()

        for(let v of values){
            if(!this.has(v)){
                return false
            }
        }
        return true
    }

    union(set){
        let values = set.values()
        let thisValues = this.values()
        let resultSet = new Sets()

        for(let v of values){
            resultSet.add(v)
        }
        for(let t of thisValues){
            resultSet.add(t)
        }
        return resultSet
    }

    intersection(set){
        let values = set.values()
        let resultSet = new Sets()

        for(let v of values){
            if(this.has(v)){
                resultSet.add(v)
            }
        }
        return resultSet
    }

    difference(set){
        let values =  set.values()
        let thisValues = this.values()
        let resultSet = new Sets()

        for(let t of thisValues){
            resultSet.add(t)
        }
        for(let v of values){
            resultSet.delete(v)
        }
        return resultSet
    }
}