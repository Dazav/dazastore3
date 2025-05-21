import styled from 'styled-components';
import Center from './center';      
import PrimaryBtn from './Button';
import Button from './Button';

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
  
`;
const Title = styled.h1`
    margin: 0;
    font-size: 3rem;
    font-weight: normal;
`;

const Desc = styled.p`
    font-size: 0.8rem;
    color: #aaa;
`;
const ColumnsWrapper = styled.div` 
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    GAP: 50px;
    img {
        width: 100%;
        height: 300px;
        margin-right: 50px;
        border-radius: 10px;
    }
`;
const Column = styled.div`
    display: flex;
    alighn-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 25px;
    gap: 5px
`;


export default function Featured({product}) {
    return (
        <Bg>
            <Center> 
            <ColumnsWrapper>
                <Column>
                <div>
                <Title>{product.title}</Title>
                 <Desc>{product.description}
                </Desc>
                <ButtonsWrapper>
                 <Button outline primary >Read more</Button>
                 <Button white >Add to cart</Button>
                 </ButtonsWrapper>
                </div>
               
                </Column>
                <Column>
                    <img src="https://dazastore.s3.amazonaws.com/1746610936486.png" alt=""/>
                </Column>
            </ColumnsWrapper>
          
            </Center>
        </Bg>
    );
}