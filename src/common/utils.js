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
