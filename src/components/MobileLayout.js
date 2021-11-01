import React from 'react'
import DataChart from './DataChart'

const MobileLayout = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Dashboard using ReactJS </h2>
            <h3>Mobile Layout</h3>
            <DataChart height={250} width={100}/>
        </div>
    )
}

export default MobileLayout
