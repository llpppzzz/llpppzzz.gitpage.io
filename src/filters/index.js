import normal from './normal'
import date from './date'

export default {
  init (app) {
    const filters = Object.assign(
      {},
      normal,
      date
    )

    Object.keys(filters).forEach(key => {
      app.filter(key, filters[key])
    })
  }
}
