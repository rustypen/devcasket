import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo/logo.svg'
import DarkLogo from '../../assets/logo/svg/logo-gradient-white-bitbucket.svg'

type Props = {}

function Header({}: Props) {
  return (
    <header className="p-3 grid grid-cols-[160px_1fr_160px] gap-x-2.5 items-center">
      <Link href="">
        <a className='text-emerald-500'>
          <Logo />
        </a>
      </Link>
      <div className="flex gap-4 justify-center">
        <Link href="/">
          <a className="font-semibold">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold">
            Pull Requests
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold">
            About
          </a>
        </Link>
      </div>
      <div className="leading-none flex items-center gap-4">
        <span className="font-semibold text-sm">
          Steve Roger
        </span>
        <Image
          width={48}
          height={48}
          alt="user-avatar"
          src="https://source.unsplash.com/random/500x500/"
          className="rounded-full block"
        />
      </div>
    </header>
  )
}

export default Header