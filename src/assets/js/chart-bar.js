'use strict'
var chart = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  type: 'column',
  height: '350',
  width: '640'
}
var title = {
  text: '嘉矩每月销售额',
  style: {
    color: 'gold'
  }
}
var subtitle = {
  text: '销售额年度图表',
  style: {
    color: 'goldenrod'
  }
}
var xAxis = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  crosshair: true,
  labels: {
    style: {
      'fontSize': '18px',
      'color': '#eee'
    }
  }
}
var yAxis = {
  min: 0,
  title: {
    text: '营业额(万/月)',
    style: {
      color: 'silver'
    }
  },
  labels: {
    style: {
      'fontSize': '18px',
      'color': '#eee'
    }
  }

}
var tooltip = {
  headerFormat: '<span style="font-size:20px;color:red">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
     '<td style="padding:0"><b>{point.y:.1f} ￥</b></td></tr>',
  footerFormat: '</table>',
  shared: false,
  useHTML: true
  // enabled: false
}
var plotOptions = {
  column: {
    pointPadding: 0.2,
    borderWidth: 0,
    shadow: false
  },
  series: {
    events: {
      legendItemClick: function (e) {
        return false // 直接 return false 即可禁用图例点击事件
      }
    }
  }
}
var credits = {
  enabled: false
}

var series = [{
  name: 'JIA JU',
  data: [40, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
}]
var legend = {
  layout: 'vertical',
  itemStyle: {
    color: 'silver',
    fontSize: '20px'
  }
}
var json = {}
json.chart = chart
json.title = title
json.subtitle = subtitle
json.tooltip = tooltip
json.xAxis = xAxis
json.yAxis = yAxis
json.series = series
json.plotOptions = plotOptions
json.credits = credits
json.legend = legend
let obj = {}
obj['json'] = json
export default obj
