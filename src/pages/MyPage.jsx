import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";
import React from "react";

const MyPage = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);
  // const myId = "내 예전 아이디";

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="로고" />
      </LogoContainer>
      <MyPageTxT>마이 페이지</MyPageTxT>
      <Txt>OO님, 오늘은 어떤 하루를 보냈나요?</Txt>
      <AvatarContainer>
        <Avatar src={Image} size={200} />
        <p
          onClick={() => {
            fileInput.current.click();
          }}
        >
          수정하기
        </p>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          ref={fileInput}
        />
      </AvatarContainer>
      <IdContainer>
        <input type="text" />
        <CheckBtn>중복확인</CheckBtn>
      </IdContainer>
      <BottomBtnContainer>
        <CancelBtn>취소하기</CancelBtn>
        <CompleteBtn>완료</CompleteBtn>
      </BottomBtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 250px;
    margin-top: 11px;
    margin-left: 12px;
  }
`;

const MyPageTxT = styled.span`
  padding-left: 400px;
  font-size: 16px;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  align-content: center;
  margin: 20px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const CancelBtn = styled.button`
  border-radius: 8px;
  width: 300px;
  border: 1px;
  height: 50px;
  border-color: black;
`;

const CompleteBtn = styled.button`
  border-color: #50574b;
  background-color: #50574b;
  color: white;
  border-radius: 8px;
  border: 1px;
  width: 300px;
  height: 50px;
`;

const BottomBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 60px;
`;

const Txt = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const IdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > input {
    width: 340px;
    height: 40px;
    border-radius: 0.625rem;
    border: 1px solid ${({ theme }) => theme.gray400};
    outline: none;
    padding: 0 20px;
  }
`;

const CheckBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #50574b;
  border-radius: 10px;
  color: white;
  border: none;
`;

export default MyPage;
