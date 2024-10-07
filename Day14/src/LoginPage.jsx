import axios from 'axios'
import { useState } from 'react'
import useAuthStore from '../zustand/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const { setAccessToken, setNickname, setUserId, setIsLoggedIn } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
      id,
      password
    })

    setAccessToken(res.data.accessToken)
    setNickname(res.data.nickname)
    setUserId(res.data.userId)
    setIsLoggedIn(true)

    alert('로그인 성공')
    navigate('/')
  }

  return (
    <main>
      <h3>로그인 페이지입니다.</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="아이디" onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
    </main>
  )
}

export default LoginPage
