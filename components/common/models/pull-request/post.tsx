import React from "react";
import Link from "next/link";
import Image from "next/image";
import GitPullRequestFill from "../../../../assets/icons/git-icons/git-pull-request-line.svg";
import GitRepositoryFill from "../../../../assets/icons/git-icons/git-repository-line.svg";
import CheckDoubleLine from "../../../../assets/icons/utility-icons/check-double-line.svg";
import TimeLine from "../../../../assets/icons/utility-icons/time-line.svg";
import UserLine from "../../../../assets/icons/utility-icons/user-line.svg";
import Hashtag from "../../../../assets/icons/utility-icons/hashtag.svg";
import EditLine from "../../../../assets/icons/utility-icons/edit-line.svg";

const PostItems = [
  {
    id: 1,
    icon: <GitRepositoryFill width={20} height={20} />,
    value: (
      <a
        className='text-blue-600 font-semibold'
        href='https://github.com/superflycss/utilities-icons'
      >
        superflycss/utilities-icons
      </a>
    )
  },
  {
    id: 2,
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
    id: 3,
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

type Props = {};

function PullRequestPost({}: Props) {
  return (
    <div>
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
            &nbsp;created a pull request&nbsp;
            <Link href='/'>
              <a className='text-blue-600 font-semibold'>#463</a>
            </Link>
            &nbsp;
            <span className="">
              3 mins ago
            </span>
          </div>
        </div>
      </header>
      <div className='rounded mt-3 bg-gray-100'>
        <div className=''>
          <h4 className='flex gap-3 px-3 pt-3'>
            <span className='w-[20px]'>
              <GitPullRequestFill width={20} height={20} />
            </span>
            <div>
              <div className='font-semibold text-lg'>
                Fixed a11y failing contrasts on greys
              </div>
              <div>
                <Link href='/'>
                  <a className='text-blue-600 font-semibold'>#463</a>
                </Link>
                &nbsp;opened by&nbsp;
                <Link href='/'>
                  <a className='text-blue-600 font-semibold'>SteveRoger</a>
                </Link>
              </div>
            </div>
          </h4>
          <div className='gap-3 text-sm bg-yellow-300 inline-flex py-1 px-3 my-3'>
            <span className='w-[20px]'>
              <CheckDoubleLine width={20} height={20} />
            </span>
            <span>Review Pending</span>
          </div>
        </div>
        <div className="p-3 pt-0">
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
  );
}

export default PullRequestPost;
