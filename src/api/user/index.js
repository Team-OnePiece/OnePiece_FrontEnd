import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const useSignupMutation = () => {
  const response = async (param) => {
    return instance.post("/user/signup");
  };

  //get을 제외한 나머지 친구들
  return useMutation(response, {
    onError: () => alert("회원가입에 실패하였습니다."),
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
    return instance.get("/user/student/duplicate");
  };
  return useQuery("student", response);
};
