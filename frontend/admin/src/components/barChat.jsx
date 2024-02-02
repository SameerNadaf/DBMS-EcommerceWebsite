import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1000, 500, 300],
  ["2019", 1100, 560, 330],
  ["2020", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "sales products profit",
  },
  colors: ["rgb(53, 138, 158)","rgb(37, 11, 165)","#188310"],
};

function BarChat() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChat;
