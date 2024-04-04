import React from 'react'

const ButtonComponents = (props: {number: string; tip: (number:string)=>void}) => {
  return (
      <button onClick={() => props.tip(props.number)} className='bg-[color:var(--buttonBg)] text-[color:var(--white)] font-[Space-Mono-Bold] w-full rounded-md py-2 text-2xl hover:bg-[color:var(--totalNumber)] focus:bg-[color:var(--totalNumber)] focus:text-[color:var(--totalBg)]'>
        {props.number}%
      </button>
  )
}

export default ButtonComponents
