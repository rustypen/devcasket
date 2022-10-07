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

type Props = {};

function PullRequestPost({}: Props) {
  return (
    <div className='shadow rounded'>
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
      <div className='flex gap-3 mt-3 px-3'>
        <span className='w-[20px]'>
          <GitRepositoryFill width={20} height={20} />
        </span>
        <a
          className='text-blue-600 font-semibold'
          href='https://github.com/superflycss/utilities-icons'
        >
          superflycss/utilities-icons
        </a>
      </div>
      {/* <div className='flex gap-3 mt-3 px-3 text-sm'>
          <span className='w-[20px]'>
            <TimeLine width={16} height={16}/>
          </span>
          <time dateTime='23/04/2022'>23/04/2022</time>
        </div> */}
      <div className='flex gap-3 text-sm px-3 my-3'>
        <span className='w-[20px]'>
          <UserLine width={20} height={20} />
        </span>
        <div className='flex gap-2'>
          <Image
            width={20}
            height={20}
            alt='user-avatar'
            src='https://source.unsplash.com/random/500x500/'
            className='rounded-full block'
          />
          <Link href='/'>
            <a>Author</a>
          </Link>
        </div>
      </div>
      <div className='flex gap-3 text-sm px-3 my-3'>
        <span className='w-[20px]'>
          <Hashtag width={20} height={20} />
        </span>
        <div className='text-xs'>
          <span className='bg-red-400 inline-block px-2 py-1 rounded-lg mr-2'>
            Tag1
          </span>
          <span className='bg-green-400 inline-block px-2 py-1 rounded-lg mr-2'>
            Tag3
          </span>
        </div>
      </div>
      <div className='flex gap-3 text-sm px-3 pb-3 mt-3'>
        <span className='w-[20px]'>
          <EditLine width={20} height={20} />
        </span>
        <div>
          <Link href='/'>
            <a className='text-blue-600 font-semibold'>6 commits</a>
          </Link>
          <span>&nbsp;&&nbsp;</span>
          <Link href='/'>
            <a className='text-blue-600 font-semibold'>14 Files</a>
          </Link>
          <span>&nbsp;Changed</span>
        </div>
      </div>
    </div>
  );
}

export default PullRequestPost;
