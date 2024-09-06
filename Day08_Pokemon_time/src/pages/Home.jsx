import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/dex")}>Dex Page로 이동</button>
    </>
  );
};

export default Home;
