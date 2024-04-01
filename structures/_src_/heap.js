class Node{
    constructor(data, priority){
        this.data = data
        this.priority = priority
    }
}

export default class Heap{
    constructor(){
        this.tree = []
        this.size = 0

        this.tree[0] = new Node(0, Infinity)
    }

    add(data, priority){
        this.tree[++this.size] = new Node(data,priority)

        let son = this.size
        let father = Math.trunc(son / 2)

        while(this.tree[son].priority > this.tree[father].priority){
            let aux = this.tree[father]
            this.tree[father] = this.tree[son]
            this.tree[son] = aux

            son = father
            father = Math.trunc(son / 2)
        }
    }

    remove(){
        if(this.isEmpty()) throw new Error("Queue UnderFlow")

        let son = this.size
        let father = 1
        let removed_element = this.tree[father]

        this.tree[father] = this.tree[son]
        
        this.size--
        son = this.size
        father = Math.trunc(son / 2)

        while(this.tree[son].priority > this.tree[father].priority){
            let aux = this.tree[father]
            this.tree[father] = this.tree[son]
            this.tree[son] = aux

            son = father
            father = Math.trunc(son / 2)
        }

        return removed_element.priority
    }

    asArray(){
        if(this.isEmpty()) return ''

        let convert = ''
        for(let index in this.tree){
            if(index != 0) convert += this.tree[index].priority
        }
        return convert
    }

    lastInput(){
        if(this.isEmpty())throw new Error("Queue UnderFlow")
        return this.tree[this.size].priority
    }

    isEmpty(){
        return this.size === 0
    }
}