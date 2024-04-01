class Queue{
    constructor(size){
        this.data = []
        this.size = size
        this.init = 0
        this.end = 0
    }
    enQueue(data){
        if(!this.isFull()){
            this.data[this.end++] = data
            return
        }
        throw new Error("QueueOverFlow")
    }
    deQueue(){
        if(!this.isEmpty()){
            this.init++
            return
        }
        throw new Error("QueueUnderFlow")
    }
    front(){
        return this.data[this.init]
    }
    isEmpty(){
        return this.init === this.end
    }
    isFull(){
        return this.end - this.init === this.size
    }
    clear(){
        this.init = 0
        this.end = 0
        return
    }
    length(){
        return this.end - this.init
    }
    toString(){
        let count = 0
        let string = ''

        const  convert = ()=> {
            string += this.data[count]
            if(count != this.length() - 1){
                count++
                convert()
            }
        }
        convert()
        return string
    }
}

export default Queue