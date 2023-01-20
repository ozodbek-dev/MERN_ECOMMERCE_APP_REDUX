import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../../redux/actions/cartAction'
import { MetaData } from '../layout/MetaData'
import {
  PinDrop,
  Public,
  LocationCity,
  Home,
  Phone,
  TransferWithinAStation,
} from '@mui/icons-material'
import { Country, State } from 'country-state-city'
import { ShippingInfoContainer } from './Cart.element'
import { useAlert } from 'react-alert'
import CheckOutStpes from './CheckOutSteps'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch()
  const alert = useAlert()
  // const location = useLocation()
  const navigate = useNavigate()
  const { shippingInfo } = useSelector((state) => state.cart)

  const { address, country, pinCode, phoneNo, city, state } = shippingInfo

  const [data, setData] = useState({
    address,
    country,
    pinCode,
    phoneNo,
    city,
    state,
  })

  console.log(data)
  const shippingSubmit = (e) => {
    e.preventDefault()
    if (data.phoneNo.length < 10 || data.phoneNo.length > 10) {
      alert.error('Phone Number Should be 10 digit')
      return
    }
    dispatch(saveShippingInfo(data))
    navigate("/order/confirm")
  }

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      <MetaData title="Shipping Info" />
      <CheckOutStpes activeStep={0} />
      <ShippingInfoContainer>
        <div className="box">
          <h2 className="heading">Shipping Details</h2>

          <form
            className="form"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Address"
                required
                name="address"
                value={data.address}
                onChange={dataHandler}
              />
              <Home />
            </div>

            <div>
              <input
                type="text"
                placeholder="City"
                required
                name="city"
                value={data.city}
                onChange={dataHandler}
              />
              <LocationCity />
            </div>

            <div>
              <input
                type="number"
                placeholder="Pin Code"
                required
                name="pinCode"
                value={data.pinCode}
                onChange={dataHandler}
              />
              <PinDrop />
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone Number"
                required
                name="phoneNo"
                value={data.phoneNo}
                onChange={dataHandler}
              />
              <Phone />
            </div>

            <div>
              <select
                required
                name="country"
                value={data.country}
                onChange={dataHandler}
              >
                <option value="">Country</option>

                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>

              <Public />
            </div>
            {data.country && (
              <div>
                <select
                  required
                  value={data.state}
                  name="state"
                  onChange={dataHandler}
                >
                  <option value="">Select State</option>
                  {State &&
                    State.getStatesOfCountry(data.country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
                <TransferWithinAStation />
              </div>
            )}

            <input
              type="submit"
              value="Continue"
              className="shippnigBtn"
              disabled={data.state ? false : true}
            />
          </form>
        </div>
      </ShippingInfoContainer>
    </Fragment>
  )
}

export default Cart
