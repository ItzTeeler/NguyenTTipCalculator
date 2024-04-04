import React from 'react'

const Header = (props:{title: string; error: boolean}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
        <p className='text-[color:var(--textColor)] text-[16px] font-[Space-Mono-Bold]'>{props.title}</p>
        {props.error && <p className='font-[Space-Mono-Bold] text-[color:var(--error)]'>Can\'t be zero</p>}
    </div>
  )
}

export default Header
