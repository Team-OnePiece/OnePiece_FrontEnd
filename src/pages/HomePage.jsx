import { styled } from "styled-components";
import { Logo } from "../assets";
import { Star } from "../assets";
import { useState } from "react";
import Post from "../components/common/Post";
import axios from "axios";

const HomePage = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <Container>
      <Header>원은지님, 안녕하세요</Header>
      <Sidebar>
        <img src={Logo} alt="로고" />
        <SidebarText>
          <GroupWrapper>
            <CurrentGroup onClick={() => setIsTextVisible(!isTextVisible)}>
              2023
            </CurrentGroup>
            {isTextVisible && (
              <Groups>
                <Group>2022</Group>
                <Group>2021</Group>
                <Group>1-4(2021)</Group>
              </Groups>
            )}
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
          <Post />
        </MainWrapper>
        <MainWrapper>
          <Post />
        </MainWrapper>
        <MainWrapper>
          <Post />
        </MainWrapper>
      </Main>
    </Container>
  );
};

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
  margin-top: 210px;
`;

const SidebarBtm = styled.div`
  position: fixed;
  bottom: 40px;
  left: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 32px;
`;

const PostUpDate = styled.div`
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
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
