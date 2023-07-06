import React, { useState }from 'react'
import { Link } from 'react-router-dom';

//importing chart pakage
import Chart from "react-apexcharts";

import '../styles/Dashboard.css';

function Dashboard() {
    
    const [sales] = useState({
        options:{
            chart: {
                id: "sales",
                toolbar:{show: false},
                width: '100%'
              },
              xaxis: {
                categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              yaxis:{
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              grid:{show: false},
              
        },
        series:[
            {
                name: "sales",
                data: [23, 45, 33, 38, 54, 40, 38, 52, 90, 50, 80, 83,]
            }
        ]
    })
    const [expenses] = useState({
        options:{
            chart: {
                id: "expenses",
                toolbar:{show: false},
                width: '100%'
              },
              xaxis: {
                categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              yaxis:{
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              grid:{show: false},
              
        },
        series:[
            {
                name: "expenses",
                data: [23, 45, 33, 38, 54, 40, 60, 52, 90, 72, 80, 83]
            }
        ]
    })
    const [profit] = useState({
        options:{
            dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
            chart: {
                id: "profit",
                toolbar:{show: false},
                width: '100%'
              },
              xaxis: {
                categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              yaxis:{
                show: false,
                labels: {show: false},
                axisBorder: {show: false},
                axisTicks: {show: false}
              },
              grid:{show: false},
              
        },
        series:[
            {
                name: "profit",
                data: [60, 45, 40, 40, 54, 30, 38, 52, 80, 53, 82, 90]
            }
        ]
    })
    const [state] = useState({
        options: {
            title: {
                text: 'Customers (2014-2023)',
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '20px',
                  fontWeight:  'bold',
                  color:  '#ffffff'
                },
            },
          colors: ['#E91E63', '#FF9800'],
          chart: {
            id: "new-user-area",
            width: '100%',
          },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
          }
        },
        series: [
          {
            name: "new users",
            data: [20, 25, 30, 40, 45, 50, 48, 60, 70, 88]
          },
          {
            name: "droped users",
            data: [10, 5, 30, 10, 20, 60, 55, 5, 10, 20]
          }
        ]
      })

      const [visits] = useState({
        options: {
            colors:['#FF9800'],
            title: {
                text: 'Customers Visits (jan - dec)',
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '20px',
                  fontWeight:  'bold',
                  color:  '#ffffff'
                },
            },
          chart: {
            id: "monthly-visits",
            width: '100%',
          },
          xaxis: {
            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
          }
        },
        series: [
          {
            name: "monthly visits",
            data: [300, 250, 400, 300, 230, 350, 470, 690, 600, 500, 520, 550]
          }
        ]
      })
    
    return (
    <div className='container-fluid dashboard'>
        <h1 className='mt-3 mb-3 text-primary'>Welcome Admin!</h1>
        
        <div className='row container-fluid'>
            <div className='col-3  rounded-4 container tabs'>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <Link to='../customers' className='nav-link'><i className="fa-solid fa-user-tag fa-xl" style={{color: '#ffffff'}}></i> Customers</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to='../products' className='nav-link'><i className="fa-solid fa-cart-plus fa-xl" style={{color: '#ffffff'}}></i> Products</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to='../feedbackshow' className='nav-link'><i className="fa-solid fa-comment fa-xl" style={{color: '#ffffff'}}></i> Feedback's</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to='../insights' className='nav-link'><i className="fa-solid fa-chart-line fa-xl" style={{color: '#ffffff'}}></i> Insights</Link>
                </li>
            </ul>   
            </div>

            <div className='col-3 sales bg-light rounded-4'>
                <h3>$923,906</h3>
                <p>Sales</p>
                <Chart 
                    options={sales.options}
                    series={sales.series}
                    type='line'
                />
            </div>
            <div className='col-3 expense bg-light rounded-4'>
                <h3>$450,800</h3>
                <p>Expenses</p>
                <Chart 
                    options={expenses.options}
                    series={expenses.series}
                    type='line'
                />
            </div>
            <div className='col-3 profit bg-light rounded-4'>
                <h3>$345,700</h3>
                <p>Profit</p>
                <Chart
                    options={profit.options}
                    series={profit.series}
                    type = 'area'
                />
            </div>

        </div>

        <div className='row'>
        <div className='col-md-6 col-sm-12 mt-5 mixed-chart users-chart'>
                <Chart
                options={state.options}
                series={state.series}
                type="area"
                
            />            
            </div>

            <div className='col-md-6 col-sm-12 mt-5 mixed-chart '>
                <Chart
                options={visits.options}
                series={visits.series}
                type="bar"
            />            
            </div>
        </div>
    </div>
  )
}

export default Dashboard