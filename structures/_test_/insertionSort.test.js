import InserionSort from "../_src_/insertionSort";

let is

beforeEach(()=>{
    is = new InserionSort()
})

test('organizar sequencia com insertion sort',()=>{
    let data = [47,23,58,78,96,1,3]

    expect(is.organizeInsertionSort(data)).toStrictEqual([1,3,23,47,58,78,96])
})