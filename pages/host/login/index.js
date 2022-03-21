import {Bg,LoginButton,LoginVFlex,FootPera,} from "../../../components/host/styled/login/login.styled";
import { FlexH, FlexV } from "../../../components/host/styled/global.styled";
import LoginIntro from "../../../components/host/login/login";
import Input from "../../../components/host/login/input";
import {faIdBadge,faUser,faUnlockAlt,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react"; 
import { useRouter } from "next/router"; 
import { userLogin } from "../../../helpers/apiLogin";
import { SaveLocalStorage } from "../../../helpers/localStorage";
import { GlobalContext } from "../../../contextApi/Provider";

const login=()=> { 
  
  const { setAuthToken,authToken } = useContext(GlobalContext);
 

  const router = useRouter()
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
    // authStore.login(user)
    userLogin(user).then((response) => {
      if(response.data.success){
        let accessToken = response.data.data.acessToken;
        // console.log(response);
        SaveLocalStorage('token', accessToken);
        // window.location.reload();
        authToken[1](accessToken);
        router.push('home');
        console.log(authToken);
      }
    }).catch((error)=> {
      console.log(error);
    })
  };
  // if(authToken) return router.push("home")
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
export default login