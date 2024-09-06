import { useSearchParams } from 'react-router-dom';

const MyPage = () => {
  // mypage?name=김하르방&age=24
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  console.log(name, age);

  return (
    <div className="MyPage">
      {/* ~~님 안녕하세요. N살이시군요! */}
      {name}님 안녕하세요. {age}살이시군요!
      <button
        style={{ width: 'auto', background: 'rgb(70 111 189)', color: '#fff' }}
        onClick={() => setSearchParams(`name=${name}&age=40`)}
      >
        40살로 바뀜
      </button>
      <button
        style={{ width: 'auto', background: 'rgb(189 70 135)', color: '#fff' }}
        onClick={() => setSearchParams({ name: name, age: 24 })}
      >
        {age}살로 바뀜
      </button>
    </div>
  );
};
export default MyPage;
