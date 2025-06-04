import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const productWrapper = styled.div`
    
`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 40px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 120px;
    }
`;
const Title = styled(Link)`
    font-size: .9rem;
    font-weight: normal;
    color: inherit;
    text-decoration: none;
    margin: 0;
`;
const ProductInfoBox = styled.div`
    
`;

const PriceRow = styled.div`
    display: flex;
    ALIGN-ITEMS: CENTER;
    justify-content: space-between;
    MARGIN-TOP: 2px;
`;
const Price = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export default function ProductBox({_id,title,description,price,images}) {
    const url = '/product/'+_id;
    const {addProduct} = useContext(CartContext);
    return (
        <productWrapper>
       <WhiteBox href={url}>
        <div>
        <img src={images?.[0]} alt=""/>
        </div>
       </WhiteBox>
    <ProductInfoBox>
       <Title href={url}>{title}</Title>
         <PriceRow>
            <Price>
            ${price}
            </Price>  
            <Button white onClick={() => addProduct(_id)}>Add to cart</Button>
       </PriceRow>
     </ProductInfoBox>
    </productWrapper>
    );
}