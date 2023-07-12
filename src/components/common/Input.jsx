import { styled } from "styled-components";

const Input = ({ ...props }) => {
  return <InputContainer {...props} />;
};
//버튼 컴포넌트도 이와 비슷한 형태로 만들면 돼요.

const InputContainer = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.gray400};
  padding: 0 20px;
  font-size: 20px;
`;

export default Input;
