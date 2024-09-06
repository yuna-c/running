import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
// http://localhost:4000/posts

export default function App() {
  const queryClient = useQueryClient()
  const getPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts')
    return data
  }

  const addPosts = async (newPost) => {
    await axios.post('http://localhost:4000/posts', {
      title: newPost.title,
      views: newPost.views
    })
  }

  const [title, setTitle] = useState('')
  const [views, setViews] = useState(0)

  const mutation = useMutation({
    mutationFn: addPosts,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })
  const { isLoading, isError, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  if (isError) return <div>isError</div>
  if (isLoading) return <div>isLoading</div>

  return (
    <div className="App">
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={views} onChange={(e) => setViews(e.target.value)} />
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
      {data.map((post) => {
        return (
          <div key={post.id}>
            {post.title},{post.views}
          </div>
        )
      })}
    </div>
  )
}
