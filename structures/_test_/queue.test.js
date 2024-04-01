import Queue from "../src/queue";

let q

beforeEach(()=>{
    q = new Queue(5)
})

test('instatiated queue is empty',()=>{
    expect(q.isEmpty()).toBe(true)
    expect(q.isFull()).toBe(false)
})

test('enqueue test',()=>{
    q.enQueue('a')
    expect(q.front()).toBe('a')
})

test('dequeue test',()=>{
    q.enQueue('a')
    q.enQueue('b')
    q.enQueue('c')
    q.deQueue()
    expect(q.front()).toBe('b')
})

test('clear test',()=>{
    q.enQueue('a')
    q.enQueue('b')
    q.enQueue('c')
    q.clear()
    expect(q.isEmpty()).toBe(true)
    expect(q.isFull()).toBe(false)
})

test('OverFlow',()=>{
    q.enQueue('a')
    q.enQueue('b')
    q.enQueue('c')
    q.enQueue('d')
    q.enQueue('e')
    expect(()=>q.enQueue('f')).toThrow("QueueOverFlow")
})

test('UnderFlow',()=>{
    q.enQueue('a')
    q.deQueue()
    expect(() => q.deQueue()).toThrow('QueueUnderFlow')
})

test('To String test',()=>{
    q.enQueue('a')
    q.enQueue('b')
    q.enQueue('c')
    q.enQueue('d')
    q.enQueue('e')
    expect(q.toString()).toBe('abcde')
})
