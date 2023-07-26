import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";
import React from "react";

const FeedPage = () => {
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
      <AvatarContainer>
        <Avatar src={Image} size={200} />
        <p
          onClick={() => {
            fileInput.current.click();
          }}
        >
          사진 추가하기
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

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const Avatar = styled.img`
  width: 250px;
  height: 250px;
`;

export default FeedPage;
