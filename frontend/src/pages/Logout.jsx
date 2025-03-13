import { useContext, useEffect } from 'react'
import { UserContext } from '../store/UserContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { logout, token } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    navigate('/')
  }, [logout, navigate])

  console.log('En LOGOUT  ', token)

  return null
}

export default Logout
