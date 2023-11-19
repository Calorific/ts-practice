import * as yup from 'yup'
import { SignInFormData } from './types'

export const signInValidationScheme: yup.ObjectSchema<SignInFormData> = yup.object().shape({
  password: yup.string()
      .required('Пароль обязателен для заполнения')
      .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число')
      .min(8, 'Пароль должен состоять минимум из 8 символов')
      .max(25, 'Пароль не должен превышать 25 символов'),
  email: yup.string()
      .required('Электронная почта обязательна для заполнения')
      .matches(/^\S+@\S+\.\S+$/g, 'Электронная почта введена некорректно')
      .max(50, 'Электронная почта не должна превышать 50 символов'),
})