import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPosts } from '../api/main'
import { QUERY_KEYS } from '../../constants/queryKeys'

// Post 추가하는 Mutation 훅
export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addPosts,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.POSTS]) // 성공 시 포스트 목록 갱신
    }
  })
}

// const mutation = useMutation({
//   mutationFn: addPosts,
//   onSuccess: () => {
//     queryClient.invalidateQueries(['posts'])
//   }
// })

// export const useAddPost = () => {
//   return useMutation()
// }

// const mutation = useMutation({
//   mutationFn: addPosts,
//   onSuccess: () => {
//     queryClient.invalidateQueries(['posts'])
//   }
// })
