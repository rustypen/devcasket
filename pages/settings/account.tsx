import React, { ChangeEvent } from 'react'
import Layout from '@/components/common/layout/layout'
import { NextPageWithLayout } from 'pages/_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitbucket, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import Switch from '@mui/material/Switch';
import { supabase } from '@/utils/supabaseClient'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type ConnectedAccountProps = {
  icon: IconProp,
  label: string,
  signInWithGithub: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const ConnectedAccount = (props: ConnectedAccountProps) => {
  const {icon, label, signInWithGithub} = props
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
          onChange={signInWithGithub}
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
  async function signInWithGithub(e: ChangeEvent<HTMLInputElement>, checked: boolean) {
    if (checked) {
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'github',
      })
    }
  }
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
            <ConnectedAccount
              {...item}
              key={item.label}
              signInWithGithub={signInWithGithub}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Authentication

Authentication.getLayout = Layout;