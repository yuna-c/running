import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

function App() {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   // (비동기) 함수 만들고
  //   const fetchData = async () => {
  //     const { data } = await axios.get('http://localhost:4000/posts')
  //     console.log(data)
  //     setPosts(data)
  //   }
  //   // 함수 실행
  //   fetchData()
  // }, [])

  // 한개의 인자 -> 객체
  const queryClient = useQueryClient()

  const getPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts')
    return data
  }

  const addPost = async (newPost) => {
    await axios.post('http://localhost:4000/posts', {
      title: newPost.title,
      views: newPost.value
    })
  }

  /** useState */
  const [title, setTitle] = useState('')
  const [views, setViews] = useState(0)

  /* mutation */
  // mutate(메서드) addMutation.mutate
  // mutateAsync
  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      alert('포스트 정보 입력이 완료되었습니다!!')
      queryClient.invalidateQueries(['posts'])
    }
  })

  const { isLoading, isError, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  // console.log('post=>', post)
  // console.log('isLoading =>', response.isLoading)

  if (isLoading) return <div>로딩</div>
  if (isError) return <div>에러</div>

  return (
    <>
      <div>Main</div>
      <div>
        <h3>입력폼</h3>
        title : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        views : <input type="text" value={views} onChange={(e) => setViews(e.target.value)} />
        <button
          onClick={() =>
            addMutation.mutate({
              title,
              views
            })
          }
        >
          입력
        </button>
      </div>
      {data.map((post) => (
        <div key={post.id}>
          제목 : {post.title}(뷰 : {post.views})
        </div>
      ))}
    </>
  )
}

export default App
