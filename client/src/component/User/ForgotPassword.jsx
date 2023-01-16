import { Mail } from '@mui/icons-material'
import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, forgotPassword } from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'
import { UpdateProfileContainer } from './UpdateProfile.element'
import { MetaData } from '../layout/MetaData'

function ForgotPassword() {

  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()


  const [email,setEmail] = useState('');

  const { msg, error, loading } = useSelector((state) => state.forgotPassword);

  const forgotSubmit = (e)=>{
    e.preventDefault();
    dispatch(forgotPassword(email))
  }
useEffect(()=>{
  if(error){
    alert.error(error);
    dispatch(clearErrors());
  }
  if(msg){
    alert.success(msg)
  }

},[error,alert,dispatch,msg])
  return (
    <Fragment>
      <MetaData title={"Forgot Password"}/>
    {loading ? (
      <Loader />
    ) : (
      <UpdateProfileContainer  >
        <div className="box" style={{height:"400px"}}>
          <h1>Forgot Password</h1>

          <div  >
            <form
              onSubmit={forgotSubmit}
              className="signUpForm"
              encType="multipart/form-data"
           
            >
              <div className="loginEmail">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
                <Mail />
              </div>

              <input
                type="submit"
                value="Send"
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

export default ForgotPassword
