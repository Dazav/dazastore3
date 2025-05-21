import Link from 'next/link';
import styled from 'styled-components';
import Center from './center';

const StyledHeader = styled.header`
background-color: #222;

`;
const Logo = styled(Link)`
  color: #fff;
  TEXT-DECORATION: NONE;
`;
const Wrapper = styled.div`
  display: flex;    
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;
const NavLink = styled(Link)`  
    color: #aaa;
    margin-top: 20px
    text-decoration: none;
`;
export default function Header() {
  return (
    <StyledHeader>
        <Center>
        <Wrapper>
        <Logo href='/'>DazaStore</Logo>
        <StyledNav>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/products'>Products</NavLink>
                <NavLink href='/categories'>Categories</NavLink>
                <NavLink href='/account'>Account</NavLink>
                <NavLink href='/cart'>Cart</NavLink>
        </StyledNav>
        </Wrapper>
        </Center>
    </StyledHeader>
  );
}