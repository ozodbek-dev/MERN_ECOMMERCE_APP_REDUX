import styled from 'styled-components'
import { MyOrdersContainer } from '../../Order/MyOrders.element'
import { DashboardContainer } from '../Dashboard.element'

export const ProductsListContainer = styled(DashboardContainer)`
.container{
  padding: 1rem 0!important;
}
@media screen and (max-width:1000px){
  grid-template-columns: auto ;
}
`

export const ProductListContainer = styled(MyOrdersContainer)`
position: static;
width: 100%!important;
padding:0 1vmax!important;
.productListTable{
width: 100%!important;
    
}
.MuiDataGrid-columnHeader {
    background-color: tomato;
    div {
      color: white;
      font: 500 1.1vmax "Roboto"!important;
    }
  }
  .MuiDataGrid-iconSeparator {
    display: none !important;
  }
` 



export const CreateProductContainer = styled(DashboardContainer)`
.container{
  background-color:rgb(220,220,220) ;
  .createProductForm{
  display: flex;
  background-color:white ;
  border-radius: 10px ;
  box-shadow: 0 0 5px rgba(0,0,0,0.278) ;
  width:30vmax ;
  margin:auto ;
  height: 70%;
  min-width: 300px ;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vmax;
  transition: all .2s ease;
   &>div{
    width: 100%;
    position: relative;
    input,select, textarea{
      padding: 1vmax 4vmax;
      padding-right: 1vmax;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0,0.278);
      border-radius: 4px;
      font:300 0.9vmax cursive;
      outline:none;
      text-transform:capitalize ;
      &:focus + svg{
      color:tomato;
      transform: scale(1.1);
    }
    }

 
    svg{
      position: absolute;
      top:.5vmax;
      left:1vmax;
      font-size: 1.6vmax;
      color:rgba(0,0,0,0.678);
      transform: all .1s ease;
    }
   
   }
}
}
#createProdFormFile{
  input{
    display: flex;
    padding: 0;
    cursor:pointer ;
    &::file-selector-button{
      cursor:pointer;
      width: 100%;
      height: 100%;
      height: 5vh;
      margin: 0;
      border: none;
      outline: none;
      font: 400 .8vmax cursive;
      transition: all .5s;
      padding: 0 1vmax;
      background-color: white;
      color: rgba(0,0,0,.6);

    }
    &::file-selector-button:hover{
     background-color:rgba(0,0,0,0.278);

    }
  }

}
#createProdBtn{
  background-color:tomato ;
  color:white;
  width:100% ;
  font: 600 1rem "Roboto" ;
  padding:1rem  ;
}
#createProdFormImg{
  display:flex ;
  width:100% ;
  align-items:center ;
  justify-content: flex-start ;
  overflow: auto;
  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius:4px ;
    box-sizing:border-box ;
    padding:5px ;
  }
}

@media screen and (max-width:1000px){
  grid-template-columns: auto ;
  .container{
    .createProductForm{
    width:70vw ;
    height:100vh ;
    div{
      input,textarea,select{
      font: 300 2vmax "Roboto";
      padding:1vmax 5vmax ;
      padding-right:1vmax ;
      
    }
    svg{
       font-size: 3vmax;
      }
    }
  }

  }

}
`