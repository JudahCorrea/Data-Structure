import MergeSort from "../_src_/mergeSort";

let ms

beforeEach(()=>{
    ms = new MergeSort()
})

test('organizando com merge sort', ()=>{
    let data = [1,1,23,56,0,47,8,56,2,1,3,78]

    expect(ms.organizeMergeSort(data)).toStrictEqual([0,1,1,1,2,3,8,23,47,56,56,78])
}) 