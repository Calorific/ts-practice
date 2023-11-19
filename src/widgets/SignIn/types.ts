
export interface SignInProps {
  onSubmit: (data: SignInFormData) => void
  toggleLogin: Function
}

export interface SignInFormData {
  email: string
  password: string
}