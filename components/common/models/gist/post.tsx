import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"

type Props = {}

function GistPost({}: Props) {
  const [postContentHeight, setPostContentHeight] = useState<200|"initial">(200)

  const handleContentHeight = () => {
    setPostContentHeight(prev => (prev === 200) ? "initial" : 200)
  }

  return (
    <div>
      <header className='flex justify-between'>
        <div className='flex gap-2 items-center'>
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
            <Link href='/'>
              <a className='font-semibold'>Florian Rival</a>
            </Link>
            &nbsp;shared a gist yesterday
          </div>
        </div>
        <div>
          <button type='button' className='text-blue-500 p-2 rounded-full'>
            <FontAwesomeIcon icon={faUserPlus}/>
          </button>
        </div>
      </header>
      <div className='mt-3 shadow rounded bg-gray-100 overflow-hidden'>
        <main className='p-3 overflow-y-hidden' style={{maxHeight: postContentHeight}}>
          <div className='content text-sm'>

            <code className=''>
              def binarySearch(data, find, start, end):<br/>
              &ensp;&quot;&quot;&quot;<br/>
              &ensp;Search for a integer in a list of integers using a simple `Binary Search` algorithm<br/>
              &ensp;:param list data: list of integers sorted ascending<br/>
              &ensp;:param int find: integer to search for<br/>
              &ensp;:param int start: min array index<br/>
              &ensp;:param int end: max array index<br/>
              &ensp;:return int: index of &apos;find&apos; or -1 if not found<br/>
              &ensp;&quot;&quot;&quot;<br/>
              &ensp;mid = start + (end - start) / 2 # find mid point between start and end<br/>
              <br/>
              &ensp;if start &gt; end:<br/>
              &emsp;return -1<br/>
              &ensp;elif data[mid] == find: # found it<br/>
              &emsp;return mid<br/>
              &ensp;elif data[mid] &gt; find: # mid index is greater than find, search lower half<br/>
              &emsp;return binarySearch(data, find, start, mid - 1)<br/>
              &ensp;else: # mid index is less than find, search upper half<br/>
              &emsp;return binarySearch(data, find, mid + 1, end)<br/>
            </code>
          </div>
        </main>
        <div className='bg-slate-400 text-center font-bold cursor-pointer py-2 mt-2' onClick={handleContentHeight}>
          Expand Post
        </div>
      </div>
    </div>
  )
}

export default GistPost