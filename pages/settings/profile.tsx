import type { NextPageWithLayout } from '../_app'
import Layout from '@/components/common/layout/layout'

type PageProps = {}

const ProfileSettings: NextPageWithLayout = (props: PageProps) => {

  return (
    <div className="p-3">
      <h2 className="text-3xl mb-5 underline underline-offset-8 select-none cursor-text">
        Profile
      </h2>
    </div>
  )
}

ProfileSettings.getLayout = Layout

export default ProfileSettings