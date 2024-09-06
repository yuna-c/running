import React, { useContext } from 'react';
import { CountContext } from '../App';

// 여기에 버튼을 만드세요
// 버튼을 누르면 1이 증가되도록 해주세요
const SubInputTagArea = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
};

export default SubInputTagArea;
