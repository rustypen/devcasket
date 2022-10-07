import React from 'react'
import Layout from '@/components/common/layout/layout'
import { NextPageWithLayout } from 'pages/_app'

type Props = {}

const Authentication: NextPageWithLayout = ({}: Props) => {
  return (
    <div className="p-3 border text-indigo-500">
      {/* <h2 className="text-3xl mb-5 underline underline-offset-8 select-none cursor-text">
      </h2> */}
    </div>
  )
}

export default Authentication

Authentication.getLayout = Layout;