'use strict'
let obj = {}
let timer
obj['json'] = function (Highcharts, isRun) {
  if (!isRun && timer) {
    clearInterval(timer)
  }
  let chart = {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in IE < IE 10.
    marginRight: 10,
    events: {
      load: function () {
        var series = this.series[0]
        timer = setInterval(function () {
          var x = (new Date()).getTime()
          var y = Math.random()
          series.addPoint([x, y], true, true)
        }, 1000)
      }
    },
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '400',
    height: '260'
  }
  var title = {
    text: '实时监测浏览频率',
    style: {
      color: 'silver'
    }
  }
  var xAxis = {
    type: 'datetime',
    tickPixelInterval: 150
  }
  var yAxis = {
    title: {
      text: 'Hz'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  }
  var tooltip = {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + Highcharts.numberFormat(this.y, 2)
    }
  }
  var plotOptions = {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  }
  var legend = {
    enabled: false
  }
  var exporting = {
    enabled: false
  }
  var series = [{
    name: 'Monitor',
    data: (function () {
      let data = []
      let time = (new Date()).getTime()
      let i
      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        })
      }
      return data
    }())
  }]
  var credits = {
    enabled: false
  }
  var json = {}
  json.chart = chart
  json.title = title
  json.tooltip = tooltip
  json.xAxis = xAxis
  json.yAxis = yAxis
  json.legend = legend
  json.exporting = exporting
  json.series = series
  json.plotOptions = plotOptions
  json.credits = credits
  Highcharts.setOptions({
    global: {
      useUTC: false
    }
  })
  return json
}
export default obj
