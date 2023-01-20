import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { CheckOutStpesContainer } from './Cart.element';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import { AccountBalance, LibraryAddCheck } from '@mui/icons-material';

function CheckOutStpes({activeStep}) {
  const steps = [
    {
      label:<Typography>Shipping Details</Typography>,
      icon: <LocalShippingTwoToneIcon/>
    },
    {
      label:<Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheck/>
    },
    {
      label:<Typography>Payment </Typography>,
      icon: <AccountBalance/>
    },
  ]
const stepStyles = {
  boxSizing:"border-box",

}

  return <Fragment>
    <CheckOutStpesContainer>
        <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
          {
            steps.map((item,i)=>(
              <Step key={i} active={activeStep === i ? true:false}
                completed={activeStep>= i ? true:false}
              >
                <StepLabel
                style={{
                  color: activeStep >= i ? "green":"rgba(0,0,0,.6"
                }}
                 icon={item.icon}>
                  {item.label}
                </StepLabel>
              </Step>
            ))
          }
        </Stepper>
    </CheckOutStpesContainer>
  </Fragment>
}

export default CheckOutStpes;