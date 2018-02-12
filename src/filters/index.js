import Vue from 'vue'
import normal from './normal'

export default function () {
  const filters = Object.assign({}, normal)

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
