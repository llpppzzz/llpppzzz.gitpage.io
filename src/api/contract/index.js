const addr = 'n1nxDvjZZsCrVYrqrw4FwMeDDcGTvZ89b6P'

export default {
  getAllItems (params) {
    return Nasa.query(addr, 'getAllItems', [params])
  },
  async setItem (content) {
    try {
      const result = await Nasa.call(addr, 'setItem', [content])
      // console.log(result)
      // const payId = result.payId
      const txHash = result.txHash
      return await Nasa.getTxResult(txHash)
    } catch (e) {
      throw new Error (e)
    }
  }
}
