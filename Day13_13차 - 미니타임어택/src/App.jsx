import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './App.css'

import { useState } from 'react'
import { addPost, getPost } from './axios'
// http://localhost:5000/posts

function App() {
  const queryClient = useQueryClient()
  const [titles, setTitles] = useState('')
  const [views, setViews] = useState(0)

  const { isLoading, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPost
  })

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })

  if (isLoading) return <div>아 서버 좀 잘 껐다 키자</div>

  return (
    <>
      <div>
        <form>
          <input type="text" value={titles} onChange={(e) => setTitles(e.target.value)} />
          <input type="number" value={views} onChange={(e) => setViews(Number(e.target.value))} />
          <button
            type="button"
            onClick={() =>
              mutation.mutate({
                titles,
                views: Number(views)
              })
            }
          >
            추가
          </button>
        </form>
        {data?.map((post) => {
          return (
            <div key={post.id}>
              <p>타이틀 : {post.title}</p>
              <p>뷰 : {post.views}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
