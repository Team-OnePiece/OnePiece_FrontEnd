import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const useFeedDelete = () => {
  const response = async (param) => {
    return instance.delete("/user/feed{feedId}");
  };

  return useMutation(response, {
    onError: () => {},
    onSuccess: () => {},
  });
};

export const useFeedWatch = () => {
  const response = async (param) => {
    return instance.get("/feed");
  };
  return useQuery("feedwatch", response);
};
