import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState } from "react";
import PasswordInput from "../components/common/Password";

const SignupPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Container>
      <img src={Logo} alt="로고" />
      <Wrapper>
        <Title>회원가입</Title>
        <Step>
          <Circle active={activeStep === 1}>1</Circle>
          <Line></Line>
          <Circle active={activeStep === 2}>2</Circle>
          <Line></Line>
          <Circle active={activeStep === 3}>3</Circle>
          <Line></Line>
          <Circle active={activeStep === 4}>4</Circle>
        </Step>
        <InputContainer1>
          <input id="grade" placeholder="학년" />
          <input id="class" placeholder="반" />
          <input id="number" placeholder="번호" />
        </InputContainer1>
        {activeStep >= 2 && (
          <NickName>
            <input id="nickname" placeholder="별명" />
            <button>중복확인</button>
          </NickName>
        )}
        {activeStep >= 3 && (
          <Id>
            <input id="id" placeholder="아이디" />
            <button>중복확인</button>
          </Id>
        )}
        {activeStep >= 4 && (
          <Password>
            <PasswordInput></PasswordInput>
            <PasswordInput></PasswordInput>
          </Password>
        )}
        <NextButton onClick={nextStep}>다음</NextButton>
      </Wrapper>
    </Container>
  );
};

const Password = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Id = styled.div`
  display: flex;
  gap: 20px;
  > input {
    width: 480px;
    height: 70px;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 22px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    &:focus {
      border-color: ${({ theme }) => theme.colors.MAIN1};
    }
    &::placeholder {
      font-size: 20px;
    }
  }
  > button {
    width: 200px;
    height: 70px;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.MAIN5};
    color: white;
    font-size: 22px;
  }
`;

const NickName = styled.div`
  display: flex;
  gap: 20px;
  > input {
    width: 480px;
    height: 70px;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 22px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    &:focus {
      border-color: ${({ theme }) => theme.colors.MAIN1};
    }
    &::placeholder {
      font-size: 20px;
    }
  }
  > button {
    width: 200px;
    height: 70px;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.MAIN5};
    color: white;
    font-size: 22px;
  }
`;

const Line = styled.div`
  width: 160px;
  height: 1px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray500};
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.MAIN1 : theme.colors.MAIN2};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const Step = styled.div`
  display: flex;
  width: 700px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NextButton = styled.button`
  font-size: 20px;
  width: 700px;
  height: 80px;
  border: none;
  background-color: ${({ theme }) => theme.colors.MAIN5};
  color: white;
  border-radius: 10px;
  font-size: 28px;
`;

const InputContainer1 = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: none;
  > input {
    width: 220px;
    height: 70px;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 22px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    &:focus {
      border-color: ${({ theme }) => theme.colors.MAIN1};
    }
    &::placeholder {
      font-size: 20px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  gap: 50px;
  flex-direction: column;
  border-color: none;

  > img {
    width: 322px;
    margin-top: 63px;
    margin-left: 63px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray700};
  margin-right: 600px;
`;

export default SignupPage;
