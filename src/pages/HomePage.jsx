import { styled } from "styled-components";
import { Logo } from "../assets";
import { Star } from "../assets";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const GroupToggle = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
  };
  return (
    <Container>
      <Header>원은지님, 안녕하세요</Header>
      <Sidebar>
        <img src={Logo} alt="로고" />
        <SidebarText>
          <GroupWrapper>
            <CurrentGroup onClick={GroupToggle}>2023</CurrentGroup>
            <Groups>
              <Group>2022</Group>
              <Group>2021</Group>
              <Group>1-4(2021)</Group>
            </Groups>
          </GroupWrapper>
          <SidebarBtm>
            <PostUpDate>추가하기</PostUpDate>
            <MyPage>마이페이지</MyPage>
          </SidebarBtm>
        </SidebarText>
      </Sidebar>
      <Main>
        <MainWrapper>
          <Ment>어떤 하루를 보냈나요?</Ment>
          <Post>
            <PostTop>
              <ProfilePhoto></ProfilePhoto>
              <NameIdDate>
                <NameId>
                  <ProfileName>원은지</ProfileName>
                  <ProfileID>kfknkfdk</ProfileID>
                </NameId>
                <Date>2023-08-01</Date>
              </NameIdDate>
              <IconWrapper>
                <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
              </IconWrapper>
            </PostTop>
            <PostPhoto></PostPhoto>
            <PostBtm>
              <PostBtmL>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </PostBtmL>
              <TagWrapper>
                <TagWrapper1>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper1>
                <TagWrapper2>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper2>
              </TagWrapper>
            </PostBtm>
          </Post>
        </MainWrapper>
        <MainWrapper>
          <Post>
            <PostTop>
              <ProfilePhoto></ProfilePhoto>
              <NameIdDate>
                <NameId>
                  <ProfileName>원은지</ProfileName>
                  <ProfileID>kfknkfdk</ProfileID>
                </NameId>
                <Date>2023-08-01</Date>
              </NameIdDate>
              <IconWrapper>
                <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
              </IconWrapper>
            </PostTop>
            <PostPhoto></PostPhoto>
            <PostBtm>
              <PostBtmL>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </PostBtmL>
              <TagWrapper>
                <TagWrapper1>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper1>
                <TagWrapper2>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper2>
              </TagWrapper>
            </PostBtm>
          </Post>
        </MainWrapper>
        <MainWrapper>
          <Post>
            <PostTop>
              <ProfilePhoto></ProfilePhoto>
              <NameIdDate>
                <NameId>
                  <ProfileName>원은지</ProfileName>
                  <ProfileID>kfknkfdk</ProfileID>
                </NameId>
                <Date>2023-08-01</Date>
              </NameIdDate>
              <IconWrapper>
                <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
              </IconWrapper>
            </PostTop>
            <PostPhoto></PostPhoto>
            <PostBtm>
              <PostBtmL>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </PostBtmL>
              <TagWrapper>
                <TagWrapper1>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper1>
                <TagWrapper2>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper2>
              </TagWrapper>
            </PostBtm>
          </Post>
        </MainWrapper>
      </Main>
    </Container>
  );
};

const Tag = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f6cac9;
  border-radius: 24px;
  padding: 0px 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const TagWrapper1 = styled.div`
  display: flex;
  gap: 4px;
`;

const TagWrapper2 = styled.div`
  display: flex;
  gap: 4px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
`;

const Place = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const StarNumber = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: black;
`;

const StarIcon = styled.div`
  width: 40px;
  height: 40px;
  > img {
    width: 40px;
    height: 40px;
  }
`;

const IconNumber = styled.div`
  display: flex;
  gap: 10px;
`;

const PostBtmL = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const PostBtm = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  gap: 280px;
  margin-top: 12px;
`;

const PostPhoto = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 8px;
  border: 1px solid black;
`;

const IconWrapper = styled.div`
  margin-top: 15px;
  margin-left: 20px;
`;

const Date = styled.span`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.colors.gray800};
`;

const ProfileID = styled.span`
  font-size: 14px;
  color: black;
`;

const ProfileName = styled.span`
  font-size: 16px;
  color: black;
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
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const PostTop = styled.div`
  display: flex;
  width: 700px;
  height: 70px;
  align-items: center;
`;

const Post = styled.div`
  margin-top: 15px;
`;

const Ment = styled.span`
  width: 340px;
  height: 40px;
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 30px;
`;

const MainWrapper = styled.div`
  width: 700px;
  margin-left: 600px;
`;

const SidebarText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 400px;
  margin-top: 210px;
`;

const SidebarBtm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray600};
`;

const PostUpDate = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray600};
`;

const Header = styled.div`
  width: 1480px;
  height: 122px;
  position: fixed;
  top: 0;
  left: 340px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray800};
  display: flex;
  align-items: center;
  justify-content: right;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Group = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const CurrentGroup = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray500};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = styled.div`
  width: 400px;
  height: 100%;
  position: fixed;
  img {
    width: 322px;
    margin-top: 63px;
    margin-left: 63px;
    position: fixed;
  }
`;

const Main = styled.div`
  margin-top: 122px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  gap: 50px;
  flex-direction: column;
  border-color: none;
`;

export default HomePage;
