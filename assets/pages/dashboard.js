  'use strict';
    $(document).ready(function() {
 dashboard();

 /*Counter Js Starts*/
$('.counter').counterUp({
    delay: 10,
    time: 400
});
/*Counter Js Ends*/

//  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4,2,1,5], {
              type: 'bar',
              barWidth: '15px',
              height: '80px',
              barColor: '#fff',
            tooltipClassname:'abc'
          });

            function setHeight() {
                var $window = $(window);
                var windowHeight = $(window).height();
                if ($window.width() >= 320) {
                    $('.user-list').parent().parent().css('min-height', windowHeight);
                    $('.chat-window-inner-content').css('max-height', windowHeight);
                    $('.user-list').parent().parent().css('right', -300);
                }
            };
            setHeight();

            $(window).on('load',function() {
                setHeight();
            });
        });

 $(window).resize(function() {
        dashboard();
        //  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4,2,1,5], {
              type: 'bar',
              barWidth: '15px',
              height: '80px',
              barColor: '#fff',
            tooltipClassname:'abc'
          });
    });

function dashboard(){

};

  Highcharts.chart('barchart', {
      title: {
          text: '월별 수익률'
      },
      xAxis: {
          categories: ['05월', '06월', '07월', '08월', '09월']
      },
      labels: {
          items: [{
              html: '전체 수익률',
              style: {
                  left: '130px',
                  top: '18px',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
              }
          }]
      },
      series: [{
          type: 'column',
          name: '삼성전자',
          data: [3, 2, 1, 3, 4],
          color:'#f57c00'
      }, {
          type: 'column',
          name: '하나금융지주',
          data: [4, 3, 5, 7, 6],
          color:'#2BBBAD'
      }, {
          type: 'column',
          name: '자이언트스텝',
          data: [3, 4, 2, 9, 5],
          color:'#39444e'
      }, {
          type: 'spline',
          name: '평균',
          data: [3.5, 2.67, 3, 6.33, 3.33],
          marker: {
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[3],
              fillColor: 'white'
          }
      }, {
          type: 'pie',
          name: 'Total consumption',
          data: [{
              name: 'Jane',
              y: 13,
              color: '#f57c00'
          }, {
              name: 'John',
              y: 23,
              color:'#2BBBAD'
          }, {
              name: 'Joe',
              y: 19,
              color:'#39444e'
          }],
          center: [40, 20],
          size: 100,
          showInLegend: false,
          dataLabels: {
              enabled: false
          }
      }]
  });


  Highcharts.chart('piechart', {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
         //  backgroundColor:'#fff'
      },
      title: {
          text: '익명의 칠면조 비중 구성'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '포트폴리오 비중',
          data: [
              {
                 name: '삼성전자',
                 y: 40.0,
                 sliced: true,
                 selected: true,
                 color:'#2BBBAD'
              },
              {
                 name: '하나금융지주',
                 y: 26.8,
                 color:'#39444e'
               },
              {
                  name: 'SK하이닉스',
                  y: 12.8,
                  color:'#2196F3'
              },
              {
                 name: '셀트리온',
                 y: 8.5,
                 color:'#3F729B'
              },
              {
                 name: '카카오',
                 y: 6.2,
                 color:'#f57c00'
              },
              {
                 name: '기타',
                 y: 5.7,
                 color:'#aa66cc'
              }
          ]
      }]
  });
