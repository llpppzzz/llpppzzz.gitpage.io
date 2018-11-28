const pMonitor = {}
const SEC = 1000
const TIMEOUT = 10 * SEC
const setTime = (limit = TIMEOUT) => time => time >= limit
const getLoadTime = ({ startTime, responseEnd }) => responseEnd - startTime
const getName = ({ name }) => name
pMonitor.getLoadTime = () => {
  const [{ domComplete }] = performance.getEntriesByType('navigation')
  return domComplete
}
pMonitor.getTimeoutRes = (limit = TIMEOUT) => {
  const isTimeout = setTime(limit)
  const resourceTimes = performance.getEntriesByType('resource')
  return resourceTimes.filter(item => isTimeout(getLoadTime(item))).map(getName)
}
export default pMonitor
