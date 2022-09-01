import React from 'react'
import KekambasClass from './components/KekambasClass'
import Navbar from './components/Navbar'

export default function App() {
    let appName = 'My Classmates'
    
    return (
        <>
            <Navbar brand={appName} />
            <div className='container'>
                <KekambasClass />
            </div>
        </>
    )
}