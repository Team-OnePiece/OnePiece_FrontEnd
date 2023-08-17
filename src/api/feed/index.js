import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const useFeedDelete = () => {
  const response = async (param) => {
    return instance.delete("/user/feed{feedId}");
  };

  return useMutation(response, {
    onError: () => alert("게시글 삭제에 실패하였습니다."),
    onSuccess: () => alert("게시글 삭제에 성공하였습니다."),
  });
};

export const useFeedWatch = () => {
  const response = async (param) => {
    return instance.get("/feed");
  };
  return useQuery("feedwatch", response);
};
