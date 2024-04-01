export default class List_double_linked {
    constructor(){
        this.head = null
        this.tail = null
    }
    add(data){
        let new_node = new Data(data)

        if(this.isEmpty()){
            this.head = new_node
            this.tail = new_node
            return
        }

        new_node.next = this.head
        this.head.prev = new_node
        this.head = new_node
    }
    append(data){
        let new_node = new Data(data)

        if(this.isEmpty()){
            this.head = new_node
            this.tail = new_node
            return
        }

        new_node.prev = this.tail
        this.tail.next = new_node
        this.tail = new_node
    }
    addAt(data, index){
        if(this.isEmpty()) throw new Error('list UnderFlow')
        
        if(! (index < this.length() && index >= 0)) throw new Error('invalid index')
            
        let new_node = new Data(data)
        let node_a = this.head
        let node_b = this.head.next
        
        if(index === 0){
            new_node.next = this.head
            this.head.prev = new_node
            this.head = new_node
            return
        }
        
        let count = 0
            
        while(count !== index - 1){
            node_a = node_b
            node_b = node_b.next
            count++
        }
                
        node_a.next = new_node
        new_node.prev = node_a
        new_node.next = node_b
        node_b.prev = new_node
        return
    }
    toString(){
        if(this.isEmpty()) return ''
            
        let convert = ''
        let aux = this.head
        while(aux !== null){
            convert += aux.data
            aux = aux.next
        }
        return convert
    }
    asArray(){
        let aux = this.head
        let result = []
        while(aux !== null){
            result.push(aux.data)
            aux = aux.next
        }
        return result
    }
    clear(){
        this.head = null
        this.tail = null
    }
    isEmpty(){
        return this.head === null
    }
    length(){
        if(this.isEmpty()) return 0
        
        let aux = this.head
        let size = 1
            
        while(aux.next !== null){
            aux = aux.next
            size++
        }
        return size
    }
    remove(){
        if(this.isEmpty()) throw new Error("List UnderFlow")
        
        let remove_element
        if(this.head.next === null){
            remove_element = this.head
            this.head = null
            this.tail = null
            return remove_element.data
        }
        remove_element = this.head   
        this.head = this.head.next
        this.head.prev = null
        
        return remove_element.data
    }
    removeLast(){
        if(this.isEmpty()) throw new Error('List UnderFlow')
        
        let remove_element
        if(this.head.next === null){
            remove_element = this.head
            this.head = null
            this.tail = null
            return remove_element.data
        }
        remove_element = this.tail
        this.tail = this.tail.prev
        this.tail.next = null

        return remove_element.data
    }
    removeAt(data){
        if(this.isEmpty()) throw new Error('List UnderFlow')
        if(this.search(data) !== data) return

        let remove_element
        if(this.head.data === data && this.head.next === null){
            remove_element = this.head
            this.head = null
            this.tail = null
            return remove_element.data
        }
        if(this.tail.data === data){
            remove_element = this.tail
            this.tail = this.tail.prev
            return remove_element.data
        }

        let node_a = this.head
        let node_b = this.head.next

        while(node_b.data !== data){
            node_a = node_b
            node_b = node_b.next
        }

        remove_element = node_b
        node_b = node_b.next
        node_b.prev = node_a
        node_a.next = node_b

        return remove_element.data
    }
    search(data){
        if(this.isEmpty()) throw new Error('List UnderFlow')

        let aux = this.head
        let data_aux = aux.data

        while(aux !== null){
            data_aux = aux.data
            aux = aux.next

            if(data_aux === data){
                return data_aux
            }
        }
        return
    }
}

class Data {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
