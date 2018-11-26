import 'nasa.js/dist/nasa.js'

const addr = 'n1kbi8t4k1k6Z2az5XKrsA3dZ5qhsX2kHiU'

export default {
  getAllItems (params) {
    return Nasa.query(addr, 'getAllItems', [])
  },
  async setItem (content) {
    try {
      let payId = await Nasa.call(addr, 'setItem', [content])
      return Nasa.getTxResult(payId)
    } catch (e) {
      return new Error(e)
    }
  }
}
