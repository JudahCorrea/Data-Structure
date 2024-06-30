import QuickSort from "../_src_/quickSort";

let qs

beforeEach(()=>{
    qs = new QuickSort()
})

test('organizando com Quick Sort', ()=>{
    let data = [5,4,8,1,2,6,7,3]

    expect(qs.organizeQuickSort(data)).toStrictEqual([1,2,3,4,5,6,7,8])
})