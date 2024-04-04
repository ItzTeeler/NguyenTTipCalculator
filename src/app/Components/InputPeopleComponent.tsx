import React, { ChangeEvent } from 'react'
import Image from 'next/image'
import personIcon from '@/images/icon-person.svg'
const InputPeopleComponent = (props:{value: string|number; error: boolean; input: (people: ChangeEvent<HTMLInputElement>)=>void;}) => {
  return (
    <div className='relative'>
      <div className='absolute flex items-center left-4 inset-y-0'>
        <Image src={personIcon} className='' alt="person icon" />
      </div>
      <input className={`bg-[color:var(--bgInput)] rounded-[6px] w-full px-4 py-1.5 text-right font-[Space-Mono-Bold] text-[color:var(--totalBg)] text-2xl ${props.error ? 'outline-2 outline-[color:var(--error)] outline' : ''}`} type="number" value={props.value} onChange={props.input} placeholder='0'/>
    </div>
  )
}

export default InputPeopleComponent
