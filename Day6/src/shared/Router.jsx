import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import MyProfile from '../components/myProfile';
import MyLike from '../components/MyLike';
import MyLayout from '../components/MyLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 얘만 나온다 */}
        <Route path="/my" element={<MyLayout />}>
          {/* Outlet 이 아이는 /my/like이 나온다 */}
          <Route path="profile" element={<MyProfile />} />
          <Route path="like" element={<MyLike />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
