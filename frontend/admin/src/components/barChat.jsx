import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';

function BarChart() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:8081/ordersPerDay');
      setData(resp.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [["date", "orders"], ...data.map((row) => [row.orderDay, row.orderCount])];

  const options = {
    chart: {
      title: "Orders Per Day",
      subtitle: "Total Number of Orders for Each Day",
    },
    legend: { position: 'none' },
    colors: "rgb(53, 138, 158)",
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}

export default BarChart;
