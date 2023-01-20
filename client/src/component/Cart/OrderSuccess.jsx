import React, { Fragment } from 'react';
import {CheckCircle} from "@mui/icons-material"
import { MetaData } from '../layout/MetaData';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SuccessContainer } from './Cart.element';

function OrderSuccess() {
  return <Fragment>
    <MetaData title="Payment Success"/>
    <SuccessContainer>
      <CheckCircle/>
      <Typography>Your Order Hass ben Placed successfully</Typography>
      <Link to="/orders/me">View Orders</Link>
    </SuccessContainer>
  </Fragment>;
}

export default OrderSuccess;