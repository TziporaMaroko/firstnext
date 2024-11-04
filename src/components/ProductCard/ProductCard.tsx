import React from 'react';
import style from './ProductCard.module.css';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className={style.ProductCard}>
      <img src={imageUrl} alt={name} className={style.productImage} />
      <div className={style.productInfo}>
        <h3 className={style.productName}>{name}</h3>
        <p className={style.productPrice}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;