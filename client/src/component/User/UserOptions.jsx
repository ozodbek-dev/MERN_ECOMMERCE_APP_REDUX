import {
  Dashboard,
  ExitToApp,
  ListAlt,
  Person,
  ShoppingCart,
} from '@mui/icons-material'
import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'
import { UserOptionsContainer } from './LoginSignUp.element'

const UserOptions = ({ user }) => {
  const navigate = useNavigate()
  const alert = useAlert()
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)
  const { cartItems } = useSelector((state) => state.cart)

  const actions = [
    { icon: <ListAlt />, name: 'Orders', func: orders },
    { icon: <Person />, name: 'Account', func: account },
    { icon: <ExitToApp />, name: 'Logout', func: logOut },
    {
      icon: <ShoppingCart />,
      name: `Cart(${cartItems.length})`,
      func: cartFunc,
    },
  ]

  if (user.role === 'admin') {
    actions.unshift({ icon: <Dashboard />, name: 'Dashboard', func: dashboard })
  }

  function orders() {
    navigate('/orders')
  }

  function account() {
    navigate('/account')
  }

  function logOut() {
  
    dispatch(logout())

    setTimeout(() => {
     return  navigate("/")
    }, 2000);
  
  }
  function cartFunc() {
    navigate('/cart')
  }

  function dashboard() {
    navigate('/dashboard')
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <UserOptionsContainer>
          <Backdrop open={open} />
          <SpeedDial
            direction="down"
            ariaLabel="SpeedDial tooltip example"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            className="speedDial"
            icon={
              <img
                className="speedDialIcon"
                src={user.avatar.url}
                alt={`${user.name}-avatar-profile`}
              />
            }
          >
            {actions.reverse().map((action) => (
              <SpeedDialAction
                icon={action.icon}
                tooltipTitle={action.name}
                key={action.name}
                tooltipOpen
                onClick={action.func}
              />
            ))}
          </SpeedDial>
        </UserOptionsContainer>
      )}
    </Fragment>
  )
}

export default UserOptions
