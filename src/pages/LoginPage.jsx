import { styled } from "styled-components";
import { Logo } from "../assets";
import Input from "../components/common/Input";
import Eye from "../components/common/Eye";
import { useState } from "react";
import { LoginInputData } from "../constants/login";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isOpenEye, setIsOpenEye] = useState(false);
  let passwordType = isOpenEye ? "text" : "password";
  const eyeClickHandle = () => {
    setIsOpenEye(!isOpenEye);
  };
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="로고" />
      <InputContainer>
        <Title>로그인</Title>
        {LoginInputData.map((value, idx) => (
          <div key={idx}>
            <label htmlFor={value.name}>{value.title}</label>
            <Input
              id={value.name}
              name={value.name}
              type={value.title === "비밀번호" && passwordType}
            />
            {value.title === "비밀번호" && (
              <Eye isShowPassword={isOpenEye} onClick={eyeClickHandle} />
            )}
          </div>
        ))}
      </InputContainer>
      <HomepageButton
        onClick={() => navigate("/homepage")}
        text="로그인하기"
        disabled={false}
      />
      <GoSignup>
        <text>아직 회원이 아니신가요?</text>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </GoSignup>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: column;

  > img {
    width: 322px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray800};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }
`;

const HomepageButton = styled.button`
  font-size: 20px;
  width: 600px;
  height: 60px;
  border: none;
  background-color: rgb(64, 68, 60);
  border-radius: 10px;
  color: white;
`;

const GoSignup = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;

  > button {
    font-size: 15px;
    color: red;
    background: none;
    border: none;
  }
  > text {
    font-size: 15px;
  }
`;

export default LoginPage;
