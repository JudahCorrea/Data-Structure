import BubbleSort from "../_src_/bubbleSort";

let bs

beforeEach(()=>{
 bs = new BubbleSort()
})


test('organizar sequencia com bubblesort', ()=>{
    let data = [6,5,1,7,8,9,2,3]
    expect(bs.organizeBubbleSort(data)).toStrictEqual([1,2,3,5,6,7,8,9])
})

test('organizar sequencia com bubblesort escrito de outra forma', ()=>{
    let data = [6,5,1,7,8,9,2,3]
    expect(bs.otherBubbleSort(data)).toStrictEqual([1,2,3,5,6,7,8,9])
})