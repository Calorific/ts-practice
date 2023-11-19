
export interface SignInProps {
  onSubmit: (data: SignUpFormData) => void
  toggleLogin: Function
}

export interface SignUpFormData {
  name: string
  nickname: string
  email: string
  gender: string
  password: string
  repeatPassword: string
}