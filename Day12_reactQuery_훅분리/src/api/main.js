import baseInstance from '../axiosInstance/base'

// API 분리, custom instance화
export const getPosts = async () => {
  // const { data } = await axios.get('http://localhost:4000/posts')
  const { data } = await baseInstance.get('/posts')
  return data
}

export const addPosts = async (newPost) => {
  await baseInstance.post('/posts', {
    title: newPost.title,
    views: newPost.views
  })
}
