import { FC } from 'react'
import { SignInProps } from './types'
import { TextInput } from '../../shared/ui/TextInput/textInput.'
import { Button } from '../../shared/ui/Button/Button'
import { FormComponent } from '../../shared/ui/FormComponent/formComponent'
import { signInValidationScheme } from './validations'

export const SignIn: FC<SignInProps> = ({ onSubmit, toggleLogin }) => {
  const handleToggle = () => {
    toggleLogin()
  }

  return <>
    <h1 style={{ margin: '10px 0', fontSize: 25 }}>Авторизация</h1>
    <FormComponent onSubmit={onSubmit} validationScheme={signInValidationScheme} clear={true}>
      <TextInput label='Email' type='email' name='email' asterisk />
      <TextInput label='Пароль' type='password' name='password' asterisk />
      <Button type='submit' text='Авторизоваться' style={{ margin: '10px 0' }} />
    </FormComponent>
    <p style={{ margin: '10px 0' }}>
      Еще нет аккаунта? {' '}
      <span style={{ cursor: 'pointer', color: 'darkblue' }} onClick={handleToggle}>Зарегистрироваться</span>
    </p>
  </>
}