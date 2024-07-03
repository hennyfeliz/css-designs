import { Link } from 'react-router-dom'
import '../Styles/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <span>Username</span>
      <input className="login-input" type="text" name="" id="" />
      <Link to='/chat'>
        <button className='login-button'>Get in!</button>
      </Link>
    </div>
  )
}

export default Login