'use strict'
let obj = {}
window.onscroll = function () {
  let events = Object.keys(obj)
  for (let value of events) {
    let func = obj[value]
    func()
  }
}
export default obj
