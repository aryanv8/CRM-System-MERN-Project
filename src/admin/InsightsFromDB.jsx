import React, { useState, useEffect } from "react";
import "../styles/Insights.css";
import Chart from "react-apexcharts";
import Axios from "axios";

import { ADMIN_SERVER } from "../constants";

function Insights() {
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    console.log("useEffect data: ", data);
    if (data === null) {
      Axios.get(`${ADMIN_SERVER}/insights`)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data.insights[0]);
            console.log(res.data.insights[0]);
          } else {
            Promise.reject();
          }
        })
        .catch((err) => alert(err));
    } else {
      console.log("Data is already present,", data);
    }
  }, [data]);

  const handleUpdateInsights = () => {
    Axios.patch(`${ADMIN_SERVER}/update-insights`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };


  // Check if data is still loading
  if (data === null) {
    return <div>Loading...</div>;
  }

  const usage = {
    series: [69],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: { offsetY: -10, show: true, color: "#888", fontSize: "17px" },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: { lineCap: "round" },
      labels: ["Percent"],
    },
  };

  const performance = {
    series: [74],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    },
  };

  return (
    <div className="container-fluid insights">
      <h1 className="mt-3 display-5 text-white mb-4">Insights</h1>
      <div className="text-end mb-5">
        <div className="btn btn-outline-warning" onClick={handleUpdateInsights}>Update Insights</div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 gender mx-auto">
          <h4 className="pt-2 pl-5">Gender</h4>
          {data && (
            <Chart
              options={{
                chart: {
                  height: 390,
                  type: "radialBar",
                },
                plotOptions: {
                  radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                      margin: 5,
                      size: "30%",
                      background: "transparent",
                      image: undefined,
                    },
                    dataLabels: {
                      name: { show: true },
                      value: { show: true },
                    },
                  },
                },
                colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
                labels: ["Male", "Female", "Others"],
                legend: {
                  show: true,
                  floating: true,
                  fontSize: "16px",
                  position: "left",
                  offsetX: 70,
                  offsetY: 15,
                  labels: { useSeriesColors: true },
                  markers: { size: 0 },
                  formatter: function (seriesName, opts) {
                    return (
                      seriesName +
                      ":  " +
                      opts.w.globals.series[opts.seriesIndex]
                    );
                  },
                  itemMargin: { vertical: 3 },
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      legend: { show: false },
                    },
                  },
                ],
              }}
              series={[data.maleCount, data.femaleCount, data.otherCount]}
              type="radialBar"
            />
          )}
        </div>

        <div className="col-sm-12 col-md-4 region mx-auto">
          <h4 className="pt-2 pl-5">Region</h4>
          {data && (
            <Chart
              options={{
                chart: {
                  width: 100,
                  type: "pie",
                },
                labels: data.countryCounts.map((country) => country._id),
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
              }}
              series={data.countryCounts.map((country) => country.count)}
              type="pie"
            />
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4 company mx-auto">
          <h4 className="pt-2 pl-5">Customer's Company</h4>
          <Chart
            options={{
              chart: {
                width: 380,
                type: "donut",
              },
              labels: data
                ? data.companyCounts.map((company) => company._id)
                : [],

              colors: [
                "#FF5733",
                "#FFDD33",
                "#33FF36",
                "#F033FF",
                "#339CFF",
                "#3F33FF",
                "#17C11A",
              ],
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270,
                },
              },
              dataLabels: {
                enabled: true,
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200,
                    },
                    legend: {
                      position: "bottom",
                    },
                  },
                },
              ],
            }}
            series={
              data ? data.companyCounts.map((company) => company.count) : []
            }
            type="donut"
          />
        </div>

        <div className="col-sm-12 col-md-3 company mx-auto">
          <h4 className="pt-2 pl-5">Performance</h4>
          <Chart
            options={performance.options}
            series={performance.series}
            type="radialBar"
          />
        </div>
        <div className="col-sm-12 col-md-3 company mx-auto">
          <h4 className="pt-2 pl-5">Usage</h4>
          <Chart
            options={usage.options}
            series={usage.series}
            type="radialBar"
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-md-5 graphs mx-auto">
          <h4 className="pt-2 pl-5">Age</h4>
          <Chart
            options={{
              chart: {
                type: "bar",
                height: 350,
                toolbar: { show: false },
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                },
              },

              xaxis: {
                categories: data ? data.ageCounts.map((age) => age._id) : [],
                axisBorder: { show: false },
                axisTicks: { show: false },
              },
              yaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
              },
            }}
            series={[
              { data: data ? data.ageCounts.map((age) => age.count) : [] },
            ]}
            type="bar"
          />
        </div>

        <div className="col-sm-12 col-md-5 graphs mx-auto">
          <h4 className="pt-2 pl-5">Job Title</h4>
          <Chart
            options={{
              colors: ["#7000FF"],
              chart: {
                width: "100%",
                toolbar: { show: false },
              },
              xaxis: {
                categories: data ? data.jobCounts.map((job) => job._id) : [],
              },
            }}
            series={[
              {
                name: "job title",
                data: data ? data.jobCounts.map((job) => job.count) : [],
              },
            ]}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
}

export default Insights;
