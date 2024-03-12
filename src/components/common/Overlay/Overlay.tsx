import React from 'react'

type OverlayProps = {
    showModal?:boolean,
    closeHandler:() => void,
    children:React.ReactNode,
}

function Overlay({showModal,closeHandler,children} : OverlayProps) {
    if (!showModal) return null;

    const outsideClickHandler = (e:any) => {
        if(e.target.id === 'modalbg') closeHandler();
    }

    return (
        <div onClick={outsideClickHandler} id='modalbg' className='fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-20'>
            {children}
        </div>
    )
}

export default Overlay