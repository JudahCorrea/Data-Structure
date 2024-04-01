import Circurlar_queue from "../_src_/circular_queue"

let c

beforeEach(()=>{
    c = new Circurlar_queue(5)
})

test('instatiated queue is empty',()=>{
    expect(c.isEmpty()).toBe(true)
    expect(c.isFull()).toBe(false)
})

test('enqueue test',()=>{
    c.enQueue('a')
    expect(c.front()).toBe('a')
})

test('dequeue test',()=>{
    c.enQueue('a')
    c.enQueue('b')
    c.enQueue('c')
    c.deQueue()
    expect(c.front()).toBe('b')
})

test('clear test',()=>{
    c.enQueue('a')
    c.enQueue('b')
    c.enQueue('c')
    c.clear()
    expect(c.isEmpty()).toBe(true)
    expect(c.isFull()).toBe(false)
})

test('OverFlow',()=>{
    c.enQueue('a')
    c.enQueue('b')
    c.enQueue('c')
    c.enQueue('d')
    c.enQueue('e')
    expect(()=>c.enQueue('h')).toThrow('QueueOverFlow')
})

test('isFull test',()=>{
    c.enQueue('a')
    c.enQueue('b')
    c.enQueue('c')
    c.enQueue('d')
    c.enQueue('e')
    expect(c.isFull()).toBe(true)
})

test('UnderFlow',()=>{
    c.enQueue('a')
    c.deQueue()
    expect(() => c.deQueue()).toThrow('QueueUnderFlow')
})

test('To String test',()=>{
    c.enQueue('a')
    c.enQueue('b')
    c.enQueue('c')
    c.enQueue('d')
    c.enQueue('e')
    expect(c.toString()).toBe('abcde')
})
