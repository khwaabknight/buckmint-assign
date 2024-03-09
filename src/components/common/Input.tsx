import React from 'react'

type InputProps = {
    type?: string,
    name: string,
    label?: string,
    placeholder:string,
    value:string | number,
    id:string,
    customClasses?:string,
    onChange:(str:string) => void,
}

function Input({type,name,label,placeholder,value,id,customClasses="",onChange} : InputProps) {
    const changeHandler = (e:any) => {
        onChange(e.target.value);
    }
  return (
    <>
        {label && <label className=''>{label}</label>}
        <input 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        className={`w-full px-4 py-2.5 focus:outline-none border border-grey2 rounded bg-backgrd  ${customClasses}`}
        onChange={changeHandler}
      />
    </>
  )
}

export default Input