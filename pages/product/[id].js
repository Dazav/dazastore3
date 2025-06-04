import Center from "@/components/center";
import Header from "@/components/header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import Button from "@/components/Button";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ColWrapper = styled.div`
    display : grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    margin-top: 20px;
`;


export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext)
    return (
        <>
        <Header/>
        <Center>
            <ColWrapper>    
            <WhiteBox>
                <ProductImages images={product.images}/>
            </WhiteBox>
            <div>
                <Title>{product.title} </Title>
                <p>{product.description}</p>
                <div>
                    ${product.price}
                    <Button secondary onClick={() => addProduct(product._id)}>Add to cart</Button>
                </div>
               
            </div>
            </ColWrapper>
         
        </Center>
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}