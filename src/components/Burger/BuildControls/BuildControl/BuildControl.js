import React from 'react'
import './BuildControl.css'

const buildControl = (props) => (
    <div className="build-control">
        <div>{props.label}</div>
        <button className="less">Less</button>
        <button className="more">More</button>
    </div>
);

export default buildControl