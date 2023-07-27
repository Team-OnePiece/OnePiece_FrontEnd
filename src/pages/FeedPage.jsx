import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

const FeedPage = () => {
  const navigate = useNavigate();

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
  let [inputCount, setInputCount] = useState(0);

  // 이미지 관련 함수 --------
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
  // 이미지 관련 함수 --------

  return (
    <Container>
      <img src={Logo} alt="로고" />
      <Wrapper>
        <AddPhotoContainer>
          <img src={Image} size={200} alt="사진" />
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
            accept="image/*"
            name="profile_img"
            onChange={onChange}
            ref={fileInput}
          />
        </AddPhotoContainer>
        <ContentContainer>
          <InputContainer>
            <Input
              onChange={onInputHandler}
              maxLength="10"
              placeholder="위치를 입력하세요"
            />
            <p>
              <span>{inputCount}</span>
              <span>/10</span>
            </p>
          </InputContainer>
          <p>태그는 최대 6개, 최대 10자까지 작성 가능합니다.</p>
          <TagAddButton>+</TagAddButton>
        </ContentContainer>
        <UploadContainer>
          <p>어느 그룹에 업로드 하시겠습니까?</p>
          <Group>그룹선택</Group>
          <BottomBtnContainer>
            <CancelBtn>취소하기</CancelBtn>
            <UploadBtn>업로드</UploadBtn>
          </BottomBtnContainer>
        </UploadContainer>
      </Wrapper>
      <p onClick={() => navigate("/mypage")}>마이페이지</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  > img {
    position: absolute;
    width: 250px;
    top: 11px;
    left: 12px;
  }
  > p {
    position: absolute;
    width: 250px;
    bottom: 11px;
    left: 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AddPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11;

  > p {
    color: ${({ theme }) => theme.colors.gray500};
  }
  > img {
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-size: 14px;
    color: red;
  }
`;

const TagAddButton = styled.button`
  width: 60px;
  height: 50px;
  border-radius: 24px;
  border: 1px solid;
  border-color: rgb(239, 204, 202);
  color: black;
  font-size: 20px;
  background-color: white;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > p {
    font-size: 14px;
  }
`;

// const Input = styled.input`
//   width: 550px;
//   height: 50px;
//   border-radius: 10px;
//   outline: none;
//   border: 1px solid ${({ theme }) => theme.gray400};
//   font-size: 20px;
//   border-color: rgb(239, 204, 202);
//   padding-left: 10px;
// `;

const InputContainer = styled.div`
  /* padding-left: 475px;
  padding-top: 30px;
  > p {
    padding-left: 500px;
  } */
  position: relative;
  > p {
    position: absolute;
    top: 12px;
    right: 10px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const Txt = styled.text`
  /* color: red;
  margin-left: 0px;
  margin-bottom: 100px; */
`;

const PlusBtnContainer = styled.div`
  /* padding-left: 0px;
  padding-top: 20px;
  > button {
    width: 90px;
    height: 60px;
    border-radius: 24px;
    border: 1px solid;
    border-color: rgb(239, 204, 202);
    color: black;
    font-size: 20px;
    background-color: white;
  } */
`;

const Group = styled.button`
  border: 1px solid;
  border-color: rgb(239, 204, 202);
  color: gray;
  border-radius: 24px;
  width: 120px;
  height: 40px;
  font-size: 22px;
  background-color: white;
`;

const UploadTxt = styled.text`
  /* padding-left: 475px;
  padding-top: 100px; */
`;

const BottomBtnContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding-top: 70px;
  gap: 60px; */
  display: flex;
  justify-content: space-between;
`;

const CancelBtn = styled.button`
  width: 290px;
  height: 50px;
  background-color: white;
  border: 1px solid;
  border-color: rgb(239, 204, 202);
  color: gray;
  border-radius: 8px;
  font-size: 20px;
`;

const UploadBtn = styled.button`
  border: none;
  background-color: rgb(239, 204, 202);
  color: gray;
  width: 290px;
  height: 50px;
  border-radius: 8px;
  font-size: 20px;
`;

const LocateMypage = styled.div`
  /* padding-left: 50px;
  padding-bottom: 0px;
  > button {
    color: gray;
    font-size: 20px;
    background: none;
    border: none;
  } */
`;

export default FeedPage;
