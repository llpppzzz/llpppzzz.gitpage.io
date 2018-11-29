export default {
  methods: {
    open (url, name) {
      let a = document.createElement('a')
      a.target = '_blank'
      a.setAttribute('href', url)
      if (name) {
        a.setAttribute('download', name)
      }
      a.style.display = 'none'
      document.body.appendChild(a)
      let e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      a.dispatchEvent(e)
      setTimeout(() => {
        document.body.removeChild(a)
      }, 1000)
    }
  }
}
