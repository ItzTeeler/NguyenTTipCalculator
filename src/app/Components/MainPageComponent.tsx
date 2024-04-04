'use client'
import React, { useEffect, useState, ChangeEvent } from 'react'
import iconLogo from '@/images/logo.svg'
import Image from 'next/image'
import InputBill from './InputBillComponent'
import Header from './HeaderComponent'
import ButtonComponents from './ButtonComponents'
import CustomTipComponent from './CustomTipComponent'
import NumberofPeopleHeader from './NumberofPeopleHeader'
import InputPeopleComponent from './InputPeopleComponent'
import TotalTipComponent from './TotalTipComponent'
import ButtonResetComponent from './ButtonResetComponent'
const MainPageComponent = () => {

    // Bill
    const [billInput, setBillInput] = useState<number | undefined>(undefined);
    const [invalidBill, setInvalidBill] = useState<boolean>(false);
    // People
    const [peopleInput, setPeopleInput] = useState<number | undefined>(undefined);
    const [invaldPeople, setInvalidPeople] = useState<boolean>(false);

    // Tip Buttons
    const [tipPercent, setTipPercent] = useState<number | undefined>(undefined);
    const [customPercent, setCustomPercent] = useState<number | undefined>(undefined);


    // Total Tip
    const [tipAmount, setTipAmount] = useState<string>("0.00");
    const [total, setTotal] = useState<string>("0.00");

    // Reset Button
    const [bgColor, setBgColor] = useState<string>("bg-[color:var(--totalNumber)]")
    const [buttonOpacity, setButtonOpacity] = useState<string>("opacity-20")

    const handleBillInput = (bill: ChangeEvent<HTMLInputElement>) => {
        const billValue = parseFloat(bill.target.value);
        setBillInput(billValue);
        if (billValue <= 0) {
            setInvalidBill(true);
            setButtonOpacity("opacity-20 cursor-not-allowed");
        } else {
            setInvalidBill(false);
            setButtonOpacity("opacity-100 cursor-auto");
        }
    };
    
    // People
    const handlePersonInput = (people: ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(people.target.value);
        setPeopleInput(inputValue);
        if (inputValue <= 0) {
            setInvalidPeople(true);
            setButtonOpacity("opacity-20 cursor-not-allowed");
        } else {
            setInvalidPeople(false);
            setButtonOpacity("opacity-100 cursor-auto");
        }
    };
    

    // Tip Button

    const handleTipButton = (tip: string | undefined) => {
        if (tip !== undefined) {
            const tipValue = parseInt(tip);
            setTipPercent(tipValue);
            console.log(tipValue);
        }
    }
    
    const handleCustomInput = (tip: number | undefined) => {
        if (tip !== undefined) {
            const tipValue = tip;
            setTipPercent(tipValue);
            setCustomPercent(tipValue);
        }
    }
    

    // Calculate Tip

    const handleTipTotal = () => {
        if (billInput === undefined || tipPercent === undefined) {
            setTipAmount("0.00");
        } else {
            const percentTip = tipPercent / 100;
            const tip = billInput * percentTip;
            setTipAmount(String(tip.toFixed(2)));
        }
    }

    const handleTotal = () => {
        if (billInput === undefined) {
            setTotal("0.00");
            return;
        }
        if (peopleInput === undefined || peopleInput === 0) {
            const bill = parseFloat(billInput.toString());
            setTotal(bill.toFixed(2));
            return;
        }
    
        const tip = parseFloat(tipAmount);
        const total = (billInput / peopleInput) + tip;
        setTotal(total.toFixed(2).toString());
    };
    
    
    
    
    
    
    

    // Reset
    const handleReset = () => {
        setBillInput(undefined);
        setInvalidBill(false);
    
        setPeopleInput(undefined);
        setInvalidPeople(false);
    
        setTipPercent(undefined);
        setCustomPercent(undefined);

        setTipAmount("0.00");
        setTotal("0.00");

        setButtonOpacity("opacity-20");
    };
    



    useEffect(() => {
        handleTipTotal();
        handleTotal();
    }, [billInput, peopleInput, tipPercent, tipAmount]);
    return (
        <>
            <div className='min-h-screen bg-[color:var(--bgColor)]'>
                <div className='py-16 flex justify-center'>
                    <Image src={iconLogo} alt='iconLogo' className='h-[54px] w-[87px]' />
                </div>
                <div className='flex justify-center'>
                    <div className='bg-[color:var(--white)] p-8 rounded-[1.5rem] w-full grid grid-cols-1 md:grid-cols-2 gap-8 mx-0 md:mx-2 just max-w-4xl'>
                        <div className=' grid gap-8 px-0 py-1'>
                            <div className='grid gap-2'>
                                <HeaderComponent title="Bill" error={invalidBill}/>
<InputBill value={billInput !== undefined ? billInput.toString() : ''} error={invalidBill} input={handleBillInput} />                            </div>
                            <div className='grid gap-2'>
                                <Header title="Select Tip %" error={false}/>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center'>
                                    <ButtonComponents number="5" tip={handleTipButton} />
                                    <ButtonComponents number="10" tip={handleTipButton} />
                                    <ButtonComponents number="15" tip={handleTipButton} />
                                    <ButtonComponents number="25" tip={handleTipButton} />
                                    <ButtonComponents number="50" tip={handleTipButton} />
                                    <CustomTipComponent value={customPercent !== undefined ? customPercent.toString() : ''} tip={handleCustomInput} />

                                </div>
                            </div>
                            <div className='grid gap-2'>
                                <NumberofPeopleHeader title="Number of People" error={invaldPeople} />
                                <InputPeopleComponent value={peopleInput ?? ''} error={invaldPeople} input={handlePersonInput}/>                            </div>

                        </div>





                        <div className='bg-[color:var(--totalBg)] rounded-2xl grid gap-8 p-8'>
                            <div className='grid gap-0'>
                                <TotalTipComponent text="Tip Amount" money={tipAmount} />
                                <TotalTipComponent text="Total" money={total} />
                            </div>

                            <div className='mt-auto'>
                                <ButtonResetComponent reset={handleReset} bg={bgColor} opacity={buttonOpacity} />
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MainPageComponent
