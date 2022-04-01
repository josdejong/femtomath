import typed from 'typed-function'

/**
 * @typedef {Object.<string, function>} Signature
 */

/**
 * @typedef {Object<string, Signature>} SignatureCollection
 */

export function createFemtoMath() {
  const typedInstance = typed.create()

  return {
    importType: function (type) {
      typedInstance.types.push(type)
    },

    importConversion: function (conversion) {
      typedInstance.conversions.push(conversion)
    },

    import: function (...collections) {
      const femtomath = this
      const uniqueKeys = new Set(collections.flatMap(Object.keys))

      for (let key of uniqueKeys) {
        const existingImpl = femtomath[key]
        const newImpl = collections.map(collection => collection[key])
        const allImpl = [existingImpl].concat(newImpl).filter(impl => !!impl)

        femtomath[key] = typedInstance.apply(null, [key].concat(allImpl))
      }
    }
  }
}
