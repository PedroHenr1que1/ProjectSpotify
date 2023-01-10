import {
  Background
} from './login.styles'

import TextInput from '../../components/common/TextInput/TextInput';
import TextInputPassword from '../../components/common/TextInputPassword/TextInputPassword';
import Button from '../../components/common/Button/Button';

export default function Login() {
  return (
    <Background>
      <TextInput
        title='Email'
        placeholder='Informe seu email'
      />
      <TextInputPassword
        title='Senha'
        placeholder='Informe sua senha'
        securityPassword={true}
      />
      <Button
        title='Entrar'
      />
    </Background>
  )
}
