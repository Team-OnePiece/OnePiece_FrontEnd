import { instance } from "../axios";
import { useMutation } from "react-query";
import { useQuery } from "react-query";

// export const createPost = () => {
//   const response = async (param) => {
//     return instance.post("/user/signup");
//   };

//   return useMutation(response, {
//     onError: () => alert("게시글 생성에 실패하였습니다."),
//     onSuccess: () => alert("게시글 생성에 성공하였습니다."),
//   });
// };

export const useFeedDelete = () => {
  const response = async (param) => {
    return instance.delete(`/user/feed${param}`);
  };

  return useMutation(response, {
    onError: () => alert("게시글 삭제에 실패하였습니다."),
    onSuccess: () => alert("게시글 삭제에 성공하였습니다."),
  });
};

// export const editPost = () => {
//   const response = async (param) => {
//     return instance.patch("/feed/{feedId}");
//   };

//   return useMutation(response, {
//     onError: () => alert("게시그 수정에 실패하였습니다."),
//     onSuccess: () => alert("게시글 수정에 성공하였습니다."),
//   });
// };

export const useFeedWatch = () => {
  const response = async (param) => {
    return instance.get("/feed");
  };
  return useQuery("feedwatch", response);
};
