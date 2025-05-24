import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { getStockPriceHistory } from './api';

function StockChart({ stock }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getStockPriceHistory(stock.symbol).then((data) => setChartData(data));
  }, [stock]);

  return (
    <LineChart width={500} height={300} data={chartData}>
      <XAxis dataKey="timestamp" />
      <YAxis dataKey="price" />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}

export default StockChart;
