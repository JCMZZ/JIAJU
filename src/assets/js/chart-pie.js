'use strict'
var chart = {
  backgroundColor: 'transparent',
  plotBorderWidth: null,
  plotShadow: false,
  width: '300',
  height: '250'
}
var title = {
  text: '全年各系列销售占比',
  style: {
    color: '#eee'
  }
}
var tooltip = {
  headerFormat: '<span style="color:red">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
     '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
  footerFormat: '</table>',
  shared: true,
  useHTML: true
}
var plotOptions = {
  pie: {
    allowPointSelect: true,
    cursor: 'pointer',
    dataLabels: {
      enabled: false
    },
    showInLegend: true,
    slicedOffset: '5',
    point: {
      events: {
        mouseOver: function () { this.slice() },
        mouseOut: function () { this.slice() },
        click: function () { return false }
      }
    },
    borderWidth: 0
  }
}
var series = [{
  type: 'pie',
  name: 'Series share',
  data: [
    ['Study', 30.8],
    ['Culinary', 25.0],
    ['Parlor', 20.8],
    ['Other', 10.7],
    ['Balneal', 8.5],
    ['Suit', 6.2]
  ]
}]
var legend = {
  itemStyle: {
    color: '#eff'
  }
}
var credits = {
  enabled: false // 禁用版权信息
}
var json = {}
json.chart = chart
json.title = title
json.tooltip = tooltip
json.series = series
json.plotOptions = plotOptions
json.credits = credits
json.legend = legend

let obj = {}
obj['json'] = json
export default obj
