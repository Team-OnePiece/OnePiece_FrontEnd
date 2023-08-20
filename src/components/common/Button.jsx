import { styled } from "styled-components";

const Button = ({ text, disabled }) => {
  return <ButtonBox disabled={disabled}>{text}</ButtonBox>;
};

const ButtonBox = styled.button`
  font-size: 20px;
  width: 600px;
  height: 60px;
  border: none;
  background-color: rgb(64, 68, 60);
  border-radius: 10px;
  color: white;
`;

export default Button;
