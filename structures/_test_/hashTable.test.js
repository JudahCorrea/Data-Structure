import Hash from "../_src_/hashTable";

let ht

beforeEach(()=>{
    ht = new Hash()
})

test('add and search', ()=>{
    ht.add(14, 'pedro')
    ht.add(82, 'joao')
    ht.add(43, 'mateus')
    ht.add(71, 'leandro')
    expect(ht.get(82)).toBe('joao')
})

test('remove', ()=>{
    ht.add(14, 'pedro')
    ht.add(82, 'joao')
    ht.add(43, 'mateus')
    ht.add(71, 'leandro')
    ht.remove(43)
    expect(ht.get(43)).toBe(undefined)
})