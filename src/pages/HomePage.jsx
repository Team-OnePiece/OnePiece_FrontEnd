import { styled } from "styled-components";
import { Logo } from "../assets";
import { Star } from "../assets";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const GroupToggle = () => {};
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
            <PostFooter>
              <FooterLeft>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </FooterLeft>
              <TagContainer>
                <TagWrapper>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper>
                <TagWrapper>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper>
              </TagContainer>
            </PostFooter>
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
            <PostFooter>
              <FooterLeft>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </FooterLeft>
              <TagContainer>
                <TagWrapper>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper>
                <TagWrapper>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper>
              </TagContainer>
            </PostFooter>
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
            <PostFooter>
              <FooterLeft>
                <IconNumber>
                  <StarIcon>
                    <img src={Star} alt="반응" />
                  </StarIcon>
                  <StarNumber>11</StarNumber>
                </IconNumber>
                <Place>배고파</Place>
              </FooterLeft>
              <TagContainer>
                <TagWrapper>
                  <Tag>은진쌤♡</Tag>
                  <Tag>헤헤</Tag>
                  <Tag>아에이오우</Tag>
                </TagWrapper>
                <TagWrapper>
                  <Tag>햅삐햅삐</Tag>
                  <Tag>으이에</Tag>
                  <Tag>...</Tag>
                </TagWrapper>
              </TagContainer>
            </PostFooter>
          </Post>
        </MainWrapper>
      </Main>
    </Container>
  );
};

const Tag = styled.div`
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
  margin-top: 8px;
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
  gap: 280px;
  width: 700px;
  height: 100px;
  margin-top: 12px;
`;

const PostPhoto = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
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
  border: 1px solid black;
  border-radius: 25px;
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 70px;
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
  align-items: center;
  justify-content: center;
  gap: 400px;
  margin-top: 210px;
`;

const SidebarBtm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 32px;
`;

const PostUpDate = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 32px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 340px;
  width: 1480px;
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: right;
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 30px;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Group = styled.div`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 24px;
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CurrentGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 32px;
`;

const Sidebar = styled.div`
  position: fixed;
  width: 400px;
  height: 100%;
  img {
    position: fixed;
    width: 322px;
    margin-top: 63px;
    margin-left: 63px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 122px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100%;
  border-color: none;
  background-color: ${({ theme }) => theme.colors.gray0};
`;

export default HomePage;
