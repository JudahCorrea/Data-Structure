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
})

test('remove', ()=>{
    bt.insert(30)
    bt.insert(16)
    bt.insert(60)
    bt.insert(20)
    bt.insert(7)
    bt.insert(35)
    bt.remove(7)
})
