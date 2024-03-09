import React from 'react'

type ButtonPropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined,
  fullWidth?: boolean,
  children?: React.ReactNode,
  primary?:boolean,
  secondary?:boolean,
  disabled?:boolean,
  onClick:() => void,
  customClasses?:string,
}


function Button({type,fullWidth,children,onClick,secondary,primary,disabled,customClasses} : ButtonPropsType) {
  const clickHandler = (e:any) => {
    e.preventDefault();
    onClick();
  }
  return (
    <button
        type={type || "button"}
        onClick={clickHandler}
        disabled={disabled}
        className={`flex justify-center items-center gap-x-3 py-2 font-medium focus:outline-none transition duration-300 
        ${fullWidth && `w-full`}
        ${secondary && 'text-main hover:underline'}
        ${primary && 'bg-main rounded focus:outline-none text-white'} 
        ${customClasses}`}
    >
        {children}
    </button>
  )
}

export default Button