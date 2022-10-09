import { ReactElement } from 'react'
import { useRouter } from "next/router"
import useSwr from "swr"
import { getUser, supabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs"
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import Layout from '../components/common/layout/layout'
import PullRequestPost from '../components/common/models/pull-request/post'
import GistPost from '../components/common/models/gist/post'
import CommitPost from '@/components/common/models/commit/post'

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  
  const onSignOut = () => {
    supabaseClient.auth.signOut()
      .then(() => router.push('/login'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="">
      <div className="m-3">
        <div className=''>
          <PullRequestPost />
        </div>
        <hr className='w-full h-1 bg-gray-100 my-6 border-none'/>
        <div className=''>
          <CommitPost />
        </div>
        <hr className='w-full h-1 bg-gray-100 my-6 border-none'/>
        <div className=''>
          <GistPost />
        </div>
        
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = withPageAuth({
  redirectTo: '/login'
})

Home.getLayout = Layout
