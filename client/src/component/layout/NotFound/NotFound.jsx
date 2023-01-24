import { Button } from '@mui/material'
import { Fragment } from 'react'
import styled from 'styled-components'
import notFound  from '../../../images/notFound.png'
import { Link } from 'react-router-dom'
import { MetaData } from '../MetaData'
const NotFoundContainer = styled.div`
position:absolute ;
top:0;
right:0;
width:100vw;
height:100vh ;
background-color:white;
display:grid ;
place-content:center ;
place-items:center ;
padding: 4vmax;
box-sizing:border-box ;
img{
  max-width:90% ;
  max-height: auto;
}
`

const LinkBtn = styled(Button)`
max-width:300px!important;
width:30vmax ;
font: 600 1rem "Roboto"!important ;
background-color:tomato!important ;
padding:1rem 2rem!important ;
`
const NotFound = () => {
  return (
    <Fragment>
      <MetaData title="404 Page Not Found"/>
      <NotFoundContainer>
        <img src={notFound} alt="not Found" />
        <LinkBtn
          type="button"
          variant="contained"
          LinkComponent={Link}
          to="/"
        >Home</LinkBtn>
      </NotFoundContainer>
    </Fragment>
  )
}

export default NotFound
