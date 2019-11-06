(function ($) {
  'use strict';
  $(function () {
    var lineStatsOptions = {
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      stepsize: 100
    }
    
    if ($("#net-profit").length) {
      var marksCanvas = document.getElementById("net-profit");
      var marksData = {
        labels: ["Efficency","Elegance","Analytical", "Complexity", "Cleanliness","Creativity"],
        datasets: [{
          label: "Traditional",
          backgroundColor: 'rgba(100, 90, 250,0.5)',
          borderColor: 'rgba(100, 90, 250,0.5)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(150, 77, 247,0.5)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [45, 35, 75, 60, 70, 40 ]
        },{
          label: "Auditive",
          backgroundColor: 'rgba(88, 208, 222,0.8)',
          borderColor: 'rgba(88, 208, 222,0.8)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [54, 45, 60, 70, 54, 75]
        }, {
          label: "Visual",
          backgroundColor: 'rgba(150, 77, 247,0.5)',
          borderColor: 'rgba(150, 77, 247,0.5)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(150, 77, 247,0.5)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [65, 75, 70, 80, 60, 80 ]
        }]
      };

      var chartOptions = {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false,
          },
          pointLabels: {
            fontSize: 14
          },
          angleLines: {
            color: '#e9ebf1'
          },
          gridLines: {
            color: "#e9ebf1"
          }
        },
        legend: false,
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
      };

      var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
      });
      document.getElementById('net-profit-legend').innerHTML = radarChart.generateLegend();
    }
    
    
    if ($("#market-overview-chart").length) {
      var MarketingChartCanvas = $("#market-overview-chart").get(0).getContext("2d");
      var Marketing_data_1_1 = [0,0,0,0,0,0,0, 242, 235, 256,20,0];
      var Marketing_data_1_2 = [0,0,0,0,0,0,0, 309, 430, 340,50,0];
      var Marketing_data_1_3 = [0,0,0,0,0,0,0, 386, 480, 400,42,0];



      var MarketingChart = new Chart(MarketingChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov"],
          datasets: [{
              label: 'VISUAL',
              data: Marketing_data_1_1,
              backgroundColor: 'rgba(150, 77, 247,0.5)',
              borderColor: 'rgba(150, 77, 247,0.5)',
              borderWidth: 0
            },{
              label: 'TRADITIONAL',
              data: Marketing_data_1_2,
              backgroundColor: 'rgba(100, 90, 250,0.5)',
              borderColor: 'rgba(100, 90, 250,0.5)',
              borderWidth: 0
            },
            {
              label: 'AUDITIVE',
              data: Marketing_data_1_3,
              backgroundColor: 'rgba(88, 208, 222,0.8)',
              borderColor: 'rgba(88, 208, 222,0.8)',
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                max: 400,
                display: true,
                beginAtZero: true,
                fontColor: "#212529",
                stepSize: 100
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#212529"
              },
              gridLines: {
                color: "#e9ebf1",
                display: true
              },
              barPercentage: 0.2
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
      $("#market-overview_1").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_1_1;
        data.datasets[1].data = Marketing_data_1_2;
        data.datasets[2].data = Marketing_data_1_2;
        data.datasets[3].data = Marketing_data_1_2;
        MarketingChart.update();
      });
      $("#market-overview_2").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_2_1;
        data.datasets[1].data = Marketing_data_2_2;
        data.datasets[2].data = Marketing_data_2_2;
        data.datasets[3].data = Marketing_data_2_2;
        MarketingChart.update();
      });
      $("#market-overview_3").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_3_1;
        data.datasets[1].data = Marketing_data_3_2;
        data.datasets[2].data = Marketing_data_3_2;
        data.datasets[3].data = Marketing_data_3_2;
        MarketingChart.update();
      });
    }
    if ($("#realtime-statistics").length) {
      var realtimeChartCanvas = $("#realtime-statistics").get(0).getContext("2d");
      var realtimeChart = new Chart(realtimeChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Profit',
              data: [330, 380, 230, 400, 309, 530, 340],
              backgroundColor: "#0f5bff",
              borderColor: '#0f5bff',
              borderWidth: 0
            },
            {
              label: 'Target',
              data: [600, 600, 600, 600, 600, 600, 600],
              backgroundColor: '#e5e9f2',
              borderColor: '#e5e9f2',
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 25,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                display: false,
                beginAtZero: true,
                fontColor: "#354168"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 0.5,
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    
    
    if ($('#stats-line-graph-2').length) {
      var lineChartCanvas = $("#stats-line-graph-2").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-3').length) {
      var lineChartCanvas = $("#stats-line-graph-3").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-4').length) {
      var lineChartCanvas = $("#stats-line-graph-4").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }if ($('#dashboard-guage-chart1').length) {
      var g3 = new JustGage({
        id: 'dashboard-guage-chart1',
        value: 15,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 1,
        customSectors: [{
          color: 'rgba(150, 77, 247,0.5)',
          lo: 50,
          hi: 100
        }, {
          color: 'rgba(189, 127, 29,0.5)',
          lo: 0,
          hi: 50
        }],
        counter: true
      });
    }

    if ($('#dashboard-guage-chart').length) {
      var g3 = new JustGage({
        id: 'dashboard-guage-chart',
        value: 65,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 1,
        customSectors: [{
          color: 'rgba(150, 77, 247,0.5)',
          lo: 50,
          hi: 100
        }, {
          color: 'rgba(189, 127, 29,0.5)',
          lo: 0,
          hi: 50
        }],
        counter: true
      });
    }
  });
})(jQuery);