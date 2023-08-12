import { styled } from "styled-components";
import { Star } from "../../assets";
import { Profile } from "../../assets";
import { Photo } from "../../assets";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Post = () => {
  const [isStarClick, setIsStarClick] = useState(false);
  const [like, setLike] = useState(0);

  const onStarClick = async () => {
    try {
      const response = await axios.post("/star/{board-id}", {});
      if (response.status === 200) {
        if (isStarClick) {
          setLike(like - 1);
        } else {
          setLike(like + 1);
        }
        setIsStarClick(!isStarClick);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [isEditDeleteVisible, setIsEditDeleteVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const toggleEditDelete = () => {
    setIsEditDeleteVisible(!isEditDeleteVisible);
    setIsDeleteVisible(false);
  };

  const toggleDelete = () => {
    setIsDeleteVisible(!isDeleteVisible);
    setIsEditDeleteVisible(false);
  };
  return (
    <PostWrapper>
      <PostTop>
        <ProfilePhoto>
          <img src={Profile} alt="프로필 사진" />
        </ProfilePhoto>
        <NameIdDate>
          <NameId>
            <ProfileName>원은지</ProfileName>
            <ProfileID>kfknkfdk</ProfileID>
          </NameId>
          <Date>2023-08-01</Date>
        </NameIdDate>
        <IconWrapper>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="lg"
            onClick={toggleEditDelete}
          />
        </IconWrapper>
      </PostTop>
      <PostPhoto>
        <img src={Photo} alt="게시글 사진" />
        {isEditDeleteVisible && (
          <EditDeleteWrapper>
            <EditDelete>수정하기</EditDelete>
            <Line></Line>
            <EditDelete onClick={toggleDelete}>삭제하기</EditDelete>
          </EditDeleteWrapper>
        )}
        {isDeleteVisible && (
          <DeleteWrapper>
            <EditMent>
              <EditMent1>삭제하시겠습니까?</EditMent1>
              <EditMent2>돌이킬 수 없습니다.</EditMent2>
            </EditMent>
            <Line></Line>
            <CancleCheckWrapper>
              <CancleCheck onClick={() => setIsDeleteVisible(false)}>
                취소
              </CancleCheck>
              <HeightLine></HeightLine>
              <CancleCheck>확인</CancleCheck>
            </CancleCheckWrapper>
          </DeleteWrapper>
        )}
      </PostPhoto>
      <PostFooter>
        <FooterLeft>
          <IconNumber>
            <StarIcon onClick={onStarClick}>
              <img src={Star} alt="반응" />
            </StarIcon>
            <StarNumber>{like}</StarNumber>
          </IconNumber>
          <Place>우리집</Place>
        </FooterLeft>
        <TagContainer>
          <TagWrapper>
            <Tag>아에이오우</Tag>
            <Tag>아에이오우</Tag>
            <Tag>아에이오우</Tag>
          </TagWrapper>
          <TagWrapper>
            <Tag>아에이오우</Tag>
            <Tag>아에이오우</Tag>
            <Tag>아에이오우</Tag>
          </TagWrapper>
        </TagContainer>
      </PostFooter>
    </PostWrapper>
  );
};

const EditMent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
  height: 150px;
  margin-top: 60px;
`;

const EditMent1 = styled.div`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 40px;
`;

const EditMent2 = styled.div`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 20px;
`;

const DeleteWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 1px solid;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray0};
  border-color: ${({ theme }) => theme.colors.gray300};
`;

const CancleCheckWrapper = styled.div`
  display: flex;
  gap: 90px;
`;

const HeightLine = styled.div`
  width: 1px;
  height: 80px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray200};
`;

const CancleCheck = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 32px;
`;

const EditDeleteWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 1px solid;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray0};
  border-color: ${({ theme }) => theme.colors.gray300};
`;

const EditDelete = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  font-size: 24px;
`;

const Line = styled.div`
  width: 440px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray200};
`;

const Tag = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 0px 20px;
  border: 1px solid #f6cac9;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 18px;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 8px 15px 0px 0px;
`;

const Place = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 16px;
`;

const StarNumber = styled.span`
  display: flex;
  align-items: center;
  color: black;
  font-size: 24px;
`;

const StarIcon = styled.div`
  width: 40px;
  height: 40px;
  > img {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;

const IconNumber = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0px 0px 20px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 100px;
  margin-top: 12px;
`;

const PostPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  border: none;
  > img {
    position: relative;
    width: 700px;
    height: 700px;
    border-radius: 8px;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  margin: 15px 0px 0px 20px;
`;

const Date = styled.span`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.colors.gray800};
`;

const ProfileID = styled.span`
  color: black;
  font-size: 14px;
`;

const ProfileName = styled.span`
  color: black;
  font-size: 16px;
`;

const NameId = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const NameIdDate = styled.div`
  display: flex;
  gap: 420px;
`;

const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border: none;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 70px;
`;

const PostWrapper = styled.div`
  margin-top: 15px;
`;

export default Post;
