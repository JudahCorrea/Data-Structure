import BinaryTree from "../_src_/binarytTree";

let bt

beforeEach(()=>{
    bt = new BinaryTree()
})

test('add', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    let minNode = bt.findMinNode(bt.root)
    expect(minNode.key).toBe(7)
})

test('remove', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    bt.remove(7)
    let minNode = bt.findMinNode(bt.root)
    expect(minNode.key).toBe(16)
})

test('print pre order', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    let preOrder = bt.printPreOrder(bt.root)
    expect(preOrder).toStrictEqual([30,16,7,20,60,35])
})

test('print in order', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    let inOrder = bt.printInOrder(bt.root)
    expect(inOrder).toStrictEqual([7,16,20,30,35,60])
})

test('print after order', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    let afterOrder = bt.printAfterOrder(bt.root)
    expect(afterOrder).toStrictEqual([7,20,16,35,60,30])
})
