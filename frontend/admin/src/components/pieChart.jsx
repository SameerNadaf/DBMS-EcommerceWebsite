import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Category", "Items"],
  ["Men", 11],
  ["Women", 6],
  ["Kids", 3],
];

export const options = {
  title: "Available Products Overview",
  pieHole: 0.4,
  is3D: false,
  titleTextStyle: {
    fontSize: 18,
    bold: true,
  },
  colors: ["rgb(53, 138, 158)","rgb(37, 11, 165)","#188310"],
};

function PieChart() {

  return (
    <Chart
      chartType="PieChart"
      width="110%"
      height="550px"
      data={data}
      options={options}
    />
  );
}

export default PieChart;