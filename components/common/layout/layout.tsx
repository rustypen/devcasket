import React, { ReactElement } from 'react'
import Header from '../header'
import Sidebar from '../navigation/sidebar'

function Layout(children: ReactElement) {
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='flex gap-3'>
        <nav>
          <Sidebar />
        </nav>
        <main className='w-full'>{children}</main>
        <aside className='w-full p-3 max-w-sm'>
          Aside Content
        </aside>
      </div>
    </div>
  )
}

export default Layout