import React, { useEffect, useState } from 'react';
import { getCorrelation, Stock } from './api';

function CorrelationHeatmap({ stock }: { stock: Stock }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getCorrelation(stock.symbol).then(setData);
  }, [stock]);

  return (
    <div>
      <h2>Correlation Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CorrelationHeatmap;
