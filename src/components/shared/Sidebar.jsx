import React from 'react'
import ImageLogo from '../../assets/logo.png'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-2 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={ImageLogo} alt="" className='w-24 h-24 object-contain'/>
                <span className='text-neutral-180 text-lg'>BetaCode</span>
            </div>
            <div className='flex-1 py-4 flex flex-col gap-0.5'>
                {
                    DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SideBarLink key={item.key} item={item}/>
                    ))
                }
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {
                    DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <SideBarLink key={item.key} item={item}/>
                    ))
                }
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
            </div>
        </div>
    )
}

export default Sidebar

function SideBarLink({item}){
    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={ classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',linkClass)}> 
            <span className='text-[#0099cc]'>{item.icon}</span>
            <span className='text-sm'>{item.label}</span>
        </Link>
    )
}
