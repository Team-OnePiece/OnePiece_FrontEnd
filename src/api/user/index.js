import { instance } from "../axios";
import { useMutation } from "react-query";
import { useQuery } from "react-query";

export const Login = () => {
  const response = async (param) => {
    return instance.post("/user/login");
  };

  return useMutation(response, {
    onError: (e) => console.log(e),
    onSuccess: () => alert("환영합니다."),
  });
};

export const useSignupMutation = () => {
  const response = async (param) => {
    return instance.post("/user/signup");
  };

  //get을 제외한 나머지 친구들
  return useMutation(response, {
    onError: (e) => console.log(e),
    onSuccess: () => alert("회원가입에 성공하였습니다."),
  });
};

export const useNicknameDuplicate = () => {
  const response = async (param) => {
    return instance.get("/user/nickname/duplicate");
  };

  return useQuery("nickname", response);
};

export const useIdDuplicate = () => {
  const response = async (param) => {
    return instance.get("/user/id/duplicate");
  };
  return useQuery("id", response);
};

export const useStudentDuplicate = () => {
  const response = async (param) => {
    return instance.get("/user/student/id/duplicate");
  };
  return useQuery("student", response);
};
