import { styled } from "styled-components";
import { Logo } from "../assets";
import Input from "../components/common/Input";
import Eye from "../components/common/Eye";
import { useState } from "react";
import { LoginInputData } from "../constants/login";

const LoginPage = () => {
  const [isOpenEye, setIsOpenEye] = useState(false);
  let passwordType = isOpenEye ? "text" : "password";
  const eyeClickHandle = () => {
    setIsOpenEye(!isOpenEye);
  };

  return (
    <Container>
      <img src={Logo} alt="로고" />
      <InputContainer>
        <Title>로그인</Title>
        {/* map사용법에 대해서는 각자 알아보기 */}
        {/* 반복되는 컴포넌트가 있어서 다른값만 따로 골라낸 뒤, map을 돌려줬어요. */}
        {LoginInputData.map((value, idx) => (
          //map을 사용할 때에는 제일 바깥에서 감싸는 태그에 key를 주어야 해요.
          //key는 각각 다르게 줘야해서 저는 idx를 줬지만 왠만하면 idx 말고 다른 값을 주는게 좋아요.
          <div key={idx}>
            <label htmlFor={value.name}>{value.title}</label>
            {/* label태그의 속성 중 htmlFor은 인풋 중에 같은 id값을 가진 인풋을 찾아서 포커싱해줘요.  */}
            <Input
              id={value.name} //htmlFor과 같은 값을 주었어요.
              name={value.name}
              type={value.title === "비밀번호" && passwordType}
            />
            {value.title === "비밀번호" && (
              <Eye isShowPassword={isOpenEye} onClick={eyeClickHandle} />
            )}
            {/* 인풋의 제목이 비밀번호일 때에만 Eye 컴포넌트가 있게 했어요. */}
            {/* Eye를 감싸는 div에 position: relative를 준 뒤, Eye 컴포넌트에는 position: absolute를 주고, top, right을 주어서 위치를 잡아줬어요.*/}
          </div>
        ))}
        <ErrorText>비밀번호 또는 아이디 확인하세요.</ErrorText>
      </InputContainer>
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
  gap: 30px;
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

const ErrorText = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  color: red;
`;

export default LoginPage;
