import axios from 'axios'

export const getPost = async () => {
  const { data } = await axios.get('http://localhost:5000/posts')
  return data
}

export const addPost = async (newPo) => {
  await axios.post('http://localhost:5000/posts', {
    title: newPo.titles,
    views: newPo.views
  })
}
