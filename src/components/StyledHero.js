import styled from 'styled-components';
import defaultImge from '../images/room-1.jpeg';

const StyledHero = styled.header`
    min-height: 60vh;
  background: url(${props => props.img ? props.img : defaultImge }) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

`

export default StyledHero;