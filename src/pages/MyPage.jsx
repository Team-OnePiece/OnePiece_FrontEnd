import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";
import React, { Component } from "react";

const MyPage = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);
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
      <AvatarContainer>
        <Avatar
          src={Image}
          style={{ margin: "20px" }}
          size={200}
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          ref={fileInput}
        />
      </AvatarContainer>
      <BottomBtnContainer>
        <CancelBtn>취소하기</CancelBtn>
        <CompleteBtn>완료</CompleteBtn>
      </BottomBtnContainer>
      <IdContainer>
        <IdLabel />
        <input type="text" />
        <CheckBtn>중복확인</CheckBtn>
      </IdContainer>
      <TxtContainer>
        <Txt>OO님, 오늘은 어떤 하루를 보냈나요?</Txt>
      </TxtContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
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

const Avatar = styled.button`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  align-content: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 600px;
  margin-top: 125px;
`;

const CancelBtn = styled.button`
  margin-right: 100px;
  border-radius: 8px;
  width: 300px;
  border: 1px;
  height: 40px;
  border-color: black;
`;

const CompleteBtn = styled.button`
  border-color: #50574b;
  background-color: #50574b;
  color: white;
  border-radius: 8px;
  border: 1px;
  width: 300px;
  height: 40px;
`;

const BottomBtnContainer = styled.div`
  margin-left: 390px;
  margin-top: 340px;
`;

const TxtContainer = styled.div`
  margin-left: 600px;
  margin-top: 0px;
  display: flex;
`;

const Txt = styled.span``;

const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1000px;
`;

const IdLabel = styled.label``;

const CheckBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #50574b;
  border-radius: 10px;
  color: white;
  border: none;
`;

export default MyPage;
