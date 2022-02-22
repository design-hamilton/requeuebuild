import { Bg, LoginButton, LoginVFlex, FootPera } from '../../../components/host/styled/login/login.styled'
import { FlexH, FlexV } from '../../../components/host/styled/global.styled';
import LoginIntro from '../../../components/host/login/login';
import Input from '../../../components/host/login/input';
import { faIdBadge, faUser, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function login() {
  return (
    <Bg>
      <LoginVFlex>
        <LoginIntro title="Welcome to" text="Host" />
        <Input title="Branch ID" type="text" img={<FontAwesomeIcon icon={faIdBadge} />} />
        <Input title="User" type="text" img={<FontAwesomeIcon icon={faUser} />} />
        <Input title="Password" type="password" img={<FontAwesomeIcon icon={faUnlockAlt} />} />
        <LoginButton>Login</LoginButton>
        <FlexH className="mt-4 mb-3">
          <img src="../../img/logo.png" />
          <FlexV>
            <FootPera>POWERED BY REQUEUE <br />
              COMPANY 2016 - 2020 <br />
              WWW.REQUEUE.NET</FootPera>
          </FlexV>
        </FlexH>
      </LoginVFlex>
    </Bg>
  )
} 
