import { Lock, Key, LockReset } from '@mui/icons-material'
import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, updatePassword } from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'
import { UpdateProfileContainer } from './UpdateProfile.element'
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/userConstants'
import { MetaData } from '../layout/MetaData'

function UpadatePassword() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const { isUpdated, error, loading } = useSelector((state) => state.profile)

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const updateSubmit = (e) => {
    e.preventDefault()
    dispatch(updatePassword(passwords))
  }
  const updateDataChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (isUpdated) {
      alert.success('Password Update SuccessFully')
      navigate('/account')
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      })
    }
  }, [error, alert, isUpdated, dispatch, navigate])

  return (
    <Fragment>
      <MetaData title={"Update Password"}/>
      {loading ? (
        <Loader />
      ) : (
        <UpdateProfileContainer>
          <div className="box">
            <h1>Update Password</h1>

            <div>
              <form
                onSubmit={updateSubmit}
                className="signUpForm"
                encType="multipart/form-data"
              >
                <div className="loginEmail">
                  <input
                    type="password"
                    placeholder="Current password"
                    required
                    name="oldPassword"
                    value={passwords.oldPassword}
                    onChange={updateDataChange}
                  />
                  <Key />
                </div>
                <div className="loginEmail">
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    name={'newPassword'}
                    value={passwords.newPassword}
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
                  value="Change Password"
                  className="signUpBtn"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </UpdateProfileContainer>
      )}
    </Fragment>
  )
}

export default UpadatePassword
