import SentinelQuest from "../_src_/sentinelQuest";

let sq

beforeEach(()=>{
    sq = new SentinelQuest()
})

test('searching with Sentinel', ()=>{
    let data = ['Judah', 'Josep', 'Jacob', 'Layla', 'Dani', 'Natasha', 'Yohana']
    let key = 'Layla'

    expect(sq.sentinelQuest(key, data)).toBe('Layla')
})

test('worst case, searching the entire array and not found', ()=>{
    let data = ['Judah', 'Josep', 'Jacob', 'Layla', 'Dani', 'Natasha', 'Yohana']
    let key = 'Orpheus'

    expect(sq.sentinelQuest(key, data)).toBe(-1)
})