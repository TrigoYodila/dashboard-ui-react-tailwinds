import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <div className='bg-sky-200'>sidebar</div>
        <div>header</div>
        <Outlet />
    </div>
  )
}

export default Layout