class Circurlar_queue {
    constructor(size){
        this.data = []
        this.size = size
        this.init = 0
        this.end = 0
    }
    enQueue(data){
        if(this.isFull())throw new Error("QueueOverFlow")

        if(this.end === this.size){
            this.end = 0
            this.data[this.end++] = data
        }else {
            this.data[this.end++] = data
        }
    }
    deQueue(){
        if(this.isEmpty())throw new Error("QueueUnderFlow")

        if(this.init === this.size){
            this.init = 0
            this.init++
        }else {
            this.init++
        }
    }
    front(){
        if(this.isEmpty())throw new Error('Queue underFlow')
        return this.data[this.init]
    }
    isEmpty(){
        return this.init - this.end === 0
    }
    isFull(){ 
        return this.end + 1 == this.init || this.length() === this.size
    }
    clear(){
        this.init = 0
        this.end = 0
    }
    length(){
        if(this.init < this.end){
            return this.end - this.init
        }else if(this.init > this.end){
            return this.size - this.init + this.end + 1
        }
        return 0
    }
    toString(){
        if(this.isEmpty())return ""
        
        let string = ''
        let current = this.init
        let count = 0
        while(count !== this.length()){
            string += this.data[current]
            current = (current + 1) % this.size
            count++
        }
        return string
    }
}

export default Circurlar_queue
