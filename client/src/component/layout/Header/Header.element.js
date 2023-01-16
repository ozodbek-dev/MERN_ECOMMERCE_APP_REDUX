import styled from 'styled-components';


export const HeaderContainer = styled.div`
position: fixed;
left: 0;
top: 0;
z-index:100000;
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