
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    background-color: #5542F6;
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    
     ${props => props.white && props.outline && css`
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    `}
     ${props => props.black && !props.outline && css`
        background-color: #000;
        color: #fff;
    `}
    
     ${props => props.black && props.outline && css`
        background-color: transparent;
        border: 1px solid #000;
        color: #000;
    `}
    ${props => props.primary && css`
        background-color:rgb(252, 252, 252);
        color:rgb(0, 0, 0);
    `}
    ${props => props.size === 'l' && css`
       font-size: 1.2rem;
       padding: 10px 20px;
       cursor: pointer;
    `}
    ${props => props.block && css`
        display: block;
        width: 100%;
    }`}
    
`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    );
}