import { ALCIDES, getSymbolName } from '../src/Symbols.js'

suite('Alcides', () => {
    test('Can get SymbolName', () => {
        assert.deepEqual(getSymbolName(ALCIDES), 'ALCIDES')
    })
})
