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
