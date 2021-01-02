import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Image, Button} from 'react-bootstrap'
import FormFileInput from 'react-bootstrap/esm/FormFileInput'

function Profile() {
  const src = 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'

  const [name, setName] = useState(localStorage.getItem('nama'))
  const [password, setPassword] = useState(localStorage.getItem('password'))
  const [confirmPassword, setConfirmPassword] = useState(localStorage.getItem('confirmPassword'))
  const [photo, setPhoto] = useState(localStorage.getItem('picture'))

  useEffect(() => {
    axios.get(`http://13.212.139.34:3000/user/profile/${localStorage.getItem('email')}`).then(
      res => {
        const { picture } = res.data.data
        localStorage.setItem('picture', picture)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  })

  const handleUpdate = () => {
    const update = {
      picture: '/img/' + photo,
      nama: name,
      password: password,
      passwordConfirmation: confirmPassword,
    }
    axios.put(`http://13.212.139.34:3000/user/profile/update/${localStorage.getItem('email')}`, update)
      .then(
        res => {
          localStorage.setItem('nama', name)
          localStorage.setItem('password', password)
          // localStorage.setItem('picture', photo)
          window.location.reload()
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }
  
  return (
    <div className='d-flex justify-content-center my-5'>
      <Form onSubmit={handleUpdate}>
        <FormGroup>
          <Image 
            src={
              localStorage.getItem('picture') === '/img/null' || !localStorage.getItem('picture')
                ? src 
                : localStorage.getItem('picture')
            }
            className='photo rounded-circle'
          />
          <FormFileInput
            accept='image/png, image/jpeg, image/jpg' 
            onChange={e => setPhoto(e.target.files[0])}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Full Name</FormLabel>
          <FormControl 
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={e => setName(e.target.value)} 
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl 
            type='password' 
            placeholder='Password' 
            onChange={e => setPassword(e.target.value)}
            required
           />
        </FormGroup>

        <FormGroup>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl 
            type='password' 
            placeholder='Confirm Password' 
            onChange={e => setConfirmPassword(e.target.value)} 
            required
          />
        </FormGroup>
        
        <Button type='submit' variant='danger'>Update Profile</Button>
      </Form>
    </div>
  )
}

export default Profile