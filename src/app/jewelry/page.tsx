"use client";
import { useEffect, useState } from 'react';
import { fetchJewelry } from '../../services/apiService';
import ProductCard from '../../components/ProductCard/ProductCard';
import style from './jewelry.module.css';

type JewelryItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const JewelryPage = () => {
    const [jewelryItems, setJewelryItems] = useState<JewelryItem[]>([]);
  
    useEffect(() => {
      const loadJewelryItems = async () => {
        const items = await fetchJewelry();
        setJewelryItems(items);
      };
      loadJewelryItems();
    }, []);
  
    return (
      <div className={style.jewelryPage}>
        <div className={style.grid}>
          {jewelryItems.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  };
  
  export default JewelryPage;
