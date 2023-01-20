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