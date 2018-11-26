export default (page) => () => import(`page/${page}.vue`)
