import React from 'react';
import Category from '../../components/category/Category'
import Games from '../../components/games/Games';
import Iphone from '../../components/iphone/Iphone';
import Map from '../../components/map/Map';
import Products from '../../components/products/Products';
import Summer from '../../components/summer/Summer';
import Card from '../../components/card/Card';

const Banner = () => {
  return (
    <div>
      <Iphone />
      <Games />
      <Category/>
      <Card />
      <Products />
      <Map />
      <Summer />
    </div>
  );
};

export default Banner;
