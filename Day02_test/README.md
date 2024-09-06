<<<<<<< HEAD
# 특강 기록 전용 저장소

![d46c76f0eeeb72cad248d443f92cb131.gif](https://github.com/user-attachments/assets/fff41424-adc9-4676-8b8a-d3b6225c4c25)
=======
# ✅ **과제 수행 방법**

1. 각 문제에 대한 별도 프로젝트를 만듭니다.

```bash
yarn create vite nbcamp-standard-hw01-01 --template react
yarn create vite nbcamp-standard-hw01-02 --template react
yarn create vite nbcamp-standard-hw01-03 --template react
```

2. 각 문제에 대해 프로젝트에서 코드를 작성합니다.
3. git repository를 생성하여, 업로드(add / commit / push) 한 후 repo 주소를 제출합니다.

---

# 🌞 1번 문제

☝ **요구사항**

- 아래의 `App.jsx` 파일을 `Header.jsx`, `Content.jsx`, `Footer.jsx` 세 개의 파일로 분리하세요.
- 각 컴포넌트는 단순히 UI만 렌더링합니다.
- 컴포넌트 간에 props 전달은 필요하지 않습니다.

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
```

---

# 🌞 2번 문제

☝ **요구사항**

- 아래의 `App.jsx` 파일을 `Header.jsx`, `Content.jsx`, `Footer.jsx` 세 개의 파일로 분리하세요.
- 분리한 후, `Header` 컴포넌트로 `title` props를 전달하여 제목을 설정하세요.
- `Footer` 컴포넌트로 `year` props를 전달하여 연도를 설정하세요.

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
```

---

# 🌞 3번 문제

☝ **요구사항**

- 아래의 `App.jsx` 파일을 `Header.jsx`, `Counter.jsx`, `Content.jsx`, `Footer.jsx`, `Status.jsx` 다섯 개의 파일로 분리하세요.
- `App` 컴포넌트에서 `count`라는 `state`를 관리하고, 이 값을 `Counter` 컴포넌트와 `Status` 컴포넌트에 `props`로 전달하세요.
- `Counter` 컴포넌트는 `increment` 함수를 사용해 `count`를 증가시킬 수 있어야 합니다.
- `Status` 컴포넌트는 `count` 값에 따라 메시지를 동적으로 표시합니다.
- `Header` 컴포넌트로 `title` props를 전달하여 제목을 설정하세요.
- `Footer` 컴포넌트로 `year` props를 전달하여 연도를 설정하세요.

```javascript
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Welcome to my website!</p>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>{count > 10 ? 'High count!' : 'Keep counting...'}</p>
      </div>

      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
```
>>>>>>> 40b154eef6fa8e12e35cce8be6062a70bfbe19d6
