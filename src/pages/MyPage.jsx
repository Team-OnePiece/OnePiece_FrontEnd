/*import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";

const MyPage = () => {
  const [profileImage, setProfileImage] = useState(user.profile_image);
  const profileImgFileInput = useRef(null);
  const profileChange = (e) => {
    if (e.target.files[0]) {
      setProfileFiles(e.target.files[0]);
    } else {
      setProfileImage(user.profileImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="로고" />
      </LogoContainer>
      <ImgContainer>
        <img
          className="profileImageEditCamera2"
          src="images/Twitter_files/profile_icons/camera.png"
          alt="이미지 수정"
          onClick={() => {
            profileImgFileInput.current.click();
          }}
        />
        <input
          className="fileUploader2"
          type="file"
          accept="image/*"
          onChange={profileChange}
          ref={profileImgFileInput}
          name="profile_img"
        />
      </ImgContainer>
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
`;

const Img = styled.img`
  width: 1000px;
  margin-top: 400px;
`;

const LogoContainer = styled.div`
  > img {
    width: 250px;
    margin-bottom: 700px;
    margin-right: 1200px;
  }
`;

const ImgContainer = styled.div`
  > img {
    padding-bottom: 0px;
  }
`;

export default MyPage;

const user = styled.div``;
const setProfileFiles = styled.div``;
*/

import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState, useRef } from "react";

const Mypage () => {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
const fileInput = useRef(null)

<Avatar 
        src={Image} 
        style={{margin:'20px'}} 
        size={200} 
        onClick={()=>{fileInput.current.click()}}/>
};
