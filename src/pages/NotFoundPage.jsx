import { styled } from "styled-components";

const NotFoundPage = () => {
  return (
    <Container>
      404
      <br />
      찾을 수 없는 페이지입니다.
    </Container>
  );
};

const Container = styled.p`
  font-size: 50px;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default NotFoundPage;
