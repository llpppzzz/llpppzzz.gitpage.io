export default {
  add (state) {
    state.pageStatus += 1
  },
  reduce (state) {
    state.pageStatus -= 1
  },
  assignment (state, payload) {
    const { text } = payload
    state.pageStatus = text
  }
}
