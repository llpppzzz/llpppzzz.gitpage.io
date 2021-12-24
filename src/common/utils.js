/**
 * url 格式化
 * @param url [url模板]
 * @param map [参数]
 */
export function formatUrl (url, map) {
  map = map || {}
  return url.replace(/{(\w+)}/g, function (match, key) {
    let value = map[key]
    return typeof value !== 'undefined' ? encodeURIComponent(value + '') : match
  })
}

/**
 * 是否是数组类型
 */
export function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

/**
 * 是否是对象类型
 */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 深拷贝
 * @param target [目标对象]
 * @param source [源对象]
 */
export function deepCopy (target, source) {
  for (let key in source) {
    let copy = source[key]
    if (target === copy) continue // to avoid endless loop, such as window.window === window
    if (isArray(copy)) {
      target[key] = deepCopy(target[key] || [], copy)
    } else if (isObject(copy)) {
      target[key] = deepCopy(target[key] || {}, copy)
    } else {
      target[key] = copy
    }
  }
  return target
}

/**
 * underscore 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  let later = function () {
    // 现在和上一次时间戳比较
    let last = +new Date() - timestamp
    // 如果当前间隔时间少于设定时间且大于0就重新设置定时器
    if (last < wait && last >= 0) {
      // clearTimeout(timeout)
      console.log(wait - last)
      timeout = setTimeout(later, wait - last)
    } else {
      // 否则的话就是时间到了执行回调函数
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function () {
    context = this
    args = arguments
    // 获得时间戳
    timestamp = +new Date()
    // 如果定时器不存在且立即执行函数
    let callNow = immediate && !timeout
    // 如果定时器不存在就创建一个
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      // 如果需要立即执行函数的话 通过 apply 执行
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */
export function throttle (func, wait, options = {}) {
  let context, args, result
  let timeout = null
  let previous = 0
  // let later = function () {
  //   previous = options.leading === false ? 0 : +new Date()
  //   timeout = null
  //   result = func.apply(context, args)
  //   if (!timeout) context = args = null
  // }
  return function () {
    let now = +new Date()
    // 首次进入!previous一定是true，如果设置了{leading: false}
    // 则(now - previous) = 0
    // 则remaining = wait，不会进入if判断，第一次点击被忽略
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      // if (timeout) {
      //   clearTimeout(timeout)
      //   timeout = null
      // }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
    // else if (!timeout && options.trailing !== false) {
    //   timeout = setTimeout(later, remaining)
    // }
    return result
  }
}

/**
 * 判断一个对象是否空的
 * @param obj
 * @param [excludeInherited=true] 是否排除非原型属性
 * @returns {boolean}
 */
export function isEmpty (obj, excludeInherited) {
  if (!obj || !isObject(obj)) { return true }
  excludeInherited = excludeInherited !== false
  for (var key in obj) {
    if ((excludeInherited && obj.hasOwnProperty(key)) || !excludeInherited) { return false }
  }
  return true
}
