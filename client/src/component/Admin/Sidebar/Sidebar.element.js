import styled from 'styled-components'


export const  SidebarContainer = styled.div`
background-color: white;
 display: flex;
 flex-direction: column;
 padding: 4rem 0;
 a{
  text-decoration: none;
  color: rgba(0,0,0,.5);
  transition: all .3s;
  padding: 2rem;
  &:hover{
    color: tomato;
    transform: scale(1.1);
  }
  &>p{
    display: flex;
    align-items: center;
    &>svg{
      margin-right: .5rem;
    }
  }
 }
&>a{
  &:first-child{
    padding: 0;
  }
  &>img{
    width: 40%;
    &:hover{
      filter: drop-shadow(0 0 10px tomato);
    }
  }
}
.MuiTypography-root{
  background-color: white!important;
}

`