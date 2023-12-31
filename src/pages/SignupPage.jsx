import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState } from "react";
import PasswordInput from "../components/common/Password";
import {
  useSignupMutation,
  useNicknameDuplicate,
  useIdDuplicate,
  useStudentDuplicate,
} from "../api/user/index";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const [input, setInput] = useState({
    grade: "",
    classNumber: "",
    studentNumber: "",
  });

  const { grade, classNumber, studentNumber } = input;

  const onChange = (e) => {
    const { value, id } = e.target;
    if (id === "nickname") {
      setStudentNickName(value);
    } else if (id === "id") {
      setStudentId(value);
    } else if (id === "password1") {
      setPassword1(value);
    } else if (id === "password2") {
      setPassword2(value);
    }
    setInput({
      ...input,
      [id]: value,
    });
  };

  const [nicknameDuplicate, setNicknameDuplicate] = useState(false);
  const { data: isNicknameDuplicate } = useNicknameDuplicate();

  const nicknameCheck = () => {
    if (isNicknameDuplicate) {
      alert("이미 사용중인 별명입니다.");
      setNicknameDuplicate(true);
    } else {
      alert("사용 가능한 별명입니다.");
      setNicknameDuplicate(false);
    }
  };

  const [idDuplicate, setIdDuplicate] = useState(false);
  const { data: isIdDuplicate } = useIdDuplicate();

  const idCheck = () => {
    if (isIdDuplicate) {
      alert("이미 사용중인 아이디입니다.");
      setIdDuplicate(true);
    } else {
      alert("사용 가능한 아이디입니다.");
      setIdDuplicate(false);
    }
  };

  const [studentDuplicate, setStudentDuplicate] = useState(false);
  const { data: isStudentDuplicate } = useStudentDuplicate();

  const studentCheck = () => {
    if (isStudentDuplicate) {
      alert("이미 사용중인 학번입니다.");
      setStudentDuplicate(true);
    } else {
      alert("사용 가능한 학번입니다.");
      setStudentDuplicate(false);
    }
  };

  const [studentNickname, setStudentNickName] = useState("");

  const [studentId, setStudentId] = useState("");

  const [password1, setPassword1] = useState("");

  const [password2, setPassword2] = useState("");

  const disabledNextButton = [
    !(grade && classNumber && studentNumber) || studentDuplicate,

    !studentNickname || nicknameDuplicate,
    !studentId || idDuplicate,
    !(password1 === password2 && password1),
  ];

  const { mutate } = useSignupMutation();
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
        <InputContainer>
          <input
            id="grade"
            placeholder="학년"
            onChange={onChange}
            value={grade}
          />
          <input
            id="classNumber"
            placeholder="반"
            onChange={onChange}
            value={classNumber}
          />
          <input
            id="studentNumber"
            placeholder="번호"
            onChange={onChange}
            value={studentNumber}
          />
          <button onClick={studentCheck}>중복확인</button>
        </InputContainer>
        {activeStep >= 2 && (
          <NickName>
            <input
              id="nickname"
              placeholder="별명"
              onChange={onChange}
              value={studentNickname}
            />
            <button onClick={nicknameCheck}>중복확인</button>
          </NickName>
        )}
        {activeStep >= 3 && (
          <Id>
            <input
              id="id"
              placeholder="아이디"
              onChange={onChange}
              value={studentId}
            />
            <button onClick={idCheck}>중복확인</button>
          </Id>
        )}
        {activeStep >= 4 && (
          <Password>
            <PasswordInput
              id="password1"
              placeholder="비밀번호"
              onChange={onChange}
              value={password1}
            ></PasswordInput>
            <PasswordInput
              id="password2"
              placeholder="비밀번호 확인"
              onChange={onChange}
              value={password2}
            ></PasswordInput>
          </Password>
        )}
        <NextButton
          onClick={() => {
            activeStep === 4
              ? mutate({
                  accout_id: studentId,
                  password: password1,
                  password_valid: password2,
                  nickname: studentNickname,
                  grade: grade,
                  class_number: classNumber,
                  number: studentNumber,
                })
              : nextStep();
          }}
          disabled={disabledNextButton[activeStep - 1]}
        >
          {activeStep === 4 ? <SLink to="/">로그인</SLink> : "다음"}
        </NextButton>
      </Wrapper>
    </Container>
  );
};

const SLink = styled(Link)`
  color: white;
  font-size: 28px;
  text-decoration-line: none;
`;

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
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    border-radius: 10px;
    padding: 0 20px;
    font-size: 22px;
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
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.MAIN5};
    color: white;
    font-size: 22px;
    &:focus {
      background-color: ${({ theme }) => theme.colors.MAIN1};
    }
  }
`;

const NickName = styled.div`
  display: flex;
  gap: 20px;
  > input {
    width: 480px;
    height: 70px;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    border-radius: 10px;
    font-size: 22px;
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
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.MAIN5};
    color: white;
    font-size: 22px;
    &:focus {
      background-color: ${({ theme }) => theme.colors.MAIN1};
    }
  }
`;

const Line = styled.div`
  width: 160px;
  height: 1px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray500};
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.MAIN1 : theme.colors.MAIN2};
  color: ${({ theme }) => theme.colors.WHITE};
`;

const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const NextButton = styled.button`
  cursor: pointer;
  width: 700px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.MAIN1};
  color: white;
  font-size: 28px;

  &:disabled {
    cursor: no-drop;
    background-color: ${({ theme }) => theme.colors.MAIN5};
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: none;
  > input {
    width: 147px;
    height: 70px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    font-size: 22px;
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
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.MAIN5};
    color: white;
    font-size: 22px;
    &:focus {
      background-color: ${({ theme }) => theme.colors.MAIN1};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100%;
  border-color: none;
  background-color: ${({ theme }) => theme.colors.gray0};

  > img {
    width: 322px;
    margin: 63px 0px 0px 63px;
  }
`;

const Title = styled.h1`
  margin-right: 600px;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 32px;
  font-weight: 400;
`;

export default SignupPage;
