import React from 'react'

const ButtonResetComponent = (props: {reset: ()=>void; bg: string; opacity: string}) => {
  return (
    <button onClick={props.reset} className={`w-full rounded-md py-2 text-2xl text-[color:var(--buttonBg)] ${props.bg} font-[Space-Mono-Bold] hover:bg-[color:var(--hover)] ${props.opacity}`}>
        RESET        
    </button>
  )
}

export default ButtonResetComponent
