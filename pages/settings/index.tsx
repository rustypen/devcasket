import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/common/layout/layout'

type PageProps = {}

const Settings: NextPageWithLayout = (props: PageProps) => {

  return (
    <div className="p-3">
      <h2 className="text-3xl mb-5">
        Profile
      </h2>
    </div>
  )
}

Settings.getLayout = Layout

export default Settings

export async function getStaticProps() {

  return {
    redirect: {
      destination: '/settings/profile',
      // permanent: false,
      statusCode: 301
    },
  }

}