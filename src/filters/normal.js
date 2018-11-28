export default {
  dateServer (value) {
    return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
  },
  booleanFilter (value) {
    return value ? '是' : '否'
  }
}
