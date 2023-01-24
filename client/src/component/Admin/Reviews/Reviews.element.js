import styled from 'styled-components'
import { UpdateProfileContainer } from '../../User/UpdateProfile.element'
import { ProductListContainer, ProductsListContainer } from '../Product/ProducstsList.element'

export const ReviewsFormContainer = styled(UpdateProfileContainer)`
height:auto ;
position:static ;
margin-bottom:1rem ;
background-color:white ;
width:100%!important ;
box-sizing:border-box ;
overflow-x: auto;
  .box{
    border:1px solid red ;
    height:auto ;
    div{
      
      form{
        input[type="submit"]{
          margin: 10px;
        }
      
      }
    }
}
`

export const ReviewListContainer = styled(ProductListContainer)`

`

export const ReviewsListContainer = styled(ProductsListContainer)`
.container{
  width:100%!important ;
}
`