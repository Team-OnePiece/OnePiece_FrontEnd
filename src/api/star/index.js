import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";

export const useStarAdd = () => {
  const response = async (param) => {
    return instance.post("/star{feedId}");
  };

  return useMutation(response, {
    onError: () => alert("반응추가에 실패하였습니다."),
    onSuccess: () => alert("반응추가에 성공하였습니다."),
  });
};

export const useStarDelete = () => {
  const response = async (param) => {
    return instance.delete("/star{feedId}");
  };

  return useMutation(response, {
    onError: () => alert("반응추가에 실패하였습니다."),
    onSuccess: () => alert("반응추가에 성공하였습니다."),
  });
};
