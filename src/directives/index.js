import Vue from 'vue'
import normal from './normal'

export default {
  init () {
    const directives = Object.assign({}, normal)

    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
