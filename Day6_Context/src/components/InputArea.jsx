import React from 'react';
import InputTagArea from './InputTagArea';

const InputArea = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        backgroundColor: 'aqua'
      }}
    >
      <div>스탠다드반</div>
      <div>
        <InputTagArea />
      </div>
    </div>
  );
};

export default InputArea;
