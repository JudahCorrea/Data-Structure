import SelectionSort from "../_src_/selectionSort";

let ss

beforeEach(()=>{
    ss = new SelectionSort()
})

test('organizando com selection sort', ()=>{
    let data = [58,45,12,0,47,89,63,2,14,7,7,56,10]

    expect(ss.organizeSelectionSort(data)).toStrictEqual([0,2,7,7,10,12,14,45,47,56,58,63,89])
})