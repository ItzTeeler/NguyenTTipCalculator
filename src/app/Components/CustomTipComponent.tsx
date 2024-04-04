import React from 'react'

const CustomTipComponent = (props: {value: string; tip: (value: number)=> void;}) => {
  return (
    <div className='h-full py-1'>
      <input type="number" className='font-[Space-Mono-Bold] text-[color:var(--totalBg)] bg-[color:var(--bgInput)] text-right h-full w-full rounded-md text-xl focus:outline-2 focus:outline-[color:var(--totalNumber)]' value={props.value} onChange={(e) => props.tip(parseFloat(e.target.value))} placeholder='Custom'/>
    </div>
  )
}

export default CustomTipComponent
