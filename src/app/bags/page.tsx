"use client";
import { useEffect, useState } from 'react';
import { fetchBags } from '../../services/apiService';
import ProductCard from '../../components/ProductCard/ProductCard';
import useStore from '@/store/useStore';
import style from './bags.module.css'; 

type Bag = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const BagsPage = () => {
  const { count } = useStore();

  const [bags, setBags] = useState<Bag[]>([]);

  useEffect(() => {
    const loadBags = async () => {
      const items = await fetchBags();
      setBags(items);
    };
    loadBags();
  }, []);

  return (
    <div className={style.bagsPage}>
      <h1>Count: {count}</h1>
      <div className={style.grid}>
        {bags.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BagsPage;
