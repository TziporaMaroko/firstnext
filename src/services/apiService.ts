import axios from 'axios';

type JewelryItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type Bag = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const fetchJewelry = async (): Promise<JewelryItem[]> => {
  const response = await axios.get<JewelryItem[]>('/api/jewelry');
  return response.data;
};

export const fetchBags = async (): Promise<Bag[]> => {
  const response = await axios.get<Bag[]>('/api/bags');
  return response.data;
};
