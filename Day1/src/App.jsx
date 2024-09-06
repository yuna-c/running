import { useState } from 'react';
import './App.css';

// 1
// function App() {
//   // 리액트는 state의 변경을 감지해서 화면을 리렌더링
//   const [count, setCount] = useState(0);
//   // console.log(count, setCount);
//   console.log(useState(count + 1)); // array
//   console.log('정말 다시 실행 될까요?'); // array

//   return (
//     <>
//       <h1>현재 count</h1>
//       <h2 style={{ fontSize: 50 }}>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//     </>
//   );
// }

// 2
// function App() {
//   const [user, setUser] = useState({ name: '홍길동', age: 25 });
//   const [items, setItems] = useState(['사과', '바나나', '오렌지']);

// TODO: 구조분해할당(Destructuring) 코드를 여기 아래에 작성하세요.
// 1
// const name = user.name;
// const age = user.age;

// 2
//   const { name, age } = user;
//   const [firstItem, secondItem, thirdItem] = items;

//   console.log('re-render');
//   return (
//     <div>
//       <h1>사용자 정보</h1>
//       <p>이름: {name}</p>
//       <p>나이: {age}</p>

//       <h2>아이템 목록</h2>
//       <ul>
//         {items.map((fruit, idx) => (
//           <li key={idx}>{fruit}</li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//           const newItems = ['복숭아'];
//           console.log(newItems);
//           setUser({ name: '김철수', age: 30 });
//           setItems([...items, newItems]);
//         }}
//       >
//         이름 변경하기
//       </button>
//     </div>
//   );
// }

// 3
// const App = () => {
//   // setUser 식별자 처럼 이름 정해주는 거라 이름 바껴도 됨
//   const [user, setUser] = useState({
//     name: '홍길동',
//     age: 25
//   });
//   const [items, setItems] = useState(['사과', '바나나', '오렌지', 'a1', 'a2', 'a3']);
//   const [inputFruit, setInputFruit] = useState('');

//   // console.log('re-render');
//   const { name, age } = user;
//   const addNewItem = (e) => {
//     e.preventDefault();
//     alert('새로운 아이템을 추가하는 함수가 호출 되었어요');

//     // 원래있던 items 배열에서 inputFruit의 값을 끼워넣어서
//     // setItems를 해주면 되는구나..!!
//     console.log(`inputFruits => `, setInputFruit);

//     // (1) 새로운 배열
//     const newArr = [...items, inputFruit];
//     setItems(newArr);
//   };

//   // input 관리 위한 2가지
//   // value, onChange
//   return (
//     <>
//       <h1>사용자 정보</h1>
//       <p>이름: {name}</p>
//       <p>나이: {age}</p>
//       <h2>아이템 목록</h2>

//       <form onSubmit={addNewItem}>
//         {/* form 안에서는 어딘 가로 제출하기 때문에 submit이 발생하며 새로고침 됨, trriger로 작동되게 하는 애들 : type='submit', type='button' */}
//         <input
//           type='text'
//           value={inputFruit}
//           onChange={(e) => {
//             const newText = e.target.value;
//             setInputFruit(newText);
//           }}
//         />
//         <button type='submit'>제출</button>
//       </form>

//       <ul>
//         {/*
//         <li>{items[0]}</li>
//         <li>{items[1]}</li>
//         <li>{items[2]}</li>
//         */}
//         {/* li 태그에 사과 없애줘 */}
//         {items
//           .filter((i) => i !== '사과')
//           .map((item, idx) => {
//             return (
//               <li key={item} id={idx}>
//                 {item}
//                 <span>
//                   <button
//                     type='button'
//                     onClick={() => {
//                       alert(item);
//                       // 1. 삭제된리스트 생성
//                       // 원래 리스트에서 item을 빼주면 됨!
//                       const filteredItems = items.filter(function (아이템) {
//                         if (아이템 === item) {
//                           return false;
//                         } else {
//                           return true;
//                         }
//                       });
//                       // 2. setItems
//                       setItems(filteredItems);
//                     }}
//                   >
//                     ❌
//                   </button>
//                 </span>
//               </li>
//             );
//           })}
//       </ul>

//       <button onClick={() => items.forEach((item) => console.log(item))}>콘솔로그 출력버튼</button>
//     </>
//   );
// };
// https://exciting-delivery-7b0.notion.site/b9c4860307d84cda8d763c47016f7ada
// TODOLIST 만들기
const App = () => {
  const 초기값 = [
    {
      id: 1,
      title: '빨래하기',
      isDone: false
    },
    {
      id: 2,
      title: '고양이 밥주기',
      isDone: true
    },
    {
      id: 3,
      title: '환기하기',
      isDone: false
    }
  ];
  const [todos, setTodos] = useState(초기값);
  const [newTodoTitle, setNewTodoTitle] = useState('abc');

  console.log('todos => ', todos);

  return (
    <div>
      <form
        onSubmit={function (e) {
          e.preventDefault();

          // 1) 갱신할 배열(객체로 이루어진)를 새롭게 만들어주기(아이템 하나가 추가된 배열)
          const newTodoList = [
            ...todos,
            {
              id: new Date().getTime(),
              title: newTodoTitle,
              isDone: false
            }
          ];

          // 2) setTodos
          setTodos(newTodoList);

          // 인풋에 입력된 값 제거
          setNewTodoTitle('');
        }}
      >
        <input
          value={newTodoTitle}
          onChange={function (e) {
            setNewTodoTitle(e.target.value);
          }}
        />
        <button type='submit'>추가</button>
      </form>

      <h3>할일목록</h3>
      {todos
        .filter(function (todo) {
          if (todo.isDone === true) {
            return false;
          } else {
            return true;
          }
        })
        .map(function (할일) {
          return (
            <div key={할일.id}>
              {할일.title}
              <span
                onClick={function () {
                  console.log('선택된 아이템 => ', 할일);

                  // 원래 있던 todos에서 이 할일만 제거(setState)
                  const 필터링결과 = todos.filter(function (대상) {
                    if (대상.id === 할일.id) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  setTodos(필터링결과);
                }}
              >
                [x]
              </span>
              <button
                onClick={() => {
                  alert('완료 버튼이 클릭됐어요!!');
                  const 완료처리가된배열 = todos.map((todo) => {
                    if (todo.id === 할일.id) {
                      // 객체라서 뜯어서 다시 처리할 수 있음
                      return { ...todo, isDone: true };
                    } else {
                      return todo;
                    }
                  });
                  //[];
                  setTodos(완료처리가된배열);
                }}
              >
                완료
              </button>
            </div>
          );
        })}

      <h3>완료목록</h3>
      {todos
        .filter(function (todo) {
          if (todo.isDone === true) {
            return true;
          } else {
            return false;
          }
        })
        .map(function (할일) {
          return (
            <div key={할일.id}>
              {할일.title}
              <span
                onClick={function () {
                  alert('삭제 버튼이 클릭됐어요!!');
                  const 필터링결과 = todos.filter(function (대상) {
                    if (대상.title === 할일.title) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  setTodos(필터링결과);
                }}
              >
                [x]
              </span>
              <button
                onClick={() => {
                  alert('완료 버튼이 클릭됐어요!!');
                  const 완료처리가된배열 = todos.map((todo) => {
                    if (todo.id === 할일.id) {
                      return { ...todo, isDone: false };
                    } else {
                      return todo;
                    }
                  });
                  //[];
                  setTodos(완료처리가된배열);
                }}
              >
                취소
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default App;
