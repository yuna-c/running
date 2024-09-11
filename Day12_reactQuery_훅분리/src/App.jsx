import { useState } from 'react'
import { usePosts } from './hooks/queries'
import { useAddPost } from './hooks/mutations'
import axios from 'axios'

export const getPosts = async () => {
  const { data } = await axios.get('http://localhost:4000/posts')
  return data
}
export default function App() {
  const [title, setTitle] = useState('')
  const [views, setViews] = useState(0)

  // Post 목록 불러오기
  const { isLoading, isError, data } = usePosts()

  // Post 추가 Mutation
  const mutation = useAddPost()

  if (isError) return <div>에러가 발생했습니다.</div>
  if (isLoading) return <div>로딩 중...</div>

  return (
    <div className="App">
      <div>
        <input type="text" value={title} placeholder="제목을 입력하세요" onChange={(e) => setTitle(e.target.value)} />
        <input type="number" value={views} placeholder="조회수를 입력하세요" onChange={(e) => setViews(Number(e.target.value))} />
        <button
          onClick={() =>
            mutation.mutate({
              title,
              views
            })
          }
        >
          추가
        </button>
      </div>
      {data.map((post) => (
        <div key={post.id}>
          {post.title}, {post.views}
        </div>
      ))}
    </div>
  )
}
