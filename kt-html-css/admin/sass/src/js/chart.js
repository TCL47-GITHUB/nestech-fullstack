
var dom = document.getElementById("bar-chart-1");
var myChart1 = echarts.init(dom, null, {
  renderer: "svg",
  useDirtyRect: false,
  width: 'auto',
  height: '400',
});
var app = {};

var option;

var series = [
  {
    data: [120, 100, 200, 80, 70, 110, 130],
    type: "bar",
    stack: "a",
    name: "a",
  },
  {
    data: [180, 90, 40, 120, 140, 20, 10],
    type: "bar",
    stack: "b",
    name: "b",
  },
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: [],
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== "-") {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
      },
    };
  }
}
option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: series,
};

if (option && typeof option === "object") {
  myChart1.setOption(option);
}

window.addEventListener("resize", myChart1.resize);
window.onload = function () {
  myChart1.resize();
};





var chartDom = document.getElementById('bar-chart-2');

var myChart = echarts.init(chartDom, null, {
  renderer: "svg",
  useDirtyRect: false,
  width: 'auto',
  height: '400',
});
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);

window.addEventListener("resize", myChart.resize);
window.onload = function () {
  myChart.resize();
};


