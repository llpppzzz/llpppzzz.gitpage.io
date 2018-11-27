import '../../../static/lib/nasa.js'

const addr = 'n1onduXD12Begh2tSQ92cCECzvjQJc5w72T'

export default {
  getAllItems (params) {
    return Nasa.query(addr, 'getAllItems', [])
  },
  setItem (content) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Nasa.call(addr, 'setItem', [content])
        console.log(result)
        const payId = result.payId
        const res = await Nasa.getTxResult(payId)
        resolve(result)
      } catch (e) {
        reject(e)
      }
    })
  }
}
