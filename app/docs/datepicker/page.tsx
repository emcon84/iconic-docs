'use client'
import React, { useState } from 'react'
import { DatePicker as Picker } from '../../components/DatePicker'



const DatePicker = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    const date =
        `
import { DatePicker } from 'iconic-components';

<DatePicker
    selectedDate={selectedDate}
    onChange={handleDateChange}
    setSelectedDate={setSelectedDate}
    mode={'primary'}
/>
`

    return (
        <>
            <h1 className='text-3xl text-white'>Date Picker</h1>
            <hr />
            <div className='grid grid-cols-2 gap-4'>
                <div className='m-4 bg-slate-500 text-white p-5 rounded-lg'>
                    <pre>
                        <code lang='javascript'>
                            {
                                date
                            }
                        </code>
                    </pre>
                </div>
                <div className='m-4 flex justify-center items-center bg-white p-5 rounded-lg'>
                    <Picker
                        selectedDate={selectedDate}
                        onChange={handleDateChange}
                        setSelectedDate={setSelectedDate}
                        mode={'primary'}
                    />
                </div>
            </div>
        </>
    )
}

export default DatePicker
