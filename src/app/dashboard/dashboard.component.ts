import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, } from '../md/md-chart/md-chart.component';
import { ChartType, ChartOptions } from 'chart.js';
import * as Chartist from 'chartist';
interface month {
  value: string;
  name: string;
}

declare const $: any;

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  months: month[] = [
    { value: '1', name: 'January' },
    { value: '2', name: 'February' },
    { value: '3', name: 'March' },
    { value: '4', name: 'Aprial' },
    { value: '5', name: 'May' },
    { value: '6', name: 'June' },
    { value: '7', name: 'July' },
    { value: '8', name: 'August' },
    { value: '9', name: 'Septembar' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  doughnutChartLabels: string[] = [
    '5/30',
    '4/30',
    '3/30',
    '2/5',
    '1/5'
  ];
  doughnutChartData = [30, 30, 30, 5, 5];

  public pieChartOptions: ChartOptions = {
    elements: {
      point: {
        pointStyle: 'star'
      }
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        fontColor: 'black',
        fontSize: 12,
        padding: 15
      }
    }
  };

  doughnutChartType = 'doughnut';

  public tableData: TableData;
  startAnimationForLineChart(chart: any) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;
    chart.on('draw', function (data: any) {

      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart: any) {
    let seq2: any, delays2: any, durations2: any;
    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data: any) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
    /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


    const dataColouredBarsChart = {
      labels: ['&nbsp;01<br>Mon', '&nbsp;02<br>Tue', '&nbsp;03<br>Web',
        '&nbsp;04<br>Thu', '&nbsp;05<br>Fri', '&nbsp;06<br>Sat',
        '&nbsp;07<br>Sun', '&nbsp;08<br>Mon', '&nbsp;09<br>Tue',
        '&nbsp;10<br>Web', '&nbsp;11<br>Thu', '&nbsp;12<br>Fri',],
      series: [
        [28, 38, 49, 55, 58, 69, 69, 75, 78, 84, 94, 11, 67, 19],
        [67, 52, 43, 28, 33, 43, 43, 53, 54, 54, 64, 87, 35, 45],
        [23, 11, 67, 90, 29, 37, 38, 39, 10, 41, 59, 66, 87, 90]
      ]
    };

    const optionsColouredBarsChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 10
      }),
      axisY: {
        showGrid: true,
        offset: 50
      },
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 100,
      showPoint: true,
      height: '240px'
    };


    const colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart,
      optionsColouredBarsChart);

    this.startAnimationForLineChart(colouredBarsChart);
  }
  ngAfterViewInit() {
    const breakCards = true;
    if (breakCards === true) {
      // We break the cards headers if there is too much stress on them :-)
      $('[data-header-animation="true"]').each(function () {
        const $fix_button = $(this);
        const $card = $(this).parent('.card');
        $card.find('.fix-broken-card').click(function () {
          const $header = $(this).parent().parent().siblings('.card-header, .card-image');
          $header.removeClass('hinge').addClass('fadeInDown');

          $card.attr('data-count', 0);

          setTimeout(function () {
            $header.removeClass('fadeInDown animate');
          }, 480);
        });

        $card.mouseenter(function () {
          const $this = $(this);
          const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
          $this.attr('data-count', hover_count);
          if (hover_count >= 20) {
            $(this).children('.card-header, .card-image').addClass('hinge animated');
          }
        });
      });
    }
  }
}
