import {
  Background,
  ContainerButton,
  ContainerInputs,
  Description,
  Logo as SpotifyLogo,
  Wrapper,
  Warning,
} from './login.styles'

import Logo from '../../assets/Svg/SpotifyLogo.svg';

import TextInput from '../../components/common/TextInput/TextInput';
import TextInputPassword from '../../components/common/TextInputPassword/TextInputPassword';
import Button from '../../components/common/Button/Button';

export default function Login() {
  return (
    <Background>
      <Wrapper>
        <SpotifyLogo width={250} draggable={false} src={Logo} alt="Logo" />
        <Description>
          Faça login com sua conta Spotify e tenha acesso a diversas informações sobre seus artistas preferidos e seu gosto musical!
        </Description>
        <ContainerInputs>
          <TextInput
            title='Email'
            placeholder='Informe seu email'
          />
          <TextInputPassword
            title='Senha'
            placeholder='Informe sua senha'
            securityPassword={true}
          />
        </ContainerInputs>
        <ContainerButton>
          <Button
            title='Entrar'
          />
          <Warning>Nenhum dado é utilizado sem sua autorização!</Warning>
        </ContainerButton>
      </Wrapper>
    </Background>
  )
}
