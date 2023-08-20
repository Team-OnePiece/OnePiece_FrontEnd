import { instance } from "../axios";
import { useMutation } from "react-query";

export const tagCreation = () => {
  const response = async (param) => {
    return instance.post("/tag/{feedId}");
  };

  return useMutation(response, {
    onError: () => alert("태그 생성에 실패하였습니다."),
    onSuccess: () => alert("태그 생성에 성공하였습니다."),
  });
};

export const tagDelete = () => {
  const response = async (param) => {
    return instance.delete("/tag/{tagId}");
  };

  return useMutation(response, {
    onError: () => alert("태그 삭제에 실패하였습니다."),
    onSuccess: () => alert("태그 삭제에 성공하였습니다."),
  });
};
