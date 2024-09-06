import { useParams } from 'react-router-dom';

const MyPageDetail = () => {
  const params = useParams();
  // console.log(params);
  const name = params.name;

  return <div>{name}님 안녕하세요.</div>;
};

export default MyPageDetail;
