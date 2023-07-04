import React,{useState} from 'react';
import '../styles/Insights.css';

import Chart from "react-apexcharts";

function Insights() {

  //backend counting data:
  let maleCount = 200;
  let femaleCount = 50;
  let othersCount = 10;

  //users country count
  let indiaCount = 40;
  let austrailaCount = 30;
  let belgiumCount = 10;
  let colombiaCount = 4;
  let usCount = 20;

  //ser company count
  let dell = 5;
  let vit = 10;
  let wipro = 8;
  let tcs = 7;
  let zoho =3;

  const [gender] = useState({
          series: [maleCount, femaleCount, othersCount],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {show: true},
                    value: {show: true,}
                  }
                }
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: ['Male', 'Female', 'Others'],
              legend: {
                show: true, floating: true, fontSize: '16px', position: 'left', offsetX: 70, offsetY: 15,
                labels: {useSeriesColors: true,},
                markers: { size: 0},
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: { vertical: 3}
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {show: false}
                }
              }]
            }
  })
  const[region] = useState({
    series: [austrailaCount, belgiumCount, colombiaCount, indiaCount, usCount],
            options: {
              chart: {
                width: 100,
                type: 'pie',
              },
              labels: ['Austraila', 'Belgium', 'Colambia', 'India', 'United States'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
  })

  const [company] = useState({
    series: [dell, vit, wipro, tcs, zoho],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              labels: ['Dell', 'VIT', 'Wipro', 'TCS', 'Zoho'],

              colors: ['#FF5733', '#FFDD33', '#33FF36', '#F033FF', '#339CFF', '#3F33FF', '#17C11A'],
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: true
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
  })

  const [performance] = useState({
    series: [75],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                  show: false
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                   hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: true,
                      color: '#888',
                      fontSize: '17px'
                    },
                    value: {
                      formatter: function(val) {
                        return parseInt(val);
                      },
                      color: '#111',
                      fontSize: '36px',
                      show: true,
                    }
                  }
                }
              },
              fill: {
                stype: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#ABE5A1'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Percent'],
            },
          
  })
  const [usage] = useState({
    series: [69],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                  show: false
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                   hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: true,
                      color: '#888',
                      fontSize: '17px'
                    },
                    value: {
                      formatter: function(val) {
                        return parseInt(val);
                      },
                      color: '#111',
                      fontSize: '36px',
                      show: true,
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#ABE5A1'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Percent'],
            },
          
  })

  return (
    <div className='container-fluid insights'>
      <h1 className='mt-3'>Insights</h1>
      <div className='row'>
        <div className='col-sm-12 col-md-4 gender mx-auto'>
          <h4 className='pt-2 pl-5'>Gender</h4>
          <Chart options={gender.options} series={gender.series} type="radialBar" />
        </div>

        <div className='col-sm-12 col-md-4 region mx-auto'>
          <h4 className='pt-2 pl-5'>Region</h4>
          <Chart options={region.options} series={region.series} type="pie" />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12 col-md-4 company mx-auto'>
          <h4 className='pt-2 pl-5'>Customer's Company</h4>
          <Chart options={company.options} series={company.series} type="donut" />
        </div>

        <div className='col-sm-12 col-md-3 company mx-auto'>
          <h4 className='pt-2 pl-5'>Performance</h4>
          <Chart options={performance.options} series={performance.series} type="radialBar" />
        </div>
        <div className='col-sm-12 col-md-3 company mx-auto'>
          <h4 className='pt-2 pl-5'>Usage</h4>
          <Chart options={usage.options} series={usage.series} type="radialBar" />
        </div>

      </div>
    </div>
  )
}

export default Insights