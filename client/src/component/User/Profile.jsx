import { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {MetaData} from '../layout/MetaData'
import Loader from '../layout/loader/Loader'
import {ProfileContainer} from './LoginSignUp.element'
const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated===false){
      navigate('/login')
    }
  },[isAuthenticated])

  return (
    <Fragment>
      {
        loading ? <Loader/>:
        <Fragment>
        <MetaData title={`${user.name}'s profile`} />
        <ProfileContainer>
          <div>
            <h1>My Profile</h1>
            <img src={user.avatar.url} alt={`${user.name}-avatar`} />
            <Link to="/profile/update">Edit Profile</Link>
          </div>
  
          <div>
            <div>
              <h4>Full Name</h4>
              <p>{user.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Joined on </h4>
              <p>{String(user.createdAt).substr(0, 10)}</p>
            </div>
            <div>
              <Link to={'/orders'}>My Orders</Link>
              <Link to="/password/update">Change Password</Link>
            </div>
          </div>
        </ProfileContainer>

      </Fragment>
      }
    </Fragment>

  )
}

export default Profile
