import React from 'react'

const TotalTipComponent = (props: {text: string; money: string}) => {
  return (
    <div className='flex flex-row items-center justify-between relative'>
      <div>
        <p className='text-[color:var(--white)] font-[Space-Mono-Bold]'>{props.text}</p>
        <p className='text-[16px] text-[color:var(--textColor)]'>/ person</p>
      </div>
      <p className='text-4xl text-[color:var(--totalNumber)] font-[Space-Mono-Bold]'>${props.money}</p>
    </div>
  )
}

export default TotalTipComponent
