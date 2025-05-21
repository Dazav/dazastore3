import styled from 'styled-components';

const StyledDiv = styled.div`
    max-width: 100%;
    margin: 0 autopx;
    padding: 0 40px;
`;


export default function Center({ children }) {
    return (   
      <StyledDiv>{children}</StyledDiv>   
    );
}