import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: '',
      avatar: '',
      nickname: '',
      success: false,
      userId: '',
      isLoggedIn: false,
      setAccessToken: (token) => set({ accessToken: token }),
      setAvatar: (avatar) => set({ avatar }),
      setNickname: (nickname) => set({ nickname }),
      setSuccess: (success) => set({ success }),
      setUserId: (userId) => set({ userId }),
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn })
    }),
    {
      name: 'auth-storage', // 저장소 이름
      getStorage: () => localStorage // 로컬 스토리지 사용
    }
  )
)

export default useAuthStore
