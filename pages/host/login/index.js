import {
  Bg,
  LoginButton,
  LoginVFlex,
  FootPera,
} from "../../../components/host/styled/login/login.styled";
import { FlexH, FlexV } from "../../../components/host/styled/global.styled";
import LoginIntro from "../../../components/host/login/login";
import Input from "../../../components/host/login/input";
import {
  faIdBadge,
  faUser,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function login() {
  const [user, setUser] = useState({
    restId: 0,
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "restId") {
      setUser({ ...user, [e.target.name]: parseInt(e.target.value) });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    console.log(user);
  };
  return (
    <Bg>
      <LoginVFlex>
        <LoginIntro title="Welcome to" text="Host" />
        <Input
          title="Branch ID"
          name="restId"
          value={user.restId}
          onChange={handleChange}
          type="text"
          img={<FontAwesomeIcon icon={faIdBadge} />}
        />
        <Input
          title="User"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          type="text"
          img={<FontAwesomeIcon icon={faUser} />}
        />
        <Input
          title="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
          img={<FontAwesomeIcon icon={faUnlockAlt} />}
        />
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
        <FlexH className="mt-4 mb-3">
          <img src="../../img/logo.png" />
          <FlexV>
            <FootPera>
              POWERED BY REQUEUE <br />
              COMPANY 2016 - 2020 <br />
              WWW.REQUEUE.NET
            </FootPera>
          </FlexV>
        </FlexH>
      </LoginVFlex>
    </Bg>
  );
}
//test