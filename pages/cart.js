import Header from "@/components/header";
import styled from "styled-components";
import Link from "next/link";
import Center from "@/components/center";
import Button from "@/components/Button";
import { use, useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { cartProducts } from "@/components/CartContext";
import { useEffect, useState } from "react";
import { setCartProducts } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
`;
const ProductInfoCell = styled.td`
    padding: 10px 0;
    
`;
const ProductImageBox = styled.div`
    max-width: 100px;
    max-height: 100px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 80px;
        max-height: 80px;
    }
`;

const QuantityLabel = styled.span`
    padding: 0 3px;
`;
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
    `;
export default function CartPage() {
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext); 
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('./api/cart', {ids:cartProducts})
                .then(response => {
                    setProducts(response.data);
                });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    function moreOfThisProduct(id) {
       addProduct(id);
    }
    function lessOfThisProduct(id) {
      removeProduct(id);
    }
    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name,email,city,postalCode,streetAddress,country,
            cartProducts,
        })
        if (response.data.url) {
            window.location = response.data.url;
        }
    }
     let total = 0;
     for (const product_id of cartProducts) {
       const price = products.find(p => p._id === product_id)?.price || 0;
       total += price;
     }

     if (window.location.search.includes('success=true')) {
        return (
            <>
                <Header />
                <Center>
                    <ColumnsWrapper> 
                    <Box>
                    <h1>Thank you for your order!</h1>
                    <p>We will send you an email when your order is shipped.</p>
                    </Box>
                    </ColumnsWrapper>
                </Center>
            </>
        );
        return (
            <>
                <Header />
                <Center>
                    <h1>Thank you for your order!</h1>
                    <p>We will send you an email when your order is shipped.</p>
                </Center>
            </>
        );
     }
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
            <h2>Cart</h2>
              {!cartProducts?.length && (
              <div>Your cart is empty</div>
              )}
              {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                        <tr>
                          <ProductInfoCell>
                            <ProductImageBox>
                             <img src={product.images[0]} alt=""/>
                            </ProductImageBox>
                            {product.title}
                          </ProductInfoCell>
                          <td>
                            <Button 
                            black
                            onClick={() => lessOfThisProduct(product._id)}>-

                            </Button>
                            <QuantityLabel>
                                {cartProducts.filter((id) => id === product._id).length}
                            </QuantityLabel>
                            <Button 
                            black 
                            onClick={() => moreOfThisProduct(product._id)}>+
                            </Button>
                          </td> 
                          <td>
                            €{cartProducts.filter((id) => id === product._id).length * product.price}
                            </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td>€{total}</td>
                      </tr>
                </tbody>
              </Table>
              )}
            </Box>
            {!!cartProducts?.length && (
              <Box>
                <h2>Order information</h2>
               
                <Input type="text" 
                    name="name"
                    placeholder="Name" 
                    value={name} 
                    onChange={ev => setName(ev.target.value)} />
                <Input 
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}  />
                    <Input 
                    type="text" 
                    name="streetAddress"
                    placeholder="Street Adress" 
                    value={streetAddress} 
                    onChange={ev => setStreetAddress(ev.target.value)} /> 

                <CityHolder>
                    <Input type="text" 
                    name="city"
                    placeholder="City" 
                    value={city} 
                    onChange={ev => setCity(ev.target.value)}  />
                    <Input 
                    type="text" 
                    name="postalCode"
                    placeholder="Postal Code" 
                    value={postalCode} 
                    onChange={ev => setPostalCode(ev.target.value)}  />
                </CityHolder>
                
                <Input 
                    type="text" 
                    name="country"
                    placeholder="Country" 
                    value={country} 
                    onChange={ev => setCountry(ev.target.value)} />
               
                <Button 
                block 
                black 
                onClick={goToPayment}>
                  Continue to payment
                </Button>
              
              </Box>
            )}
          </ColumnsWrapper>
        </Center>
      </>
    );
}