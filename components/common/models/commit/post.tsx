import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit, faCodeBranch} from "@fortawesome/free-solid-svg-icons"
import { faMessage } from "@fortawesome/free-regular-svg-icons"
import Link from 'next/link'
import EditLine from "@/assets/icons/utility-icons/edit-line.svg";
import Hashtag from "@/assets/icons/utility-icons/hashtag.svg";
import Image from 'next/image'


type Props = {}


type CommitFeed = {
  type: "commit",
  message: string,
  Author: string,
  date: Date,
  commitSHA: string,
  branch: string,
}

const PostItems = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faCodeCommit} />,
    value: (
      <h4 className="font-semibold text-sm">
        1b9e9dd
      </h4>
    )
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faMessage} />,
    value: (
      <>
        Fixed a11y failing contrasts on greys
      </>
    )
  },
  {
    id: 3,
    icon: <EditLine width={20} height={20} />,
    value: (
      <>
        <span className='bg-red-400/10 text-red-400 inline-block px-2 py-1 rounded-full mr-2 font-semibold text-xs'>
          react
        </span>
        <span className='bg-green-400/10 text-green-400 inline-block px-2 py-1 rounded-full mr-2 font-semibold text-xs'>
          map
        </span>
      </>
    )
  },
  {
    id: 4,
    icon: <Hashtag width={20} height={20} />,
    value: (
      <>
        <Link href='/'>
          <a className='text-blue-600 font-semibold'>6 commits</a>
        </Link>
        <span>&nbsp;&&nbsp;</span>
        <Link href='/'>
          <a className='text-blue-600 font-semibold'>14 Files</a>
        </Link>
      </>
    )
  },
]

function CommitPost({}: Props) {
  return (
    <div className=''>
      <header className='flex gap-2 items-center'>
        <div>
          <Image
            width={40}
            height={40}
            alt='user-avatar'
            src='https://source.unsplash.com/random/500x500/'
            className='rounded-full block'
          />
        </div>
        <div>
          <div>
            <Link href='/'>
              <a className='text-blue-600 font-semibold'>Florian Rival</a>
            </Link>
            &nbsp;pushed to&nbsp;
            <Link href='/'>
              <a className='text-blue-600 font-semibold'>origin/main</a>
            </Link>
            &nbsp;3 mins ago
          </div>
        </div>
      </header>
      <div className="mt-3">
        <div className="bg-gray-100 rounded p-3">
          {
            PostItems.map(item => (
              <div key={item.id} className="flex gap-3 mt-1 items-center">
                <span className="w-[20px]">
                  {item.icon}
                </span>
                <div>{item.value}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CommitPost