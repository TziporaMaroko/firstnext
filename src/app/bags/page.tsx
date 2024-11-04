"use client";
import { useEffect, useState } from 'react';
import { fetchBags } from '../../services/apiService';
import ProductCard from '../../components/ProductCard/ProductCard'; 
import style from './bags.module.css'; 

type Bag = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const BagsPage = () => {
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
      <div className={style.grid}>
        {bags.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BagsPage;
