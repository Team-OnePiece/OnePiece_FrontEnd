import React from "react";
import { styled } from "styled-components";

function SignUp() {
  return (
    <Container>
      <LogoImg src="/image/Logo.png" />
    </Container>
  );
}

const LogoImg = styled.img``;

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
`;

export default SignUp;
