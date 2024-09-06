import { useContext } from 'react';
import { CountContext } from '../App';

const ListArea = () => {
  const { count } = useContext(CountContext);
  return <div>ListArea, count: {count}</div>;
};

export default ListArea;
