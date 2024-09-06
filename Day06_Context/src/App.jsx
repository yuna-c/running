import React, { createContext, useState } from 'react';
import InputArea from './components/InputArea';
import ListArea from './components/ListArea';

export const CountContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count: count, setCount: setCount }}>
      {count}
      <InputArea />
      <ListArea />
    </CountContext.Provider>
  );
};

export default App;
