'use client'
import React from 'react'
import { Button as ButtonDocs } from '../../components/Button'
import IconDownload from '@/app/components/Icons/IconDownload'

const Button = () => {

    const handleClick = () => {
        console.log('Click')
    }

    const button =
        `
    import {Button} from 'iconic-components'

    <Button
        type='primary'
        label='texto'
        onPress={() => handleLoading()}
    />   

    `
    const buttonloading =
        `
    import {Button} from 'iconic-components'

    <Button
        type='primary'
        label='loading'
        onPress={() => handleLoading()}
        loading={loading}
    />   

    `
    const buttonicon =
        `
    import {Button} from 'iconic-components'

    <Button
        type='primary'
        label='loading'
        onPress={() => handleLoading()}
        icon={<IconDownload style={{ marginRight: 5 }} />}
    />   

    `

    return (
        <>
            <h1 className='text-3xl text-white'>Button</h1>
            <hr />
            <div className='grid grid-cols-2 gap-4'>
                <div className='m-4 bg-slate-500 text-white p-5 rounded-lg'>
                    <pre>
                        <code lang='javascript'>
                            {
                                button
                            }
                        </code>
                    </pre>
                </div>
                <div className='m-4 flex justify-center items-center bg-white p-5 rounded-lg'>
                    <ButtonDocs
                        label='texto'
                        type='primary'
                        onPress={handleClick}
                    />
                </div>
            </div>
            <h1 className='text-3xl text-white'>Button Loading</h1>
            <hr />
            <div className='grid grid-cols-2 gap-4'>
                <div className='m-4 bg-slate-500 text-white p-5 rounded-lg'>
                    <pre>
                        <code lang='javascript'>
                            {
                                buttonloading
                            }
                        </code>
                    </pre>
                </div>
                <div className='m-4 flex justify-center items-center bg-white p-5 rounded-lg'>
                    <ButtonDocs
                        label='loading'
                        type='primary'
                        onPress={handleClick}
                        loading={true}
                    />
                </div>
            </div>
            <h1 className='text-3xl text-white'>Button Icon</h1>
            <hr />
            <div className='grid grid-cols-2 gap-4'>
                <div className='m-4 bg-slate-500 text-white p-5 rounded-lg'>
                    <pre>
                        <code lang='javascript'>
                            {
                                buttonicon
                            }
                        </code>
                    </pre>
                </div>
                <div className='m-4 flex justify-center items-center bg-white p-5 rounded-lg'>
                    <ButtonDocs
                        label='loading'
                        type='primary'
                        onPress={handleClick}
                        icon={<IconDownload style={{ marginRight: 5, marginTop: 2 }} />}
                    />
                </div>
            </div>
        </>
    )
}

export default Button
