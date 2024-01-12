import React from 'react'
import ImageLogo from '../../assets/logo.png'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'
import { Link } from 'react-router-dom'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-2 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={ImageLogo} alt="" className='w-24 h-24 object-contain'/>
                <span className='text-neutral-180 text-lg'>BetaCode</span>
            </div>
            <div className='flex-1'>
                {
                    DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SideBarLink key={item.key} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar

function SideBarLink({item}){
    return (
        <Link to={item.path} className={linkClass}> 
            <span>{item.icon}</span>
            {item.label}
        </Link>
    )
}
