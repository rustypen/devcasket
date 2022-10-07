import React from 'react'
import Layout from '@/components/common/layout/layout'
import { NextPageWithLayout } from 'pages/_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitbucket, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { SwitchUnstyled } from "@mui/base"
import Switch from '@mui/material/Switch';

const ConnectedAccount = ({icon, label}: any) => {
  return (
    <div className='my-3 flex items-center justify-between w-full border bg-slate-100 p-4 rounded'>
      <div>
        <FontAwesomeIcon icon={icon} />
        <span className='ml-3'>
          {label}
        </span>
      </div>
      <div>
        <Switch
          color='info'
          disableRipple={true}
        />
      </div>
    </div>
  )
}

const ACCOUNTS = [
  {
    label: "Github",
    icon: faGithub,
  },
  {
    label: "Gitlab",
    icon: faGitlab,
  },
  {
    label: "BitBucket",
    icon: faBitbucket,
  },
]

type Props = {}

const Authentication: NextPageWithLayout = ({}: Props) => {
  return (
    <div className="p-3">
      <h2 className="text-3xl mb-5 underline underline-offset-8 select-none cursor-text">
        Account
      </h2>
      <div>
        <h3 className='text-xl my-4'>
          Connected Accounts
        </h3>
        {
          ACCOUNTS.map(item => (
            <ConnectedAccount key={item.label} {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Authentication

Authentication.getLayout = Layout;