import Vue from 'vue'
import normal from './normal'
import date from './date'

export default {
  init () {
    const filters = Object.assign(
      {},
      normal,
      date
    )

    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
