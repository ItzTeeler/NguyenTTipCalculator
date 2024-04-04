'use client'
import React from 'react'
import Image from 'next/image'
import dollarIcon from '@/images/icon-dollar.svg'
const InputBill = (props: {value: any; error: any; input: any;}) => {


  return (
    <div className='relative'>
      <div className='absolute flex items-center left-4 inset-y-0'>
        <Image src={dollarIcon} alt="dollar icon" />
      </div>
      <input className={`bg-[color:var(--bgInput)] rounded-[6px] w-full px-4 py-1.5 text-right font-[Space-Mono-Bold] text-[color:var(--totalBg)] text-2xl ${props.error ? 'outline-2 outline-[color:var(--error)] outline' : ''}`} value={props.value} onChange={props.input} type="number" placeholder='0' />
    </div>
  )
}

export default InputBill
