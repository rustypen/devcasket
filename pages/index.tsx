import { ReactElement } from 'react'
import { useRouter } from "next/router"
import { getUser, supabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs"
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import Layout from '../components/common/layout/layout'
import PullRequestPost from '../components/common/models/pull-request/post'
import GistPost from '../components/common/models/gist/post'

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const onSignOut = () => {
    supabaseClient.auth.signOut()
      .then(() => router.push('/login'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="">
      <div className="m-3 grid grid-cols-1 divide-y">
        <div className='pb-4'>
          <PullRequestPost />
        </div>
        <div className='py-4'>
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
