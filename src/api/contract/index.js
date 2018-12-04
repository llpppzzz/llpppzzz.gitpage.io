const addr = 'n1nxDvjZZsCrVYrqrw4FwMeDDcGTvZ89b6P'

export default {
  getAllItems (params) {
    return Nasa.query(addr, 'getAllItems', [params])
  },
  setItem (content) {
    return Nasa.call(addr, 'setItem', [content])
  },
  getTxResult (txHash) {
    return Nasa.getTxResult(txHash)
  }
}
