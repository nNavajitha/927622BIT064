import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Replace this with your actual backend API
});

export interface Stock {
  symbol: string;
  name: string;
}

export interface PriceData {
  timestamp: string;
  price: number;
}

export const getStocks = async (): Promise<Stock[]> => {
  const response = await api.get('/stocks');
  return response.data;
};

export const getStockPriceHistory = async (symbol: string): Promise<PriceData[]> => {
  const response = await api.get(`/stocks/${symbol}/price-history`);
  return response.data;
};

export const getCorrelation = async (symbol: string): Promise<any[]> => {
  const response = await api.get(`/stocks/${symbol}/correlation`);
  return response.data;
};
