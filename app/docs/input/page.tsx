'use client'
import React, { useState } from 'react'
import { Input as InputDocs } from '../../components/Input';

const Input = () => {
    const [inputValue, setInputValue] = useState<string>('')

    const input =
        `
import { Input } from 'iconic-components';

<Input
    placeholder='Ingrese texto'
    type='text'
    mode='primary'
    value={inputValue}
    onChange={setInputValue}
/>
`


    return (
        <>
            <h1 className='text-3xl text-white'>Input</h1>
            <hr />
            <div className='grid grid-cols-2 gap-4'>
                <div className='m-4 bg-slate-500 text-white p-5 rounded-lg'>
                    <pre>
                        <code lang='javascript'>
                            {
                                input
                            }
                        </code>
                    </pre>
                </div>
                <div className='m-4 flex justify-center items-center bg-white p-5 rounded-lg'>
                    <InputDocs
                        placeholder='Ingrese texto'
                        type='text'
                        mode='primary'
                        value={inputValue}
                        onChange={setInputValue}
                    />
                </div>
            </div>

        </>
    )
}

export default Input
