import * as yup from 'yup'
import { SignUpFormData } from './types'

export const signUpValidationScheme: yup.ObjectSchema<SignUpFormData> = yup.object().shape({
  repeatPassword: yup.string()
      .required('Пароли должны совпадать')
      .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
  password: yup.string()
      .required('Пароль обязателен для заполнения')
      .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число')
      .min(8, 'Пароль должен состоять минимум из 8 символов')
      .max(25, 'Пароль не должен превышать 25 символов'),
  gender: yup.string().required('Нужно обязательно указать пол'),
  email: yup.string()
      .required('Электронная почта обязательна для заполнения')
      .matches(/^\S+@\S+\.\S+$/g, 'Электронная почта введена некорректно')
      .max(50, 'Электронная почта не должна превышать 50 символов'),
  nickname: yup.string()
      .required('Ник обязателен для заполнения')
      .max(20, 'Ник не должен превышать 20 символов'),
  name: yup.string()
      .required('Имя обязательно для заполнения')
      .max(20, 'Имя не должно превышать 20 символов')
})