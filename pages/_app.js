import { createGlobalStyle } from "styled-components";
import {CartContextProvider}  from "../components/CartContext";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  body { 
    background-color:rgba(216, 207, 207, 0.67);
    padding: 0; 
    margin : 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
    <GlobalStyles/>
    <SessionProvider session={session}>
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
    </SessionProvider>
    </>
  );
}
