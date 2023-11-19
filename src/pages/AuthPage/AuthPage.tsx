import { FC, useState } from 'react'
import { SignIn } from '../../widgets/SignIn/signIn'
import { SignUp } from '../../widgets/SignUp/signUp'

export const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const toggleLogin = () => {
    setIsLogin(prevState => !prevState)
  }

  const handleSubmit = (data: object) => {
    console.log(data)
  }

  return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      {isLogin
          ? <SignIn onSubmit={handleSubmit} toggleLogin={toggleLogin} />
          : <SignUp onSubmit={handleSubmit} toggleLogin={toggleLogin} />
      }
    </div>
  </div>
}