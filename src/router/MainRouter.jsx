import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLoginPage from "../pages/MainLoginPage";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default MainRouter;
