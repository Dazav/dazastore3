import Button from "@/components/Button";
import Center from "@/components/center";
import Header from "@/components/header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import {signIn, signOut, useSession} from "next-auth/react"
import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "@/components/Input";
import axios from "axios";


const ColsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr .8fr;
    gap: 20px ;
    margin: 40px 0;
`;
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
    `;

export default function AccountPage(){
    const {data:session} = useSession();
    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    async function logout(){
        await signOut({
            callbackUrl: process.env.NEXT_PUBLIC_URL,
        });
    }
    async function login(){
        await signIn('google',{
            callbackUrl: process.env.NEXT_PUBLIC_URL,
        });
    }
    function saveAdress(){
        const data = {name,email,city,streetAddress,postalCode,country}
        axios.put('/api/adress', data)
    }
    useEffect(() => {
        axios.get('/api/address')
    }, []);
    return (
    <>
        <Header/>
        <Center>
            <ColsWrapper>
            <div>
                <WhiteBox>
                <h2>Wishlist</h2>
                </WhiteBox>
             </div>
            <div>
                <WhiteBox>    
                <h2>Account details</h2>
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
                                onClick={saveAdress}>
                                  Save
                                </Button>   
                                <hr/> 
            {session &&(
              <Button onClick={logout}>Logout</Button>
          )}
            {!session &&(
            <Button onClick={login}>LogIn</Button>
          )}
                </WhiteBox>
             </div>
            </ColsWrapper>
            
        </Center>
    </>
);
}