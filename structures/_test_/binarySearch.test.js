import BinarySearch from "../_src_/binarySearch";

let bs

beforeEach(()=>{
    let data = ['d','e','h','l','a', 'w','t']
    bs = new BinarySearch(data)
    //when instatianting the BinarySearch obj, the Merge Algorthm organizes the array
})

test('searching in the alfabetic vector', ()=>{
    
    console.log(bs.data)
    expect(bs.binarySearch('a', bs.data)).toBe('a')
    expect(bs.binarySearch('d', bs.data)).toBe('d')
    expect(bs.binarySearch('e', bs.data)).toBe('e')
    expect(bs.binarySearch('l', bs.data)).toBe('l')
})

test('worst case, searching entired array and dnot find',()=>{
    expect(bs.binarySearch('k', bs.data)).toBe(-1)
})