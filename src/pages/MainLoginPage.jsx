import { styled } from "styled-components";
import { Logo } from "../assets";
import Input from "../components/common/Input";
import useInput from "../hooks/useInput";
// import { NextButton } from "react-router-dom";
import { Link } from "react-router-dom";

const clickMe = () => {
  document.location.href("/login");
};

const MainLoginPage = () => {
  const [id, setId, onChangeId] = useInput("");
  return (
    <Container>
      <img src={Logo} alt="로고" />
      <InputContainer>
        <Title>로그인</Title>
        <Label>아이디</Label>
        <Input type="text" value={id} onChange={onChangeId} />
      </InputContainer>
      <WrapperNextButton>
        <Link to="./login">
          <NextButton>다음</NextButton>
        </Link>
      </WrapperNextButton>
      <Signup>
        <NoMember>아직 회원이 아니신가요?</NoMember>
        <SignupButton>회원가입</SignupButton>
      </Signup>
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

const passwordType = styled.div``;

const WrapperNextButton = styled.div``;

const NextButton = styled.button`
  font-size: 20px;
  width: 600px;
  height: 60px;
  border: none;
  background-color: rgb(64, 68, 60);
  border-radius: 10px;
  color: white;
`;

const Signup = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const NoMember = styled.span`
  font-size: 15px;
`;

const SignupButton = styled.button`
  font-size: 15px;
  color: red;
  background: none;
  border: none;
`;

const Label = styled.div``;

const id = styled.div``;

const onChangeId = styled.div``;

const UseInput = styled.div``;

export default MainLoginPage;
