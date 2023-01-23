import { Face, MailOutline, ManageAccounts } from '@mui/icons-material'
import { Fragment, useRef, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import profile from '../../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {
  clearErrors,
  getUserDetailsAdmin,
  updateUserAdmin,
} from '../../../redux/actions/userAction'
import Loader from '../../layout/loader/Loader'
import { UpdateProfileContainer } from '../../User/UpdateProfile.element'
import { UPDATE_USER_RESET } from '../../../redux/constants/userConstants'
const UpdateUser = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()
  const params = useParams()

  const { loading, error, user } = useSelector(
    (state) => state.userDetailsAdmin,
  )
  const { isUpdated, error: updateError } = useSelector(
    (state) => state.profile,
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')


  const updateSubmit = (e) => {
    e.preventDefault()
   const myForm = {
    role,name,email
   }
    dispatch(updateUserAdmin(params.id,myForm))
  }


  useEffect(() => {
    if (user && user._id !== params.id || !user) {
      dispatch(getUserDetailsAdmin(params.id))
    } else {
      setEmail(user.email)
      setName(user.name)
      setRole(user.role)
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (updateError) {
      alert.error(updateError)
      dispatch(clearErrors())
    }
    if (isUpdated) {
      alert.success('User Updated Successfully')
      dispatch({ type: UPDATE_USER_RESET })
      navigate('/admin/users')
    }
  }, [
    error,
    alert,
    isUpdated,
    dispatch,
    navigate,
    updateError,
    user,
    params.id,
  ])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <UpdateProfileContainer>
          <div className="box">
            <h1>Update Profile</h1>

            <div>
              <form
                onSubmit={updateSubmit}
                className="signUpForm"
                encType="multipart/form-data"
              >
                <div className="loginEmail">
                  <input
                    type="tex"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Face />
                </div>
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MailOutline />
                </div>
                <div className="loginEmail">
                  <select onChange={(e) => setRole(e.target.value)}>
                    <option>Change Role</option>
                    {user && user.role === 'user' ? (
                      <option value="admin">Admin</option>
                    ) : (
                      <option value="user">User</option>
                    )}
                  </select>
                  <ManageAccounts />
                </div>

                <input
                  type="submit"
                  value="Update"
                  className="signUpBtn"
                />
              </form>
            </div>
          </div>
        </UpdateProfileContainer>
      )}
    </Fragment>
  )
}

export default UpdateUser
