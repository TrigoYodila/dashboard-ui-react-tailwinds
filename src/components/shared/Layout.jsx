import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <div className="p-4">
                <div>header</div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
