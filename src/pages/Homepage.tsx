import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {useEffect, useState} from 'react'
import {Favorites} from '../components/Favorites'
import {toast} from 'react-toastify'
import {Button} from '@mui/material'

export const Homepage = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)

  useEffect(() => {
    if (!like) {
      toast('💔 Why no like!')
    } else {
      toast('💟 Nice!')
    }
  }, [like])

  const handleFavor = () => {
    setLike(!like)
  }
  return (
    <>
      <div className='favorite-component'>
        <Favorites favoriteStatus={like} favoriteAction={handleFavor} />
      </div>
      <button className='custom-button'>Button</button>
      <Button variant='outlined' color='success'>
        Contained
      </Button>
      {like ? (
        <div onClick={() => navigate('/About')} data-testid='reactLogo'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
      ) : null}
    </>
  )
}
