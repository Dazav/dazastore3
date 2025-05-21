import styled from "styled-components";
import Center from "./center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1FR 1FR 1FR 1fr;
    gap: 30px;
    padding : 20px
 
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: normal;
`;

export default function NewProducts({products}) {
    return (
        <Center>
            <Title>New arrivals</Title> 
        <ProductsGrid>
            {products?.length > 0 && products.map(product => (
            <ProductBox {...product} />
            ))}
        </ProductsGrid>
        </Center>
    );
}