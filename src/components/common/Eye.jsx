import { FaEye, FaEyeSlash } from "react-icons/fa";
import { styled } from "styled-components";

const Eye = ({ isShowPassword, onClick }) => {
  return (
    <EyeContainer onClick={onClick}>
      {isShowPassword ? <FaEye /> : <FaEyeSlash />}
    </EyeContainer>
  );
};

const EyeContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  cursor: pointer;
`;

export default Eye;
