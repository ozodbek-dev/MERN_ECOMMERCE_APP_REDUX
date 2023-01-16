import { Face, LockOpen, MailOutline } from '@mui/icons-material'
import { Fragment, useRef, useState, useEffect } from 'react'
import { LoginSignUpContainer } from './LoginSignUp.element'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import profile from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, login, register } from '../../redux/actions/userAction'
import Loader from '../layout/loader/Loader'


const LoginSignUp = () => {
const dispatch = useDispatch();
const alert = useAlert()
const navigate = useNavigate()
const {loading,error,isAuthenticated} = useSelector(state=>state.user)

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [email, setemail] = useState('')
  const [passsword, setpasssword] = useState('')
  const [name, setName] = useState('')
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const [avatar,setAvatar] = useState('')
  const [avatarPreview,setAvatarPreview] = useState(profile)

  const switcherTab = useRef(null)
  const registerTab = useRef(null)
  const loginTab = useRef(null)

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral')
      switcherTab.current.classList.remove('shiftToRight')

      registerTab.current.classList.remove('shiftToNeutralForm')
      loginTab.current.classList.remove('shiftToLeft')
    }
    if (tab === 'register') {
      switcherTab.current.classList.remove('shiftToNeutral')
      switcherTab.current.classList.add('shiftToRight')

      registerTab.current.classList.add('shiftToNeutralForm')
      loginTab.current.classList.add('shiftToLeft')
    }
  }

  const loginSubmit = (e) => {
    e.preventDefault()
    dispatch(login(loginEmail,loginPassword))
  }
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name",name)
    myForm.set("email",email)
    myForm.set("password",passsword)
    myForm.set("avatar",avatar)

    dispatch(register(myForm))

  }
  const registerDataChange=(e)=>{
    if(e.target.name === "avatar"){
      const reader = new FileReader();
      reader.onload = ()=>{
        if(reader.readyState ===2){
          setAvatar(reader.result)
          setAvatarPreview(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
    else{
      setUser({...user,[e.target.name]:e.target.value})
    }
  }

  useEffect( ()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
    if(isAuthenticated){
      navigate("/account")
    }
    else{
      navigate("/login")
    }
  },[error,alert,isAuthenticated,dispatch])

  return (
    <Fragment>
      {
        loading ? <Loader/>: <Fragment>
        <LoginSignUpContainer>
          <div className="box">
            <div>
              <div className="login_signUp_toggle">
                <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, 'register')}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
              <form
                ref={loginTab}
                onSubmit={loginSubmit}
                className="loginForm"
                encType="multipart/form-data"
              >
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <MailOutline />
                </div>
                <div className="loginPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <LockOpen />
                </div>
                <Link to={`/password/forgot`}>Forget Password ? </Link>
                <input
                  type="submit"
                  value="Login"
                  disabled={loading ? true : false}
                  className="loginBtn"
                />
              </form>
  
              <form
                ref={registerTab}
                onSubmit={registerSubmit}
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
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <MailOutline />
                </div>
                <div className="loginPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={passsword}
                    onChange={(e) => setpasssword(e.target.value)}
                  />
                  <LockOpen />
                </div>
  
                <div id="registerImage">
                  <img src={avatarPreview} alt="avatar" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
  
                <input
                  type="submit"
                  value="Register"
                  className="signUpBtn"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </LoginSignUpContainer>
      </Fragment>
      }
    </Fragment>
  )
}

export default LoginSignUp
