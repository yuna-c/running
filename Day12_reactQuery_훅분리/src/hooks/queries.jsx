import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys'
import { getPosts } from '../api/main' // getPosts 가져오기

// Post 목록 가져오는 훅
export const usePosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getPosts // 여기서 getPosts 호출
  })

// export const usePosts = () =>  {
//   return blabla
// }

// const { isLoading, isError, data } = useQuery({
//   queryKey: ['posts'],
//   queryFn: getPosts
// })
