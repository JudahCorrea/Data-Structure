class Head {
    constructor(){
        this.next = null
    }
    add(data){
        let new_node = new Data(data)
        new_node.next = this.next
        this.next = new_node
    }
    append(data){
        let new_node = new Data(data)
        if(this.isEmpty()){
            this.next = new_node
        }else{
            let aux = this.next
            while(aux.next !== null){
                aux = aux.next
            }
            aux.next = new_node
        }
    }
    addAt(data,index){
        if(!this.isEmpty()){
            if(!(index>this.length())){
                let node_a = this.next
                let node_b = node_a.next
                let count = 0
                let new_node = new Data(data)
                if(count === 0){
                    this.next = new_node
                    new_node.next = node_a
                    return
                }
                while(count !== index - 1){
                    node_a = node_b
                    node_b = node_b.next
                    count++
                }
                node_a.next = new_node
                new_node.next = node_b
                return
            }
            throw new Error('invalid index')
        }
        throw new Error('UnderFlow')
    }
    removeFirst(){
        if(!this.isEmpty()){
            let aux = this.next
            this.next = aux.next
            return
        }
        throw new Error('empty list')
    }
    removeLast(){
        if(!this.isEmpty()){
            let node_a = this.next
            let node_b = node_a.next
            if(node_a.next === null){
                this.next = null
                return
            }
            while(node_b !== null){
                node_a = node_b
                node_b = node_b.next
            }
            node_a.next = null
            return
        }
        throw new Error('empty list')
    }
    removeAt(data){
        if(!this.isEmpty()){
            let node_a = this.next
            let node_b = node_a.next
            if(node_a.data === data){
                this.next = node_b
                return
            }
            while(node_b.data !== data){
                node_a = node_b
                node_b = node_b.next
            }
            node_a.next = node_b.next
        }
        throw new Error('remove fail')
    }
    isEmpty(){
        return this.next === null
    }
    search(data){
        if(!this.isEmpty()){
            let aux = this.next
            while(aux.data !== data){
                aux = aux.next
            }
            return  aux.data
        }
        throw new Error('List is Empty')
    }
    length(){
        if(!this.isEmpty()){
            let count = 0
            let aux = this.next
            while(aux !== null){
                aux = aux.next
                count++
            }
            return count
        }
        return null
    }
}

class Data{
    constructor(data){
        this.data = data
        this.next = null
    }
}

export default Head
