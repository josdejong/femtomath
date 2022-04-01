import assert from 'assert'
import Complex from 'complex.js'
import { femtomath } from '../femtomath.js'

describe('femtomath', () => {
  it('handle numbers', () => {
    assert.strictEqual(femtomath.subtract(16, femtomath.add([3,4,2])), 7)
    assert.strictEqual(femtomath.subtract(16, femtomath.add(3,4)), 9)
    assert.strictEqual(femtomath.negate(femtomath.number('8')), -8)
  })

  it('can be extended', () => {
    femtomath.import({
      add: {
        'string, string': function (a, b) {
          return a + b.replace(/is/, 'was')
        }
      }
    })

    assert.strictEqual(femtomath.add('Kilroy',' is here'), 'Kilroy was here')
  })

  it('handles complex numbers', () => {
    assert.deepStrictEqual(femtomath.complex(2,3), new Complex(2, 3))
    assert.deepStrictEqual(
      femtomath.subtract(16, femtomath.add(3, femtomath.complex(0,4))),
      femtomath.complex(13, -4))
    assert.deepStrictEqual(femtomath.negate(femtomath.complex(3, '8')).im, -8)
  })

  it('handles mixed numbers and complex numbers', () => {
    assert.deepStrictEqual(
      femtomath.add(4, femtomath.complex(2,3)),
      femtomath.complex(6,3)
    )
  })
})
