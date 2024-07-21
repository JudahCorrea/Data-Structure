export default class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(key){
        let newNode = new Node(key)
        if(this.root === null){
            this.root = newNode
        }  else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.esq === null){
                node.esq = newNode
            }else{
                this.insertNode(node.esq, newNode)
            }
        }else{
            if(node.dir === null){
                node.dir = newNode
            }else{
                this.insertNode(node.dir, newNode)
            }
        }
    }

    remove(key){
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node , key){
        if(node === null){
            return null
        }
        if(key < node.key){
            node.esq = this.removeNode(node.esq, key)
            return node
        }  else if(key > node.key){
            node.dir = this.removeNode(node.dir, key)
            return node
        }else{
            if(node.esq === null && node.dir === null){
                node = null
                return node
            }
            if(node.esq === null){
                node = node.dir
                return node
            }else if(node.dir === null){
                node = node.esq
                return node
            }
            let aux = this.findMinNode(node.dir)
            node.key = aux.key
            node.dir = this.removeNode(node.dir, aux.key)
            return node
        }
    }

    findMinNode(node){
        while(node && node.esq !== null){
            node = node.esq
        }
        return node
    }
}

class Node{
    constructor(key){
        this.key = key
        this.dir = null
        this.esq = null
    }
}

