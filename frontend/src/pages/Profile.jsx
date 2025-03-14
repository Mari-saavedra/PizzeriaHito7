import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../store/UserContext.jsx'

const Profile = () => {
  const [email, setEmail] = useState('micorreo@correo.cl')
  const { logout } = useContext(UserContext)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    logout()

    Swal.fire({
      title: 'Listo!',
      text: 'Su sesión se cerró correctamente.',
      icon: 'success'
    })

    setEmail(email)
  }

  return (
    <div className='container p-3'>
      <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
        <div className='register shadow-lg border border-1 border-dark p-4' style={{ width: '30rem', borderRadius: '10px' }}>
          <h2 className='fw-bold mb-4 text-start'>Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column mb-3'>
              <label className='text-gray-700 mb-1'>Correo Electrónico</label>
              <input
                type='email'
                value={email}
                onChange={handleChange}
                name='email'
                className='w-100 p-2 border rounded-lg'
              />
            </div>

            <div className='d-flex flex-column mt-4'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={!email}
              >
                Cerrar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
