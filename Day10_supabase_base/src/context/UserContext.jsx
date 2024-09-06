import { createContext, useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
    }

    getSession()

    // SIGNED_IN: 사용자가 로그인했을 때
    // SIGNED_OUT: 사용자가 로그아웃했을 때
    // PASSWORD_RECOVERY: 비밀번호 복구가 시작되었을 때
    // USER_UPDATED: 사용자의 정보가 업데이트되었을 때
    // TOKEN_REFRESHED: 세션 토큰이 갱신되었을 때
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
