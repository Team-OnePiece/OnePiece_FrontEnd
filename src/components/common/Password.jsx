import { styled } from "styled-components";
import Eye from "./Eye";
import { useState } from "react";

const PasswordInput = ({ id, placeholder, onChange, value }) => {
  const [isOpenPasswordEye, setIsOpenPasswordEye] = useState(false);
  const onEyeClickHandle = () => {
    setIsOpenPasswordEye(!isOpenPasswordEye);
  };
  return (
    <PasswordWrapper>
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={isOpenPasswordEye ? "text" : "password"}
      />
      <Eye isShowPassword={isOpenPasswordEye} onClick={onEyeClickHandle} />
    </PasswordWrapper>
  );
};

export default PasswordInput;

const PasswordWrapper = styled.div`
  position: relative;
  > input {
    width: 700px;
    height: 70px;
    border-radius: 10px;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    &:focus {
      border-color: ${({ theme }) => theme.colors.MAIN1};
    }
    &::placeholder {
      font-size: 20px;
    }
  }
`;
