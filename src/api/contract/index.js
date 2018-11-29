// import 'nasa.js/dist/nasa.js'
import '../../../static/lib/nasa.js'

const addr = 'n1nxDvjZZsCrVYrqrw4FwMeDDcGTvZ89b6P'

export default {
  getAllItems (params) {
    return Nasa.query(addr, 'getAllItems', [params])
  },
  setItem (content) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Nasa.call(addr, 'setItem', [content])
        console.log(result)
        // const payId = result.payId
        const txHash = result.txHash
        const res = await Nasa.getTxResult(txHash)
        resolve(res)
      } catch (e) {
        reject(e)
      }
    })
  }
}
