import { Outlet, useNavigate } from 'react-router-dom';

const MyLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="MyLayout">
      <h1>
        MyLayout :<br /> 여기는 마이 영역입니다
      </h1>

      <Outlet />

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈
      </button>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        소개
      </button>
      <button
        onClick={() => {
          navigate('/my/profile');
        }}
      >
        프로필
      </button>
      <button
        onClick={() => {
          navigate('/my/like');
        }}
      >
        좋아요
      </button>
    </div>
  );
};
export default MyLayout;
