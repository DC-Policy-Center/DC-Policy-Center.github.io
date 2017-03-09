google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
  var data = google.visualization.arrayToDataTable([
    ['', '', ''],
    ['', 10, 20],
    ['', 20, 30],
    ['', 30, 45],
    ['', 45, 60],
    ['', 65, 80]
  ]);

  var options = {
    title: 'Title',
    chartArea: {width: '50%'},

    colors: ['#D16D3B','#BECCDA',  '#6D7D8C','#E2C886','#B16379','#E8272C'],
    hAxis: {
      title: 'x-axis',
      minValue: 0
    },
    vAxis: {
      title: 'y-axis',
      maxValue: 80

    }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div_1'));
  chart.draw(data, options);
}


    google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['', '', ''],
        ['', 10, 20],
        ['', 20, 30],
        ['', 30, 45],
        ['', 45, 60],
        ['', 65, 80]
      ]);

      var options = {
        title: 'Title',
        chartArea: {width: '50%'},

        colors: ['#D16D3B','#BECCDA',  '#6D7D8C','#E2C886','#B16379','#E8272C'],
        hAxis: {
          title: 'x-axis',
          minValue: 0
        },
        vAxis: {
          title: 'y-axis',
          maxValue: 80

        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div_2'));
      chart.draw(data, options);
    }
