import React from 'react'
import ImageLogo from '../../assets/logo.png'

function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-2 flex flex-col text-white">
            <div className="flex-1">
                <img src={ImageLogo} alt="" className='w-24 h-24 object-contain'/>
                <span className='text-neutral-180 text-lg'>BetaCode</span>
            </div>
            <div>bottom bar</div>
        </div>
    )
}

export default Sidebar
