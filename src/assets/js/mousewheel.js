'use strict'
let obj = {}
window.onmousewheel = function () {
  let events = Object.keys(obj)
  if (events.indexOf('stop') !== -1) {
    return
  }
  for (let value of events) {
    let func = obj[value]
    func(event)
  }
}
export default obj
