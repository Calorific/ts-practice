import { FC, } from 'react'
import { SignInProps } from './types'
import { TextInput } from '../../shared/ui/TextInput/textInput.'
import { Button } from '../../shared/ui/Button/Button'
import { RadioButtons } from '../../shared/ui/RadioButtons/radioButtons'
import { FormComponent } from '../../shared/ui/FormComponent/formComponent'
import { signUpValidationScheme } from './validations'
const Icon = require('../../shared/assets/at.svg')

export const SignUp: FC<SignInProps> = ({ onSubmit, toggleLogin }) => {
  const handleToggle = () => {
    toggleLogin()
  }

  return <div>
    <h1 style={{ margin: '10px 0', fontSize: 25 }}>Регистрация</h1>
    <FormComponent onSubmit={onSubmit} validationScheme={signUpValidationScheme} clear={true}>
      <TextInput label='Имя' name='name' asterisk />
      <TextInput label='Ник' name='nickname' asterisk icon={Icon} />
      <TextInput label='Email' type='email' name='email' asterisk />
      <RadioButtons items={[{ value: 'male', label: 'Мужской' }, { value: 'female', label: 'Женский' }]}
                    name='gender' label='Пол' />
      <TextInput label='Пароль' type='password' name='password' asterisk />
      <TextInput label='Повторите пароль' type='password' name='repeatPassword' asterisk />
      <Button type='submit' text='Зарегистрироваться' style={{ margin: '10px 0' }} />
    </FormComponent>
    <p style={{ margin: '10px 0' }}>
      Еще нет аккаунта? {' '}
      <span style={{ cursor: 'pointer', color: 'darkblue' }} onClick={handleToggle}>Авторизоваться</span>
    </p>
  </div>
}