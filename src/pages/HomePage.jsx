import { styled } from "styled-components";
import { Logo } from "../assets";
import Post from "../components/common/Post";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([
    // 초기 게시물 데이터
    { id: 1, profileName: "User1", profileId: "user1" },
    { id: 2, profileName: "User2", profileId: "user2" },
    // ... (이하 생략)
  ]);

  const handlePostDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId)); // 해당 postId에 해당하는 Post 삭제
  };
  return (
    <Container>
      <Header>User1님, 안녕하세요</Header>
      <Sidebar>
        <img src={Logo} alt="로고" />
        <SidebarText>
          <SidebarBtm>
            <PostUpDate>추가하기</PostUpDate>
            <MyPage to={"/mypage"}>마이페이지</MyPage>
          </SidebarBtm>
        </SidebarText>
      </Sidebar>
      <Main>
        <MainWrapper>
          <Ment>어떤 하루를 보냈나요?</Ment>
          <Post
            key={posts[0].id} // 첫 번째 게시물의 id 사용
            profileName={posts[0].profileName} // 첫 번째 게시물의 profileName 사용
            profileId={posts[0].profileId} // 첫 번째 게시물의 profileId 사용
            onDelete={() => handlePostDelete(posts[0].id)}
          />
        </MainWrapper>
        <MainWrapper>
          <Post
            key={posts[1].id} // 첫 번째 게시물의 id 사용
            profileName={posts[1].profileName} // 첫 번째 게시물의 profileName 사용
            profileId={posts[1].profileId} // 첫 번째 게시물의 profileId 사용
            onDelete={() => handlePostDelete(posts[1].id)}
          />
        </MainWrapper>
        <MainWrapper>
          <Post profileName="대마고" profileId="dsmdsm" />
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

const MyPage = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 32px;
  text-decoration: none;
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
