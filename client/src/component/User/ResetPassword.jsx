import { Lock, LockReset } from '@mui/icons-material'
import { Fragment, useState, useEffect } from 'react'
import { Link, useAsyncError, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, resetPassword } from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'
import { UpdateProfileContainer } from './UpdateProfile.element'
import { MetaData } from '../layout/MetaData'
import React from 'react'

const ResetPassword = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const params = useParams()
  const navigate = useNavigate()

  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  })

  const { error, loading, success } = useSelector(
    (state) => state.forgotPassword,
  )

  const resetSubmit = (e) => {
    const token = params.token
    e.preventDefault()
    dispatch(resetPassword(token, passwords))
  }

  const updateDataChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success('Password Updated successfully')
      navigate('/login')
    }
  }, [error, alert, dispatch, success])
  return (
    <Fragment>
      <MetaData title={'Reset Password'} />
      {loading ? (
        <Loader />
      ) : (
        <UpdateProfileContainer>
          <div className="box" style={{ height: '400px' }}>
            <h1>Forgot Password</h1>

            <div>
              <form
                onSubmit={resetSubmit}
                className="signUpForm"
                encType="multipart/form-data"
              >
                <div className="loginEmail">
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    name={'password'}
                    value={passwords.password}
                    onChange={updateDataChange}
                  />
                  <Lock />
                </div>
                <div className="loginEmail">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={updateDataChange}
                  />
                  <LockReset />
                </div>

                <input
                  type="submit"
                  value="Update"
                  className="signUpBtn"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </UpdateProfileContainer>
      )}
    </Fragment>)
}

export default ResetPassword

