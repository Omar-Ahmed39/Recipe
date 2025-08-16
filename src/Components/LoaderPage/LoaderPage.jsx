import React from 'react'
import {RingLoader} from 'react-spinners';

export default function LoaderPage() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <RingLoader />
        </div>
    )
}
