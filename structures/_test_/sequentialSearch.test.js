import SequentialSearch from "../_src_/sequentialSearch";

let ss

beforeEach(()=>{
    ss = new SequentialSearch()
})

test('sequential search for string called: Yohana', ()=>{
    let data = ['Judah', 'Josep', 'Jacob', 'Layla', 'Dani', 'Natasha', 'Yohana']

    expect(ss.sequentialSearch('Yohana', data)).toBe('Yohana')
})

test('worst case', ()=>{
    let data = ['Judah', 'Josep', 'Jacob', 'Layla', 'Dani', 'Natasha', 'Yohana']

    expect(ss.sequentialSearch('mephistopheles', data)).toBe(-1)
})