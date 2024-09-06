import './App.css';

function App() {
  const countryArray = ['대한민국', '일본'];
  countryArray.push('미국');
  console.log(countryArray);
  /*
  참조형 변수 (어느 공간을 참조 배열,객체,함수), 주소값에 매칭되는 값들이 변경 되는 것
  불변성 유지 시켜야 하는 이유
  */

  /*
  제어컴포넌트 <--> 비제어 컴포넌트
  제어 컴포넌트 : react에서 form요소의 입력값을 상태(state)로 관리하는 것
  ui 변경 동기화 장점 / 랜더링이 많은게 단점
  단일소스 : 데이터나 상태가 애플리케이션 내에 오직 하나의 출처에서 관리되고 참조된다는 원칙(form ex input : value, onchange)
  input으로 받은 value는 모두 string(형변환 필요) or or setAge(+event.target.value) <!-- 숫자로 변환!
  */

  /*
  early return vs if/else
  💛 early return : 유효성 검사시 리턴을해서 멈추지 않으면 다음 코드로 흐르기 때문에 return / return false로 끊어줘야함(함수 종료)
  if/ else
  */

  /*
  단수/복수 명확(semantic 하게), SEO(search enggein) 관점에서
  user => users
  ages => age
  */

  /*
  key값이 필요한 이유(리액트가 효율충이라서 unique함이 필요함)
  에러떠서.. 


  const [나라들, set나라들] = useStatee({
    id: new Date().getTime(), // id 필수다, uuid or getTime
    name: '일본',
    glod: 2,
    silver: 1
  });
  const new나라 = [
    ...나라들,
    {
      나라들
    }
  ];
  {나라들.map((나라) => {
    return <div key={id}>~~</div>;
  })}
  */

  return <></>;
}

export default App;
