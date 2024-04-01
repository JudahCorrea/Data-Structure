import List_double_linked from "../_src_/double_linked_list"
let l 

beforeEach(()=>{
    l = new List_double_linked()
})

test('Instatiated list is Empty', ()=>{
    expect(l.isEmpty()).toBe(true)
})

test('add test',()=>{
    l.add('10')
    l.add('20')
    l.add('30')
    l.add('40')
    l.add('50')
    expect(l.search('10')).toBe('10')
    expect(l.search('30')).toBe('30')
    expect(l.search('50')).toBe('50')
})

test('append test',()=>{
    l.add('10')
    l.add('20')
    l.add('30')
    l.add('40')
    l.append('50')
    expect(l.search('50')).toBe('50')
})

test('add at test',()=>{
    l.add('10')
    l.add('20')
    l.add('30')
    l.addAt('40',2)
    expect(l.search('40')).toBe('40')
})

test('add at error', ()=>{
    l.add('10')
    expect(()=>l.addAt('20', 2)).toThrow('invalid index')
})

test('remove first test',()=>{
    l.add('10')
    l.remove()
    expect(l.isEmpty()).toBe(true)
})

test('remove last test',()=>{
    l.add('10')
    l.removeLast()
    expect(l.isEmpty()).toBe(true)
})

test('remove at test',()=>{
    l.add('10')
    l.removeAt('10')
    expect(l.isEmpty()).toBe(true)
})

test('length test',()=>{
    l.add('10')
    expect(l.length()).toBe(1)
    l.remove()
    expect(l.length()).toBe(0)
})

test('toString test', ()=>{
    l.add('10')
    l.add('20')
    l.add('30')
    l.add('40')
    l.add('50')
    expect(l.toString()).toBe('5040302010')
})
