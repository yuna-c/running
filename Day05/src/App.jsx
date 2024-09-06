import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Like from './pages/Like';
import MyPage from './pages/MyPage';
import MyPageDetail from './pages/MyPageDetail';
import MyDetailDetail from './pages/MyDetailDetail';

const App = () => {
  // const navigate = useNavigate();

  return (
    <>
      <nav>
        <button /*onClick={() => {navigate('/')}} */>
          <Link to="/">Home</Link>
        </button>
        <button /*onClick={() => {navigate('/about')}} */>
          <Link to="/about">About</Link>
        </button>
        <button /*onClick={() => {navigate('/mypage')}} */>
          <Link to="/mypage">myPage</Link>
        </button>
        <button /*onClick={() => {navigate('/mypage/:name')}} */>
          <Link to="/mypage/:name">김흐린눈의 마이페이지</Link>
        </button>
      </nav>

      <Routes>
        {/* 어디로 오면 어디로 보낼지!!! */}
        {/* 1. 어디로 오면 : path */}
        {/* 2. 어디로 보낼지 : element */}

        {/* TDOO: Route를 이용해서 about, like, mypage 페이지 만들기 */}
        {/* 별도 컴포넌트 파일을 만들지 말고 App.jsx 안에서 바로 작성하기 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/like" element={<Like />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/:name" element={<MyPageDetail />} />
        <Route path="/mypage/:name/:age" element={<MyDetailDetail />} />
      </Routes>
    </>
  );
};

export default App;
