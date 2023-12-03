import { FC } from 'react'
import { TextInput } from '../../shared/ui/TextInput/textInput.'
import { Button } from '../../shared/ui/Button/Button'
import { FormComponent } from '../../shared/ui/FormComponent/formComponent'
import { signInValidationScheme } from './validations'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/context/auth/authProvider'
import { SignInFormData } from './types'

export const SignIn: FC = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleToggle = () => {
    navigate('/auth/register')
  }

  const handleSubmit = (data: SignInFormData) => {
    const errors = auth?.logIn(data.email, data.password)
    if (errors) {
      return errors
    }
    navigate('/')
  }

  return <div  style={{ width: 310 }}>
    <h1 style={{ margin: '10px 0', fontSize: 25 }}>Login</h1>
    <FormComponent onSubmit={handleSubmit} validationScheme={signInValidationScheme} clear={true}>
      <TextInput label='Email' type='email' name='email' asterisk />
      <TextInput label='Password' type='password' name='password' asterisk />
      <Button type='submit' text='Login' style={{ margin: '10px 0' }} />
    </FormComponent>
    <p style={{ margin: '10px 0' }}>
      Don't have an account? {' '}
      <span style={{ cursor: 'pointer', color: 'darkblue' }} onClick={handleToggle}>Register</span>
    </p>
  </div>
}