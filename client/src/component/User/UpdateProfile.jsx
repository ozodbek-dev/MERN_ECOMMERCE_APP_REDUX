import { Face, LockOpen, MailOutline } from '@mui/icons-material'
import { Fragment, useRef, useState, useEffect } from 'react'
import { LoginSignUpContainer } from './LoginSignUp.element'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {
  clearErrors,
  loadUser,
  updateProfile,
} from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'
import { UpdateProfileContainer } from './UpdateProfile.element'
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants'

const UpdateProfile = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.user)
  const { isUpdated, error, loading } = useSelector((state) => state.profile)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [avatar, setAvatar] = useState('')
  const [avatarPreview, setAvatarPreview] = useState(profile)


  const updateSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('email',email)
    myForm.set('avatar', avatar)
    dispatch(updateProfile(myForm))
  }
  const updateDataChange = (e) => {

      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result)
          setAvatarPreview(reader.result)
        }
      }

      reader.readAsDataURL(e.target.files[0])
  }

  useEffect(() => {
    if (user) {
      setEmail(user.email)
      setName(user.name)
      setAvatarPreview(user.avatar.url)
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (isUpdated) {
      alert.success('Profile Updated Successfully')
      dispatch(loadUser())
      dispatch({ type: UPDATE_PROFILE_RESET })
    } else {
      navigate('/profile/update')
    }
  }, [error, alert, isUpdated, dispatch, user, navigate])

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
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <Face />
                </div>
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <MailOutline />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="avatar" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateDataChange}
                  />
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
    </Fragment>
  )
}

export default UpdateProfile
