import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const HeaderContainer = styled.div`
position: relative;
z-index: 10001;
.navMenu{
  position: fixed;
  top: 2vmax;
  left: 3vmax;
  z-index: 10000000 ;
  button{
    background-color: rgb(200,200,200);
  }

  .navbtnicon{
    display: grid;
    place-content: center;
    svg{
      color:black
    }
  }
}
`

export const CartBtn= styled(Link)`
  width: 50px;
  height: 50px;
  background-color: rgb(200,200,200);
  display: grid;
  place-content: center;
  position: fixed;
  top: 2vmax;
  right:200px;
  box-shadow: 0 0 5px solid gray;
  border-radius: 50%;
  color:black;
  span{
    position: absolute;
    padding: 3px;
    top: 5px;
    right:7px;
    font-size: 10px;
    color:black;
    background-color: yellow;
    border-radius: 4px;
  }
  svg{
    transition: all .3s ease-in-out;
  }
  &:hover{
    background-color: rgb(190,190,190);
    svg{
      transform: scale(1.1);
      color: tomato;
    }
  }

`