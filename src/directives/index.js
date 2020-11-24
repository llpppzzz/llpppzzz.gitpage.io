import normal from './normal'

export default {
  init (app) {
    const directives = Object.assign({}, normal)

    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}
