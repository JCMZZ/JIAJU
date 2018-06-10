'use strict'
let req = require('./echarts')
let app = {}
app['broken'] = req.echarts
let option = {
  xAxis: {
    show: false,
    type: 'category'
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  series: [{
    name: 'nian',
    data: [0, 30, 15, 45, 30, 60, 45, 100],
    type: 'line',
    symbol: 'circle',
    symbolSize: 30,
    lineStyle: {
      normal: {
        color: 'goldenrod',
        width: 4,
        type: 'dashed'
      }
    },
    itemStyle: {
      normal: {
        borderWidth: 3,
        borderColor: 'red',
        color: 'goldenrod'
      }
    }
  }]
}

// if (option && typeof option === 'object') {
//   myChart.setOption(option, true)
// }
app['option'] = option
export default app
