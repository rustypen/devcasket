import Link from 'next/link'
import React from 'react'

import clx from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { Collapse } from '@mui/material'

const LINKS = [
  {
    id: 0,
    title: "create",
    label: "Create",
    link: "/",
  },
  {
    id: 1,
    title: "home",
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "profile",
    label: "Profile",
    link: "/profile",
  },
  {
    id: 3,
    title: "pullRequest",
    label: "Pull Request",
    link: "/pullRequest",
  },
  {
    id: 4,
    title: "settings",
    label: "Settings",
    subLinks: [
      {
        id: 5,
        title: "profile",
        label: "Profile",
        link: "/settings/profile",    
      },
      {
        id: 6,
        title: "notification",
        label: "Notification",
        link: "/settings/notification",    
      },
      {
        id: 7,
        title: "account",
        label: "Account",
        link: "/settings/account",    
      },
      {
        id: 8,
        title: "authentication",
        label: "Authentication",
        link: "/settings/authentication",    
      },
    ]
  }
]

const RenderSubLinks = ({label, subLinks}: any) => {
  const [active, setActive] = useState<boolean>(false);
  
  return (
    <div className=''>
      <button
        type='button'
        className={clx(
          "flex w-full justify-between items-center px-3 py-1.5",
          active && "bg-blue-100"
        )}
        onClick={() => setActive(prev => !prev)}
      >
        <span>
          {label}
        </span>
        <span>
          <FontAwesomeIcon
            size='xs'
            icon={active ? faChevronUp : faChevronDown}
          />
        </span>
      </button>
      <Collapse
        in={active}
        className={clx(
          "pl-3",
          active && "bg-blue-50"
        )}
      >
        <RenderLinks links={subLinks}/>
      </Collapse>
    </div>
  )
}


const RenderLinks = ({links}: any) => {
  return links.map((item: any) => {
    if (item.subLinks) {
      return (
        <RenderSubLinks {...item} key={item.id}/>
      )
    } 
    return (
      <Link href={item.link} key={item.id}>
        <a className="rounded block capitalize px-3 py-1.5">
          {item.label}
        </a>
      </Link>
    )
  })
}


type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='w-60'>
      <RenderLinks links={LINKS} />
    </div>
  )
}

export default Sidebar