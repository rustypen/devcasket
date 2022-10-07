import { createClient } from '@supabase/supabase-js'
import { useCallback, useEffect, useState } from 'react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const useSupabase = () => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [session, setSession] = useState<any>(null)

  supabase.auth.onAuthStateChange((_event, newSession) => {
    setSession(newSession);
    setCurrentUser(newSession?.user)
  })

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: {session}, error}) => {
        setSession(session),
        setCurrentUser(session?.user)
      })
  }, [session?.user?.id])

  return { currentUser, session }
}