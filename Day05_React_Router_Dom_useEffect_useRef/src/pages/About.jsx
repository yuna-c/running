import { useEffect, useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    //여기
    console.log('카운트가 변경된 케이스');
  }, [count]);

  useEffect(() => {
    //여기
    console.log('카운트2가 변경된 케이스');
  }, [count2]);

  useEffect(() => {
    // 호출 횟수 최다
    console.log('최초 렌더링 시에만 호출');
  }, []);

  return (
    <div className="About">
      {' '}
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        증가
      </button>
      <br />
      <h3>{count2}</h3>
      <button
        onClick={() => {
          setCount2((count) => count - 1);
        }}
      >
        감소
      </button>
    </div>
  );
};
export default About;
