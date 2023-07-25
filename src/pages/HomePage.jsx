import { styled } from "styled-components";
import { Logo } from "../assets";
import { useState } from "react";

const HomePage = () => {
  return (
    <Container>
      <img src={Logo} alt="로고" />
    </Container>
  );
};

const Container = styled.div``;

export default HomePage;
