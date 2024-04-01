import Heap from "../_src_/heap"

let h

beforeEach(() => {
    h = new Priority_Queue()
})

test('Add test',()=>{
    h.add(1,80)
    h.add(2,50)
    h.add(1,70)
    h.add(1,70)
    expect(h.lastInput()).toBe(50)
})

test('Remove test',()=>{
    h.add(1,80)
    h.add(2,50)
    h.add(1,70)
    h.add(1,70)
    expect(h.remove()).toBe(80)
    expect(h.lastInput()).toBe(50)
})

test('asArray test',()=>{
    h.add(1,80)
    h.add(2,50)
    h.add(3,70)
    h.add(4,70)
    expect(h.asArray()).toBe('80707050')
})