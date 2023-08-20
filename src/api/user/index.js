import { instance } from "../axios";
import { useMutation } from "react-query";

export const login = () => {
  const response = async (param) => {
    return instance.post("/user/login");
  };

  return useMutation(response, {
    onError: (e) => console.log(e),
    onSuccess: () => alert("환영합니다."),
  });
};
