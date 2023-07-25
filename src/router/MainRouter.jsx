import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import NotFoundPage from "../pages/NotFoundPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default MainRouter;
