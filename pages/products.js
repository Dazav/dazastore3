import Center from "@/components/center";
import Header from "@/components/header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";


export default function ProductsPage({products}){
    return(
        <>
        <Header/>
        <Center>
        <Title>All products</Title>
       <ProductsGrid products={products}/>
        </Center>
        </>
    )
}

export async function getServerSideProps(){
    await mongooseConnect();
    const products = await Product.find({}, null, {sort: {'_id':-1}})
    return {
        props:{
            products: JSON.parse(JSON.stringify(products)),
        }
    };
}