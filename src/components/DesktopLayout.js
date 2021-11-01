import React from 'react';
import DataChart from './DataChart';

const DesktopLayout = () => {

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Dashboard using ReactJS </h2>
            <h3>Desktop Layout</h3>
            <DataChart height={150} width={400} />
        </div>
    )
}

export default DesktopLayout
