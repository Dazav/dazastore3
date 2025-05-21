import {mongooseConnect} from "../lib/mongoose";
import mongoose, { model, models, Schema } from 'mongoose';
import { Product } from '@/models/product';
import Featured from '../components/featured';
import Header from '../components/header';
import NewProducts from '../components/NewProducts';

export default function Home({product, newProducts}) {
  console.log(newProducts);
  return (
    <div>
      <Header/>
      <Featured product ={product} />
      <NewProducts products ={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '681b2b0380583927e074cb33'; 
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit: 6});
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  };
}